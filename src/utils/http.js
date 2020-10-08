import axios from "axios";
const instance = axios.create({
  baseURL: "https://m.maizuo.com", //基本的url
  timeout: 3000, //延时默认3秒
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"15587791402160368550306","bc":"310100"}',
  }, //请求头
});
export default instance;
