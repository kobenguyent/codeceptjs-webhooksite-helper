const { Helper } = require('codeceptjs');
const endpoint = 'https://webhook.site';
let restClient;

class WebhooksiteHelper extends Helper {
	private _getRestClient() {
		restClient = this['helpers']['REST'];
		if (!restClient) throw Error('Please enable REST helper to use the WebhooksiteHelper');
		return restClient;
	}

	/**
	 * Get webhook.site uuid/token
	 */
	async getWebhookSiteToken(): Promise<string> {
		restClient = this._getRestClient();

		if (this['helpers']['WebhooksiteHelper'].config.token) return this['helpers']['WebhooksiteHelper'].config.token;

		const res = await restClient.sendPostRequest(`${endpoint}/token`);
		return `${res.data.uuid}`;
	}

	/**
	 * Get webhook.site url
	 * @param  {string} token
	 */
	async getWebhookSiteUrl(token = null): Promise<string> {
		const _token = token || (await this.getWebhookSiteToken());
		return `${endpoint}/${_token}`;
	}

	/**
	 * Get webhook.site unique email address
	 */
	async getWebhookSiteUniqueEmailAddress(): Promise<`${string}@email.webhook.site`> {
		const token = await this.getWebhookSiteToken();
		return `${token}@email.webhook.site`;
	}

	private async _wait(sec: number) {
		return new Promise((done) => {
			setTimeout(done, sec * 1_000);
		});
	}

	/**
	 * Get data sent to webhook.site
	 * @param  {string} token
	 * @param  {number} [sec] waiting secs before getting sent data
	 */
	async getDataSentToWebhookSite(token = null, sec = 10): Promise<Array<any>> {
		restClient = this._getRestClient();

		const _token = token || (await this.getWebhookSiteToken());
		const url = `${endpoint}/token/${_token}/requests`;
		await this._wait(sec);
		const data = await restClient.sendGetRequest(url);
		return data.data;
	}
}

export = WebhooksiteHelper;
