const { Helper } = require('codeceptjs');
const endpoint = 'https://webhook.site';
let restClient;

class WebhooksiteHelper extends Helper {
  _getRestClient() {
    restClient = this['helpers']['REST'];
    if (!restClient)
      throw Error('Please enable REST helper to use the WebhooksiteHelper');
    return restClient;
  }

  async getWebhookSiteToken() {
    restClient = this._getRestClient();

    if (this['helpers']['WebhooksiteHelper'].config.token)
      return this['helpers']['WebhooksiteHelper'].config.token;

    const res = await restClient.sendPostRequest(endpoint + '/token');
    return `${res.data.uuid}`;
  }

  async getWebhookSiteUrl(token = null) {
    const _token = token || (await this.getWebhookSiteToken());
    return `${endpoint}/${_token}`;
  }

  async getWebhookSiteUniqueEmailAddress() {
    const token = await this.getWebhookSiteToken();
    return `${token}@email.webhook.site`;
  }

  async _wait(sec) {
    return new Promise(((done) => {
      setTimeout(done, sec * 1_000);
    }));
  }

  async getDataSentToWebhookSite(token = null, sec = 10) {
    restClient = this._getRestClient();
    let data
    const _token = token || (await this.getWebhookSiteToken());
    const url = `${endpoint}/token/${_token}/requests`;
    await this._wait(sec)
    data = await restClient.sendGetRequest(url);
    return data.data;
  }
}

module.exports = WebhooksiteHelper;
