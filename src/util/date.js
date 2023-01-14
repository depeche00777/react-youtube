import { format, register } from "timeago.js"; //시간 표시를 ~얼마전 이런 식으로
import koLocale from "timeago.js/lib/lang/ko"; //timeago 한글 사용

register("ko", koLocale);

export function formatAgo(data, lang = "en_US") {
	return format(data, lang);
}

//이름있는 함수를 쓸대는 export default대신 export만
//lang = 'en_US'  :랭귀지 없을때 기본
