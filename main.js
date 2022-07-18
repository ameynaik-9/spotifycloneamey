console.log("Welcome to Spotify");
// initialisation of variables
let songIndex = 0;
let audioElement = new Audio('components/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let arBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Audio 1", filePath: "components/songs/1.mp3", coverPath: "components/covers/1.jpg" },
    { songName: "Audio 2", filePath: "components/songs/2.mp3", coverPath: "components/covers/2.jpg" },
    { songName: "Audio 3", filePath: "components/songs/3.mp3", coverPath: "components/covers/3.jpg" },
    { songName: "Audio 4", filePath: "components/songs/4.mp3", coverPath: "components/covers/4.jpg" },
    { songName: "Audio 5", filePath: "components/songs/5.mp3", coverPath: "components/covers/5.jpg" },
    { songName: "Audio 6", filePath: "components/songs/6.mp3", coverPath: "components/covers/6.jpg" },
    { songName: "Audio 7", filePath: "components/songs/7.mp3", coverPath: "components/covers/7.jpg" },
    { songName: "Audio 8", filePath: "components/songs/8.mp3", coverPath: "components/covers/8.jpg" },
    { songName: "Audio 9", filePath: "components/songs/9.mp3", coverPath: "components/covers/9.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;

    }
});

//Listen to Event
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
   let alfa = Array.from(document.getElementsByClassName('songItemPlay'))
        alfa.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `components/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `components/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `components/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
