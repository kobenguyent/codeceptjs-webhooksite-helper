const { I } = inject();
let token;

Feature('webhooksite');

Before(async () => {
	token = await I.getWebhookSiteToken();
});

Scenario('get token', () => {
	I.expectNotEqual(token, undefined);
});

Scenario('get webhooksite url with existing token', async () => {
	const url = await I.getWebhookSiteUrl(token);
	I.expectEqual(url, `https://webhook.site/${token}`);
});

Scenario('get webhooksite url without token', async () => {
	const url = await I.getWebhookSiteUrl();
	I.expectContain(url, `https://webhook.site/`);
});

Scenario('get webhooksite email', async () => {
	const email = await I.getWebhookSiteUniqueEmailAddress();
	I.expectContain(email, `@email.webhook.site`);
});
