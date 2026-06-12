"""
douyin-scraper — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Docs: https://apify.com/bovi/douyin-scraper
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {   'mode': 'hot_search',
    'keywords': ['美食'],
    'maxItems': 50,
    'maxComments': 50,
    'proxyConfiguration': {   'useApifyProxy': True,
                              'apifyProxyGroups': ['RESIDENTIAL'],
                              'apifyProxyCountry': 'CN'}}

run = client.actor("bovi/douyin-scraper").call(run_input=run_input)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
