playpause_btn = document.getElementById('button');
playpause_btn.addEventListener("click", playpauseTrack);

const musicFiles = require('fs');
const path = require('path');

//playlist holds all legal files (file with .mp3 file name)
const playlist = [];

//holds the index of every song that's been played
const playedSongIndex = [];

// test arrays for functions
const array1 = [
    "Apple", "Orange", "Pear", "Peach"
];

const array2 = [
    0, 2
];

console.log(checkIfPlayed(array1, "Peach", array2));
console.log(checkIfPlayed(array1, "Peach", array2));


console.log(playlist.toString());

// Will read from provided directory, and filter out files that are not mp3s
musicFiles.readdirSync("MusicPlaylist").forEach(file => {

    if(path.extname(file) == ".mp3")
        playlist.push(file);
});

//console.log(playlist.toString());


//we don't want to edit/change the playlist array, so we'll use idex to keep track of what's been played
function checkIfPlayed(playlistArray, songName, indexArray){

    let songIndex = playlistArray.indexOf(songName);

    if(indexArray.includes(songIndex))
        return true;
    else
        indexArray.push(songIndex);
        return false;

    
}

function playpauseTrack(){
    //playSong();
    playpause_btn.innerHTML = <p> Playing </p>;

}

function loadSong(){


}

function playSong(){
    song.play();
    playpause_btn.innerHTML = '<p> Playing </p>';
}

function pauseSong(song){
    song.pause();
    playpause_btn.innerHTML = '<p> Paused </p>';

}


