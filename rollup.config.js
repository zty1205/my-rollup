import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';//热更新;

export default{
  input: "src/index.js",
  external: ['jquery'],
  output: {
    file: "dist/bundle.js",
    format: "iife",
    // amd: {
    //   id: 'amd-name',   // amd具名函数名称
    //   define: 'def'     // 用来代替define函数的函数名称
    // },
    name: "myZty", // String 变量名，代表你的 iife/umd 包，同一页上的其他脚本可以访问它。没效果
    // paths: {
    //   jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js'
    // },
    globals: {
      jquery: 'jQuery'
    },
    // sourcemap: "inline" // source map url在同一文件， true的话，在新的文件上
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      },
      jsnext: true,  // 该属性是指定将 Node 包转换为ES2015模块
      // main 和 browser 属性将使插件决定将那些文件应用到bundle中
      main: true,  // Default: true 
      browser: true // Default: false
    }),
    commonjs(),
    uglify(), // 中文乱码
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      open: true, // 是否打开浏览器
      contentBase: './', // 入口html的文件位置 会自动查找HTML文件
      historyApiFallback: true, // Set to true to return index.html instead of 404
      host: 'localhost',
      port: 10001
    }),
    livereload({
      watch: 'dist/'     //监听文件夹;
    })
  ]
}