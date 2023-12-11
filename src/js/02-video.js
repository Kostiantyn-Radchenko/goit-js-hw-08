import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY_IFRAME_TIME = 'videoplayer-current-time';

const onPlay = function ({ seconds }) {
  const stringifyData = JSON.stringify(seconds);
  localStorage.setItem(KEY_IFRAME_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_IFRAME_TIME)));
