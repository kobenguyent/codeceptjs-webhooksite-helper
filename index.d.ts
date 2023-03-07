export = WebhooksiteHelper;

declare class WebhooksiteHelper {
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
}
