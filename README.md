# Douyin Scraper — examples

Runnable examples for the **[Douyin Scraper — Hot Trends, Videos & TikTok China Data](https://apify.com/bovi/douyin-scraper)** on Apify.

Scrape Douyin (抖音) real-time trending topics with hot_value, view_count, discuss_count. Also supports user_videos and video_detail modes. Auto-registers ttwid — no manual cookies needed. a_bogus signed, CN-residential proxy.

## What you get per record
`discuss_video_count` · `event_time` · `hot_value` · `label` · `parse_confidence` · `rank` · `scraped_at` · `sentence_id` · `video_count` · `view_count` · `warnings` · `word` · `word_type`

## Who uses this
- **China social listening** — track brand/keyword mentions on the platform Western tools don't cover.
- **Influencer discovery** — find Douyin creators by niche with real engagement numbers.
- **Trend research** — what formats and sounds are breaking out in the Chinese market.

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |
| Sample output (real records) | [`examples/sample_output.json`](examples/sample_output.json) |

## Example input
```json
{
  "mode": "hot_search",
  "keywords": [
    "美食"
  ],
  "maxItems": 50,
  "maxComments": 50,
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": [
      "RESIDENTIAL"
    ],
    "apifyProxyCountry": "CN"
  }
}
```

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/douyin-scraper>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_MIT-licensed examples. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
