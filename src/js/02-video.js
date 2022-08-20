import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(checkTime, 1000));

function checkTime(evt) {
  const message = JSON.stringify(evt);

  localStorage.setItem(LOCALSTORAGE_KEY, message);
}

const time = localStorage.getItem(LOCALSTORAGE_KEY);

const currentTime = JSON.parse(time);

const seconds = currentTime.seconds;

player.setCurrentTime(seconds).then(function (seconds) {
  // seconds = the actual time that the player seeked to
});
