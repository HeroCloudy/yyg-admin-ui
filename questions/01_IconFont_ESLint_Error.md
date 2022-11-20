# 引入 iconfont.js 文件后，打包或提交git时提示 eslint error

在根目录的 ._eslintignore_ 文件中添加：
```text
**/iconfont.js
```

并将 .eslintigore 文件添加到需要打包构建的模块中。
