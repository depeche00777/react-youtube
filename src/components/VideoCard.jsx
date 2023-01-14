import React from "react";
//import { format, register } from "timeago.js"; //시간 표시를 ~얼마전 이런 식으로
//import koLocale from "timeago.js/lib/lang/ko"; //timeago 한글 사용
// 활용성을 높이기 위해 별도 파일로- src > util폴더 > date.js
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

//type도 전달받음(RelatedVideos란 뜻)
export default function VideoCard({ video, type }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet; //object deconstruction이용
	//register("ko", koLocale);  //한국어 사용을 위해

	const navigate = useNavigate();
	const isList = type === "list"; //프롭스로 받아온거가 있으면

	return (
		<li
			className={isList ? "flex m-4" : ""}
			onClick={() => {
				navigate(`/videos/watch/${video.id}`, { state: { video } });
			}}
		>
			<img
				className={isList ? "w-60 mr-4" : "w-full"}
				src={thumbnails.medium.url}
				alt={title}
			/>
			<div>
				<p
					className={
						isList
							? "text-medium font-normal line-clamp-2"
							: "font-semibold my-2 line-clamp-2"
					}
				>
					{title}
				</p>
				<p className="text-xs opacity-60">{channelTitle}</p>
				<p className="text-xs opacity-60">{formatAgo(publishedAt, "ko")}</p>
			</div>
		</li>
	);
}
