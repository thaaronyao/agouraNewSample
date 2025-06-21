import axios from "axios";


export const getSpaceXLatestLaunch = async () => {
	const res = await axios.get('https://api.spacexdata.com/v5/launches/latest');
	console.log('data', res);
	return res.data;
}
