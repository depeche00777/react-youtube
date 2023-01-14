//채널 이미지가져오기 위해 추가
import axios from "axios";

//함수명수정
export default class YoutubeClient {
	constructor() {
		this.httpClient = axios.create({
			baseURL: "https://www.googleapis.com/youtube/v3",
			params: { key: AIzaSyCtBMbmkGdHQoEoSjh5r8eJJAaq_rbQ3GU },
		});
	}

	async search(params) {
		//params를 전달 받음
		return this.httpClient.get("search", params);
	}
	async videos(params) {
		return this.httpClient.get("videos", params);
	}
	async channels(params) {
		return this.httpClient.get("channels", params);
	}
}
//아래쪽 다 지움
