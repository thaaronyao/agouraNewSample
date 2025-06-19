import { makeAutoObservable } from "mobx";
import { getSpaceXLatestLaunch } from "../services/SpaceX";

class Test {
	constructor() {
		makeAutoObservable(this);
	};

	testData = null;

	onFetchData = async () => {
		try {
			const data = await getSpaceXLatestLaunch();
			this.testData = data;

		} catch (e) {
			console.error('error fetching', e);
		}
	}

};

const TestStore = new Test();
export default TestStore;
