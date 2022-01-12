// 为什么每个组件都要有一个index.js文件
// https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories
// 简单说就是，有index.js,可以在import的时候直接将路径写到文件夹的位置就可以了，系统会自动到文件夹中找index.js来进行索引具体的组件进行导入
export {default as LoginForm} from './LoginFrom';