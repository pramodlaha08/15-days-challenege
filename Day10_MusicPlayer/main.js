import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { music } from './music.js';

document.querySelector('#app').innerHTML = `
 <div class="container">
        <div class="music-player">
            <nav>
                <div class="circle">
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div class="circle">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
            <img src="./public/assets/thumbnail2.jpeg" class="song-img">
            <h1>Mahiye Jinna Sohna</h1>
            <p>Darshal Raval</p>

            <audio id="song">
                <source src="./public/assets/MahiyeJinnaSohna.mp3" type="audio/mpeg">
            </audio>
            <input type="range" value="0" id="progress">

            <div class="controls">
                <div><i class="fa-solid fa-backward"></i></div>
                <div onclick="playPause()"><i class="fa-solid fa-play" id="ctrlIcon"></i></div>
                <div><i class="fa-solid fa-forward"></i></div>
            </div>
        </div>
    </div>
`

// setupCounter(document.querySelector('#counter'))
music();
