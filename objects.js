var playlist = {
  "Slowdive": 'Alison',
  "My Bloody Valentine": 'Sometimes'
};


function updatePlaylist(object, artistName, songTitle) {
  return Object.assign({}, object, {[key]: value});
}

updatePlaylist(playlist, 'Phil Ochs', 'Heres to the State of Mississippi');