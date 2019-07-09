// 用户相关接口文件
import request from '@/utils/request'
export const login = ({ mobile, code }) => request({
  method: 'POST',
  url: '/app/v1_0/authorizations',
  data: {
    mobile,
    code
  }
})
