//리팩토링 - Client를 외부로 부터 받아옴, 여기선 설정만
//채널 인포 추가

export default class Youtube {
	constructor(apiClient) {
		//다른파일에서 받아옴
		this.apiClient = apiClient;
	}

	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	//관련비디오 가져옴
	async relatedVideos(id) {
		return this.apiClient
			.search({
				params: {
					part: "snippet",
					maxResults: 25,
					type: "video",
					relatedToVideoId: id,
				},
			})
			.then((res) =>
				res.data.items.map((item) => ({ ...item, id: item.id.videoId })),
			);
	}
	//밑에꺼 복사해왔는데 그냥 간단히
	//items를 맵핑하면서 이 아이템을 각각 우리가 원하는 아이디 형태로 변환

	async channelImageURL(id) {
		return this.apiClient
			.channels({ params: { part: "snippet", id } })
			.then((res) => res.data.items[0].snippet.thumbnails.default.url);
	}

	async #searchByKeyword(keyword) {
		return this.apiClient
			.search({
				params: {
					part: "snippet",
					maxResults: 25,
					type: "video",
					q: keyword,
				},
			})
			.then((res) =>
				res.data.items.map((item) => ({ ...item, id: item.id.videoId })),
			);
	}

	//이것도 같이 간단히

	async #mostPopular() {
		return this.apiClient
			.videos({
				params: {
					part: "snippet",
					maxResults: 25,
					chart: "mostPopular",
				},
			})
			.then((res) => res.data.items);
	}
}
