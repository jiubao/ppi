
// (funciton(){})();

var resolutions = {
  "4k": [3840, 2160],
  "2k": [2556, 1440],
  "1080": [1920, 1080],
  "720": [1280, 720],
  "macpro15r": [2880, 1800, 15.4]
}

function cal() {
  var width = $('#width').val();
  var height = $('#height').val();
  var diagonal = $('#diagonal').val();

  var y = diagonal / Math.sqrt(1 + Math.pow(width / height, 2));
  var x = y * width / height;

  var ppi = width / x;
  $('#ppi').html(ppi);
}

$('#calculate').on('click', function() {
  cal();
});

$('a').on('click', function() {
  var $this = $(this);
  var key = $this.attr('data-key');
  key = key || $this.html();
  var res = resolutions[key];
  $('#width').val(res[0]);
  $('#height').val(res[1]);
  $('#diagonal').val(res[2] || '');
});
