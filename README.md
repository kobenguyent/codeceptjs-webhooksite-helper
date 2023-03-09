[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# codeceptjs-webhooksite-helper

CodeceptJS webhooksite helper wraps [webhooksite APIs](https://docs.webhook.site/api/about.html) to test webhooks.

NPM package: <https://www.npmjs.com/package/codeceptjs-webhooksite-helper>

## Installation

`npm i codeceptjs-webhooksite-helper --save-dev`

## Configuration

This helper should be added in your codeceptjs config file: `codecept.conf.*`

Example:

```
{
...
   helpers: {
    REST: {
      prettyPrintJson: true
    },
    WebhooksiteHelper: {
      require: 'codeceptjs-webhooksite-helper',
    }
   }
...
}
```

## Usage

- To use this helper, you must enable `REST` helper
- If there is auto-complete for `I` actor, try running `npx codeceptjs def`
- Some provided actions:

```
/**
   * Get webhook.site uuid/token
   */
  getWebhookSiteToken(): Promise<string>;

  /**
   * Get webhook.site url
   * @param  {String} token
   */
  getWebhookSiteToken(token?): Promise<string>;

  /**
   * Get webhook.site unique email address
   */
  getWebhookSiteUniqueEmailAddress(): Promise<string>;

  /**
   * Get data sent to webhook.site
   * @param  {String} token
   */
  getDataSentToWebhookSite(token?): Promise<any>;
```

### Options

Only `token` that you need to provide in config level, otherwise you can provide the `token` when calling the steps.

Example:
```
Feature('Webhook tests');

Scenario.only('Get sent object from webhook.site',  async ({ I }) => {
    await I.getDataSentToWebhookSite()
});
```

Output

```
Webhook tests --
    [1]  Starting recording promises
    Timeouts: 
 › [Session] Starting singleton browser session
  Get sent object from webhook.site
    I get data sent to webhook site 
    › [Request] {"baseURL":"https://webhook.site/token/c4e2e097-ac9b-473b-bf64-be3ee9d99710/requests","headers":{}}
    › [Response] {"data":[{"uuid":"be120beb-65e8-4956-aa1e-ce1bc9508770","type":"web","token_id":"c4e2e097-ac9b-473b-bf64-be3ee9d99710","ip":"87.173.212.50","hostname":"webhook.site","method":"POST","user_agent":"insomnia/2021.4.1","content":"{\"a\": \"hello\"}","query":null,"headers":{"connection":["close"],"content-length":["14"],"accept":["*/*"],"content-type":["application/json"],"user-agent":["insomnia/2021.4.1"],"host":["webhook.site"]},"url":"https://webhook.site/c4e2e097-ac9b-473b-bf64-be3ee9d99710","size":14,"files":[],"created_at":"2023-03-07 13:52:43","updated_at":"2023-03-07 13:52:43","sorting":1678197163390912,"custom_action_output":[]}],"total":1,"per_page":50,"current_page":1,"is_last_page":true,"from":1,"to":1}
  ✔ OK in 237ms


  OK  | 1 passed   // 651ms

```
