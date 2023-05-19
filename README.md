## 项目依赖

- 开发环境需要安装 node.js 和 ffmpeg
- 运行环境需要安装 ffmpeg

## 运行方法

1. 使用 git clone 下载工程

2. 安装依赖
   `npm install --registry https://registry.npm.taobao.org`

3. 运行
   `npm run start`

4. 打包准备。第一次打包之前，需要运行该命令。切换目标平台后(MacOS, Linux, Windows)，需要运行命令
   `npx electron-forge import`

5. 打包
   `npm run make`
