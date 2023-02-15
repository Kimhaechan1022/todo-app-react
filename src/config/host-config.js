
// 브라우저가 현재 클라이언트 호스트 이름 얻어오기
const hostname = window.location.hostname;

let backendHost; // 백엔드 호스트 이름

if (hostname === 'localhost') {
    backendHost = 'http://localhost:8080';
} else if (hostname === 'practice-s3-khc-bucket001.s3-website.ap-northeast-2.amazonaws.com') {
    backendHost = 'http://3.35.54.218'; //할당된 ip 변동될수 있음
}

export const BASE_URL = backendHost;
export const TODO = '/api/todos';
export const PROJECT = '/api/projects';
export const USER = '/api/auth';