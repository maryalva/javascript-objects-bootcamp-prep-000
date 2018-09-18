var playlist = {
  "Slowdive": 'Alison',
  "My Bloody Valentine": 'Sometimes'
};


function updatePlaylist(object, artistName, songTitle) {
  return Object.assign(object, {[artistName]: songTitle});
}

updatePlaylist(playlist, "Phil Ochs", 'Heres to the State of Mississippi');


function removeFromPlaylist(object, artistName) {
  delete Object.Slowdive;
  return Object
}

