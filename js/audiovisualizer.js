$(document).ready(function () {

    function visulaizer(){
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var countOuter = 0; //counter used to make sure that svg  is not added multiple times to each audioElement
      
      //get all elements with tag audioElement
      [].forEach.call (document.querySelectorAll ('.audioElement'),
        function (audioElement) {
           
            var countInner = 0; //inner counter for second loop that is checked against outer counter
            //get all the elements with class audio
            [].forEach.call (document.querySelectorAll ('.audio'),
                function (audio) { 
                if(countOuter === countInner) {
                  if(!audioElement.canPlayType) audioElement.src = "audio/music_song.mp3.ogg";
                  audioSrc = audioCtx.createMediaElementSource(audioElement);
                  var analyser = audioCtx.createAnalyser();

                  // Bind our analyser to the media element source.
                  audioSrc.connect(analyser);
                  audioSrc.connect(audioCtx.destination);

                  var frequencyData = new Uint8Array(analyser.frequencyBinCount);
                  var unitSize = 100;
                  if($(audio).width() < 250) unitSize = 50;
                  var frequencyData = new Uint8Array(unitSize);

                  var svgHeight = '100';
                  var svgWidth = $(audio).width().toString();
                  var barPadding = '2';

                  function createSvg(parent, height, width) {
                    return d3.select(parent).append('svg').attr('height', height).attr('width', width);
                  }
                  
                      var svg = createSvg(audio, svgHeight, svgWidth);

                      // Create our initial D3 chart.
                      svg.selectAll('rect')
                         .data(frequencyData)
                         .enter()
                         .append('rect')
                         .attr('x', function (d, i) {
                            return i * (svgWidth / frequencyData.length);
                         })
                         .attr('width', svgWidth / frequencyData.length - barPadding);

                      // Continuously loop and update chart with frequency data.
                      function renderChart() {
                         requestAnimationFrame(renderChart);

                         // Copy frequency data to frequencyData array.
                         analyser.getByteFrequencyData(frequencyData);

                         // Update d3 chart with new data.
                         svg.selectAll('rect')
                            .data(frequencyData)
                            .attr('y', function(d) {
                               return svgHeight - d + 100;
                            })
                            .attr('height', function(d) {
                               return d;
                            })
                            .attr('fill', function(d) {
                               return 'rgb(144, 19, ' + d + ')';
                            });
                      }

                      // Run the loop
                      renderChart();
                    }
                      countInner++;
            })
            countOuter++;
      })
    }
  
  visulaizer();
  
  $(window).resize(function() {
      $('svg').remove();
      audioSrc.disconnect();
      visulaizer();
  });
});