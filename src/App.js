//react-query - redux대신, 벡엔드에서 데이터 불러올때 사용하는 라이브러리, 통신을 위한게 아니라 서버의 상태 관리 사용자 상태는 놔두고 서버와 관련된 상태는 따로 관리
//react-query설치후 우산 씌워줌 Outlet어디에서도 다 사용할 수 있음
//Youtube Context 만들어준 뒤 우산 씌워줌

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient(); //인스턴스 만들어 줌

function App() {
	return (
		<>
			<SearchHeader />
			<YoutubeApiProvider>
				<QueryClientProvider client={queryClient}>
					<Outlet />
				</QueryClientProvider>
			</YoutubeApiProvider>
		</>
	);
}

export default App;
