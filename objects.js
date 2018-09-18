var playlist = {
  "Slowdive": 'Alison',
  "My Bloody Valentine": 'Sometimes'
};


function updatePlaylist(object, artistName, songTitle) {
  return object.assign({}, playlist, {"Phil Ochs": 'Heres to the State of Mississippi'})
};

