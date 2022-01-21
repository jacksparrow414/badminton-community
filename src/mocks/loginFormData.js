const Mock = require('mockjs');
// https://blog.csdn.net/qq_44712405/article/details/100302780
// mockjs最坑的一点是method名字必须是小写的，文档上并没说明
export default Mock.mock('http://localhost:8081/badminton-community/login', 'post', (option) => {
    // 这种情况需要重写mock
   return Mock.mock({
    code: 200,
    msg: 'success'
   }) 
});