const express = require('express');
const expressWebSocket = require('express-ws');
const ffmpeg = require('fluent-ffmpeg');
const webSocketStream = require('websocket-stream/stream');

function localServer() {
  let app = express();
  app.use(express.static(__dirname));
  expressWebSocket(app, null, {
    perMessageDeflate: true,
  });
  app.ws('/rtsp/', rtspRequestHandle);
  app.listen(8888);
  console.log('express listened');
}

function rtspRequestHandle(ws, req) {
  console.log('rtsp request handle');
  const stream = webSocketStream(
    ws,
    {
      binary: true,
      browserBufferTimeout: 1000000,
    },
    {
      browserBufferTimeout: 1000000,
    }
  );
  let url = req.query.url;
  console.log('rtsp url:', url);
  console.log('rtsp params:', req.params);
  try {
    ffmpeg(url)
      .addInputOption('-rtsp_transport', 'tcp', '-buffer_size', '102400') // 这里可以添加一些 RTSP 优化的参数
      .on('start', function () {
        console.log(url, 'Stream started.');
      })
      .on('codecData', function () {
        console.log(url, 'Stream codecData.');
        // 摄像机在线处理
      })
      .on('error', function (err) {
        console.log(url, 'An error occured: ', err.message);
      })
      .on('end', function () {
        console.log(url, 'Stream end!');
        // 摄像机断线的处理
      })
      .outputFormat('flv')
      .videoCodec('copy')
      .noAudio()
      .pipe(stream);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { localServer };
