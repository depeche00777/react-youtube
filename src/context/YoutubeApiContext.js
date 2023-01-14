//리팩토링 해준 이후
import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient"; //저장해놓은 파일 사용시
//import YoutubeClient from "../api/youtubeClient"; //찐 사용
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient(); //저장해놓은 파일 사용시
// const client = new YoutubeClient(); //찐 사용
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
	return (
		<YoutubeApiContext.Provider value={{ youtube }}>
			{children}
		</YoutubeApiContext.Provider>
	);
}

export function useYoutubeApi() {
	return useContext(YoutubeApiContext);
}
// Provider안의 어떤 children(자식 컴포넌트에서도) 사용할 수 있게 됨
