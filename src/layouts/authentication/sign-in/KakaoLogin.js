import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI, JAVASCRIPT_KEY } from "./kakaoData";

function KakaoLogin() {
  const navigate = useNavigate();
  const params = new URL(document.location.toString()).searchParams;
  const KAKAO_CODE = params.get("code"); // kakao 인가코드.
  // console.log(REDIRECT_URI);

  // kakao토큰 받기.
  const getKakaoToken = async () => {
    const queryParams = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: KAKAO_CODE,
    }).toString();

    // const queryParams = {
    //   grant_type: "authorization_code",
    //   client_id: REST_API_KEY,
    //   redirect_uri: REDIRECT_URI,
    //   code: KAKAO_CODE,
    // };

    try {
      const { data } = await axios.post(`https://kauth.kakao.com/oauth/token?${queryParams}`, {
        headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" },
      });
      console.log(data);

      // Kakao Javascript SDK 초기화
      window.Kakao.init(JAVASCRIPT_KEY);
      // SDK 초기화 여부를 판단합니다.
      console.log(window.Kakao.isInitialized());
      localStorage.setItem("token", data.access_token);
      const accToken = localStorage.getItem("token");
      // 카카오 API를 클라이언트에서 JavaScript SDK로 호출하려면 Access token값을 할당해야 한다.
      window.Kakao.Auth.setAccessToken(accToken);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getKakaoToken();
  }, []);
  return <div>kakaoLogin redirect_uri</div>;
}

export default KakaoLogin;
