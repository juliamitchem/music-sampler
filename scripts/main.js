// Code credit to Mindy McAdams: http://jsfiddle.net/macloo/p24vrczo/

let infoDivs = document.querySelectorAll('.info-div');
let albumPhotos = document.querySelectorAll('.album-photo');

function hideAll() {
  infoDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumPhotos.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();

let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

    switch (e.target.getAttribute('id')) {
      case 'album1':
        document.querySelector('#dogstuff')
        	.style.display = 'block';
        break;
      case 'album2':
        document.querySelector('#fallingstuff')
        	.style.display = 'block';
        break;
      case 'album3':
        document.querySelector('#newstuff')
        .style.display = 'block';
        break;
      case 'album4':
        document.querySelector('#resonantstuff')
        .style.display = 'block';
        break;
    }

  }

});
