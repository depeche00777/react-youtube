import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
//ChannelInfo.jsx와 비슷해서 그거가져옴
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
	const { youtube } = useYoutubeApi();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(["related", id], () => youtube.relatedVideos(id), {
		staleTime: 1000 * 60 * 5,
	}); //5분간은 캐시 된걸 씀); //isLoading, error추가 data는 videos, channel related 로 바꿔줌
	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>에러발생</p>}
			{videos && (
				<ul className="">
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} type="list" />
						// type="list" props로 전달해줌(릴레이티브에서 사용된거란 뜻)
					))}
				</ul>
			)}
		</>
	);
}

//return부분 Videos.jsx에서 가져옴
