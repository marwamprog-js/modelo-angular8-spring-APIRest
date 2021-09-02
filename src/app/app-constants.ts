export class AppConstants {

	public static get baseServidor(): string { return "http://localhost:8086/" }

	public static get baseLogin(): string { return this.baseServidor + "cursoapi/login" }

	public static get baseUrl(): string { return this.baseServidor + "cursoapi/usuario/" }

	public static get getBaseUrlPath(): string { return this.baseServidor + "cursoapi/" }

}
