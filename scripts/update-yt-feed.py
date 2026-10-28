#!/usr/bin/env python3
"""Fetch the YouTube channel RSS feed and write docs/yt-feed.json.

Run by the scheduled GitHub Action so the site can fetch the feed
same-origin (no CORS proxy or API key required at runtime).
"""
import json
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

CHANNEL_ID = "UCZIZwWoayEW1CXxqE0TwyLQ"
LIMIT = 12
FEED_URL = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"
OUT = Path(__file__).resolve().parent.parent / "docs" / "yt-feed.json"

NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "yt": "http://www.youtube.com/xml/schemas/2015",
    "media": "http://search.yahoo.com/mrss/",
}


def fetch(url: str) -> bytes:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
            )
        },
    )
    with urllib.request.urlopen(req, timeout=30) as res:
        return res.read()


def main() -> int:
    root = ET.fromstring(fetch(FEED_URL))
    items = []
    for entry in root.findall("atom:entry", NS)[:LIMIT]:
        video_id = (entry.findtext("yt:videoId", default="", namespaces=NS) or "").strip()
        title = (entry.findtext("atom:title", default="", namespaces=NS) or "").strip()
        link_el = entry.find("atom:link[@rel='alternate']", NS)
        link = link_el.get("href") if link_el is not None else ""
        published = entry.findtext("atom:published", default="", namespaces=NS) or ""
        thumb_el = entry.find("media:group/media:thumbnail", NS)
        thumbnail = thumb_el.get("url") if thumb_el is not None else ""
        if not video_id and not link:
            continue
        if not thumbnail and video_id:
            thumbnail = f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg"
        items.append(
            {
                "id": video_id,
                "title": title,
                "url": link or f"https://www.youtube.com/watch?v={video_id}",
                "thumbnail": thumbnail,
                "published": published,
            }
        )

    if not items:
        print("No items parsed from feed", file=sys.stderr)
        return 1

    payload = {
        "updated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "items": items,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(items)} items to {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
