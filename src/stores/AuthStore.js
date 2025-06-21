import { makeAutoObservable } from "mobx";

class AuthStore {
	constructor() {
		makeAutoObservable(this);
	};

	user = undefined;

};

const Auth = new AuthStore();
export default Auth;
