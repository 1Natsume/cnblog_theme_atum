import $ from "jquery";

let AudCtx, analyser, dataArray, bufferLength = 0;
function visualize(audio) {

  if (!AudCtx) {
    AudCtx = new AudioContext();//音频内容
    var src = AudCtx.createMediaElementSource(audio);
    analyser = AudCtx.createAnalyser();

    src.connect(analyser);
    analyser.connect(AudCtx.destination);
    analyser.fftSize = 2048;//快速傅里叶变换, 必须为2的N次方

    var bufferLength = analyser.frequencyBinCount;// = fftSize * 0.5

    //part4: 变量

    dataArray = new Uint8Array(bufferLength);//8位无符号定长数组
  }
  //part5: 动态监听



}

function renderFrame() {
  requestAnimationFrame(renderFrame);//方法renderFrame托管到定时器，无限循环调度，频率<16.6ms/次

  if (AudCtx) {
    analyser.getByteFrequencyData(dataArray);//获取当前时刻的音频数据
    //part6: 绘画声压条
    for (var i = 0; i < bufferLength / 16; i++) {
      $('.panel').style = null;
      var data = dataArray[i];//int,0~255

      let barHeight = dataArray[i * 16];
      const [r, g, b] = [255 - Math.random() * barHeight, Math.random() * barHeight, 120]

      let color = `rgb(${r}, ${g}, ${b})`

      // const frequency = data; // 选择频率数据中的一个值
      // const color = `rgb(255, ${frequency}, ${frequency})`; // 简单起见，我们用红色通道表示频率

      $('.panel').css('background-color', color);

    }
  }
}
function parseTime(lrcTime) {
  let lrcTimeArr = lrcTime.split(":");
  return lrcTimeArr[0] * 60 + +lrcTimeArr[1];
}
let audio = {

  rondom: function (dom, list) {


    visualize(dom);
    renderFrame();
  },
  loadLrl: function (lrc) {
    // 最开始获取到的歌词列表是字符串类型（不好操作）
    let lrcArr = lrc.split('\n');
    // 接收修正后的歌词数组
    let result = [];
    // 将歌词数组转成由对象组成的数组，对象有time和word两个属性（为了方便操作）
    for (let i = 0; i < lrcArr.length; i++) {
      var lrcData = lrcArr[i].split(']');
      var lrcTime = lrcData[0].substring(1);
      var obj = {
        time: parseTime(lrcTime),
        word: lrcData[1]
      }
      result.push(obj);
    }
    return result
  },
  // 获取当前播放到的歌词的下标
  getIndex(result,audio,) {
    let Time = audio.currentTime;
    for (let i = 0; i < result.length; i++) {
      if (result[i].time > Time) {
        return result[i - 1].word;
      }
    }
    
  }
}
export default audio;