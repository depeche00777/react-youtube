import React, { useState, useEffect } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
	const { keyword } = useParams();
	//object Deconstruction, URL의 파라메터를 가져와서 이를 코드 내에서 상수화 시켜줌
	const navigate = useNavigate(); //입력창내용으로 이동을 위해
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	};

	//키워드가 변경될때마다 서치 안 텍스트를 업데이트(없을땐 빈 문자열)-제일 마지막에
	useEffect(() => setText(keyword || ""), [keyword]);

	return (
		<header className="w-full flex p-4 border-b border-zinc-800 mb-4">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl text-brand" />
				<h1 className="ml-2 text-3xl font-LeagueGothic">YouTube</h1>
				<sup className="text-xs text-zinc-500 ml-2">KR</sup>
			</Link>
			<form className="w-full flex justify-center" onSubmit={handleSubmit}>
				<input
					className="w-7/12 p-2 outline-none border border-zinc-700 bg-black text-gray-50 rounded-l-full pl-4"
					type="text"
					placeholder="Loading..."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button className="bg-zinc-700 px-4 rounded-r-full">
					<BsSearch />
				</button>
			</form>
		</header>
	);
}
