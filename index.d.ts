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
   * @param  {Number} sec waiting secs before getting sent data
   */
  getDataSentToWebhookSite(token?, sec?): Promise<any>;
}
