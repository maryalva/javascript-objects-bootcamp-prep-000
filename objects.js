var playlist = {
  "Slowdive": 'Alison',
  "My Bloody Valentine": 'Sometimes'
};


function updatePlaylist(object, artistName, songTitle) {
  return Object.assign(object, {[artistName]: songTitle});
}

updatePlaylist(playlist, "Phil Ochs", 'Heres to the State of Mississippi');


function removeFromPlaylist(object, artistName) {
  return (delete Object.artistName);
}

removeFromPlaylist(playlist, 'Slowdive')

