import axios from "axios"
import { BASE_URL, TIMEOUT} from "./config"

class HYRequest {
  constructor(baseURL, timeout) {
    // 每次实例化时，给实例对象添加的属性instance
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 响应成功时的拦截
    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }
  request(config) {
    // axios实例可以调用request方法，发起请求
    return this.instance.request(config)
  }

  get(config) {
    // method属性会覆盖config对象的method属性
    return this.request({...config, method: "get"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}

// 导出一个实例对象
export default new HYRequest(BASE_URL, TIMEOUT)
