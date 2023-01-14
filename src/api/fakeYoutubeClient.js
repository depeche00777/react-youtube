//related를 받아오기 위해 추가
import axios from "axios";

export default class FakeYoutubeClient {
	//related받아오려고 parmas추가
	//relatedToVideoId가 있으면 related.json사용하게
	async search({ params }) {
		//const isRelated = params.relatedToVideoId; 이렇게 변수로 안 만들고 바로 인라인
		/*return params.relatedToVideoId
			? axios.get("/videos/related.json")
			: axios.get("/videos/search.json");
*/
		//위에꺼가 반본되서 시러
		return axios.get(
			`/videos/${params.relatedToVideoId ? "related" : "search"}.json`,
		);
	}

	async videos() {
		return axios.get("/videos/popular.json");
	}

	async channels() {
		return axios.get("/videos/channel.json");
	}
}
