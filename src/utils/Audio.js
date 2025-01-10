import $ from "jquery";

var drawVisual; 
function visualize(audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    const audioContext = new AudioContext();
        
    //window.cancelAnimationFrame(drawVisual);
    var analyser = audioContext.createAnalyser();
    source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(distortion);

    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

    console.log(bufferLength)
    console.log(dataArray)
    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = v  / 2;
      }
    }

    draw();
  
}

let audio ={

    rondom:function(dom,list){
        
        
        visualize();
    }

}
export default audio;