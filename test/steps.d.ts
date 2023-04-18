/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type WebhooksiteHelper = import('../src/index');
type ExpectHelper = import('codeceptjs-expect');

declare namespace CodeceptJS {
	interface SupportObject {
		I: I;
		current: any;
	}
	interface Methods extends REST, JSONResponse, WebhooksiteHelper, ExpectHelper {}
	interface I
		extends ReturnType<steps_file>,
			WithTranslation<REST>,
			WithTranslation<JSONResponse>,
			WithTranslation<WebhooksiteHelper>,
			WithTranslation<ExpectHelper> {}
	namespace Translation {
		interface Actions {}
	}
}
