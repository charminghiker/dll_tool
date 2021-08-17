#### NodeJS调用DLL动态库小工具

node版本32位
```shell script
npm install -g windows-build-tools
npm install -g node-gyp

# 装完在项目路径下打开终端
node-gyp install --dist-url=https://npm.taobao.org/mirrors/node
npm install
```

node执行index.js文件即可
