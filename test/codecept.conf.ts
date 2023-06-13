export const config: CodeceptJS.MainConfig = {
	tests: './*_test.ts',
	output: './output',
	helpers: {
		REST: {
			endpoint: 'https://webhook.site',
		},
		JSONResponse: {},
		WebhooksiteHelper: {
			require: '../src/index',
		},
		ExpectHelper: {
			require: 'codeceptjs-expect',
		},
	},
	include: {
		I: './steps_file',
	},
	name: 'test',
	plugins: {
		allure: {
			enabled: true,
			require: 'allure-codeceptjs',
			outputDir: './output',
		},
	},
};
