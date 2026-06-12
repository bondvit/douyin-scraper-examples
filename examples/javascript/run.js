/**
 * douyin-scraper — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Docs: https://apify.com/bovi/douyin-scraper
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
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
};

const run = await client.actor('bovi/douyin-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item);
