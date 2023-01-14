import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
	const {
		state: { video },
	} = useLocation(); //queryString을 받아옴
	//console.log("video???", video);
	const { title, channelId, channelTitle, description } = video.snippet;
	return (
		<section className="flex flex-col lg:flex-row gap-y-4">
			<article className="basis-4/6 p-4">
				<iframe
					id="player"
					type="text/html"
					width="100%"
					height="640"
					src={`https://www.youtube.com/embed/${video.id}`}
					title={title}
				/>
				<div className="p-4">
					<h2 className="text-xl font-bold">제목 : {title}</h2>
					<ChannelInfo id={channelId} name={channelTitle} />
					<pre className="whitespace-pre-wrap">{description}</pre>
				</div>
			</article>
			<aside className="basis-2/6">
				<RelatedVideos id={video.id} />
			</aside>
		</section>
	);
}
//경고 문구 frameborder="0" 대신 다른 걸로
