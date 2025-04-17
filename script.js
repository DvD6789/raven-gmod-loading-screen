var images = ['images/image1.jpg','images/image2.jpg'];
var current = 0;
var filesNeeded = 0;
var filesDL = 0;

window.onload = function() {
  // ustaw pierwsze tło
  $('#bg').css('background-image','url('+images[0]+')');
  // zmieniaj tło co 2.5 s
  setInterval(function(){
    current = (current+1) % images.length;
    $('#bg').css('background-image','url('+images[current]+')');
  },2500);
  // konfiguracja audio
  var m = document.getElementById('musicAudio');
  m.volume = 0.5;
  $('#music').click(function(){
    if (m.paused) {
      m.play();
      $(this).text('Wycisz muzykę');
    } else {
      m.pause();
      $(this).text('Odtwórz muzykę');
    }
  });
};

// Funkcje wywoływane przez GModunction SetFilesNeeded(n) {
  if (filesNeeded === 0) filesNeeded = n;
  UpdateBar();
}
function DownloadingFile(name) {
  filesDL++;
  $('#text').text('Pobieranie ' + name);
  UpdateBar();
}
function SetStatusChanged(status) {
  $('#text').text(status);
  UpdateBar();
}
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
  $('#text').text('Ładowanie serwera ' + servername);
}
function UpdateBar() {
  if (filesNeeded > 0) {
    var p = Math.floor((filesDL / filesNeeded) * 100);
    $('#bar').css('width', p + '%');
  }
}
