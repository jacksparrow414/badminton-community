import service from "./request";
import responseData from '../mocks/loginFormData'
const qs = require('qs')
// 箭头函数写法 http://es.xiecheng.live/es6/function.html#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0
// login是函数名, ()里面是参数
// axios返回的是Promise,需要.then,then返回的也是Promise,所在在调用处需要再次.then
// https://stackoverflow.com/questions/48980380/returning-data-from-axios-api
export const login = (loginFormData) => {
    console.log('api---------------->')
    return service
    .request({
        url: '/login',
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: qs.stringify(loginFormData),
        responseType: 'json'
    }).then(response => {
       console.log(response.data)
    //    返回数据
       return response.data
    }).catch(error => {
        error.message
    })
}
