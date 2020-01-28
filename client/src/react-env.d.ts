declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: "development" | "production" | "test";
		readonly HELLO_DOT_ENV: string;
	}
}

declare module "*.svg" {
	const content: string;
	export default content;
}
