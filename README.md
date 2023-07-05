## 项目依赖

- 开发环境需要安装 node.js 和 ffmpeg
- 运行环境需要安装 ffmpeg

## 运行方法

1. 使用 git clone 下载工程  
   `git clone https://github.com/shenyinabcd/rtsp_electron_demo.git`

2. 安装依赖  
   `npm install --registry https://registry.npm.taobao.org`

3. 运行  
   `npm run start`

4. 打包准备。第一次打包之前，需要运行该命令。切换目标平台后(MacOS, Linux, Windows)，需要运行命令  
   `npx electron-forge import`

5. 打包  
   `npm run make`

## 替换视频流链接

在 src/client/index.html 文件中，找到 rtsp:// ，将 rtsp:// 到最后的这个链接，换成自己的链接。注意：？需要改成 %3F
`url: 'ws://localhost:8888/rtsp/?url=rtsp://zephyr.rtsp.stream/pattern%3FstreamKey=4fa3e8b1de7f55ea04eb6946bed7ade8'`

## 其他

1. 命令行直接播放，不转码
   `ffplay "rtsp://zephyr.rtsp.stream/pattern?streamKey=4fa3e8b1de7f55ea04eb6946bed7ade8"`
