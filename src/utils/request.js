import axios from 'axios'
const request = axios.create({
  baseURL: 'http://toutiao.course.itcast.cn'
})
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  // 如果响应结果对象中有data则直接返回data数据，没有，则不做任何处理。原样返回
  return response.data.data || response.data
}, function (error) {
  return Promise.reject(error)
})
export default request
