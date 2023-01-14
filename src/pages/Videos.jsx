//Context사용 - 사용할때마다 인스턴스만들면 내부 로직노출 성능낭비

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
//import Youtube from "../api/youtube";
//import FakeYoutube from "../api/fakeYoutube";
//직접 가져오는게 아니라 context통해서 가져오는거라 필요없음
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
	const { keyword } = useParams();
	const { youtube } = useYoutubeApi(); //context 만들어 놓은걸 가져다 사용

	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(
		["videos", keyword],
		() =>
			// {   //context에서 사용하기 위해 지워줌
			// 	const youtube = new FakeYoutube();
			// 	return youtube.search(keyword);
			// }
			youtube.search(keyword),
		{ staleTime: 1000 * 60 * 1 },
	);

	return (
		<>
			<div>Videos - {keyword ? `🔍${keyword}` : "🔥핫트렌드"}</div>
			{isLoading && <p>Loading...</p>}
			{error && <p>에러발생</p>}
			{videos && (
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-3 gap-y-4 px-4">
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</ul>
			)}
		</>
	);
}
