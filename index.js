(function () {
    // selecting audio tag and audio source 
    const audio = document.getElementById("audio");
    const music = audio.getAttribute("src");

    // selecting play button tag and play/pause svh logo
    const playButton = document.getElementById("audio_btn");
    const play = document.getElementById("playBtn");
    const pause = document.getElementById("pauseBtn");

    // selecting canvas and creating canvas context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // style for canvas
    canvas.style.display = "block";
    canvas.style.margin = "15px auto";

    // random height for audio bars
    const heights = [150, 110, 140, 110, 110, 150, 180];

    // array to store bars height and y position
    const barsPosition = []
    const barsHeight = []

    // displaying audio bars when webpage is loaded
    for (let i = 0; i < window.innerWidth; i+= 10) {
        // selecting random height for rectengle box
        const height = heights[Math.floor(Math.random() * heights.length)];
        // random position for bars
        const y = Math.random() >= 0.3 ? 400 - height : height + 180;

        // pushing heights and y position into the array
        barsPosition.push(y)
        barsHeight.push(height)

        // creating bars
        ctx.fillRect(i-10, y, 4, height);
        ctx.fillStyle = "#e0e0e0";
    }

    // changes the color of audio line with respect to time duration
    const progress = () => {
        // getting current time of music
        let time = Math.round(audio.currentTime);
        // calculating width with respect to current time
        var audioWidth = (time / audio.duration) * canvas.clientWidth;

        // changing color of bars to original color when user clicks on bars to move backword
        for (let i = 0; i < canvas.clientWidth; i+=10) {
            // getting position and height of bars from array
            ctx.fillRect((i-10), barsPosition[i/10], 4, barsHeight[i/10]);
            ctx.fillStyle = "#e0e0e0";
        }

        // chnaging color of bars to pink with respect to music timing
        if (audioWidth >= 0) {
            for (let i = 0; i < audioWidth; i+= 10) {
                // getting position and height of bars from array
                ctx.fillRect((i-10), barsPosition[i/10], 4, barsHeight[i/10]);
                ctx.fillStyle = "#FFC0CB";
            }
        }
    };

    // function to play and pause the music and to change the svg 
    const playMusic = () => {
        if (audio.paused) {
            audio.play();
            play.style.display = "none";
            pause.style.display = "block";
        } else {
            audio.pause();
            play.style.display = "block";
            pause.style.display = "none";
        }
    };

    // function to calculate the current audio duration when user clicks at random place
    canvas.addEventListener("click", function (e) {
        if (e.offsetY > 244 && e.offsetY < 405) {
            audio.currentTime =
                audio.duration * (e.offsetX / canvas.clientWidth);
        }
    });

    // code for the first(introduction) tag 

    // creating arc introduction tag
    ctx.fillStyle = "rgba(0,255,48,1)";
    ctx.beginPath();
    ctx.arc(250, 320, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(0,255,48,1)";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // creating line introduction tag
    ctx.beginPath();
    ctx.moveTo(250, 320);
    ctx.lineTo(250, 180);
    ctx.strokeStyle = "rgba(0,255,48,1)";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();

    // creating rectangle for introduction tag
    ctx.beginPath();
    ctx.rect(190, 140, 120, 40);
    ctx.fillStyle = "rgba(0,255,48,1)";
    ctx.fill();

    ctx.font = "12pt calibri";
    ctx.fillStyle = "white";
    ctx.fillText("Introduction", 210, 165);

    // code for the second(music One) tag 

    // circle for music one tag
    ctx.fillStyle = "rgba(0,255,127,0.7)";
    ctx.beginPath();
    ctx.arc(450, 320, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(0,255,127,0.7)";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // line for music one tag
    ctx.beginPath();
    ctx.moveTo(450, 320);
    ctx.lineTo(450, 120);
    ctx.strokeStyle = "rgba(0,255,127,0.7)";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();

    // rectangle for music one tag
    ctx.beginPath();
    ctx.rect(390, 80, 120, 40);
    ctx.fillStyle = "rgba(0,255,127,0.7)";
    ctx.fill();

    // text for music one tag
    ctx.font = "12pt calibri";
    ctx.fillStyle = "white";
    ctx.fillText("Music one", 410, 105);

    // code for the third(pebble) tag 

    // circle for pebble tag
    ctx.fillStyle = "rgba(25,25,112,0.9)";
    ctx.beginPath();
    ctx.arc(950, 320, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(25,25,112,0.7)";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // line for pebble tag
    ctx.beginPath();
    ctx.moveTo(950, 320);
    ctx.lineTo(950, 180);
    ctx.strokeStyle = "rgba(25,25,112,0.7)";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();

    // rectangle for pebble tag
    ctx.beginPath();
    ctx.rect(890, 140, 120, 40);
    ctx.fillStyle = "rgba(25,25,112,0.7)";
    ctx.fill();

    // text for pebble tag
    ctx.font = "12pt calibri";
    ctx.fillStyle = "white";
    ctx.fillText("Pebble", 910, 165);

    // first line for fifth(enegergy) tag
    
    // circle for energy tag
    ctx.fillStyle = "rgba(0,255,127,0.9)";
    ctx.beginPath();
    ctx.arc(850, 320, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(0,255,127,0.7)";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // line for energy tag
    ctx.beginPath();
    ctx.moveTo(850, 320);
    ctx.lineTo(850, 60);
    ctx.strokeStyle = "rgba(0,255,127,0.7)";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();

    // creating fourth(empthy) tag

    // circle for empthy tag
    ctx.fillStyle = "rgba(160,82,45,1)";
    ctx.beginPath();
    ctx.arc(1000, 320, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(160,82,45,1)";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // line for empthy tag
    ctx.beginPath();
    ctx.moveTo(1000, 320);
    ctx.lineTo(1000, 120);
    ctx.strokeStyle = "rgba(160,82,45,1)";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();

    // rectangle for empthy tag
    ctx.beginPath();
    ctx.rect(755, 80, 250, 40);
    ctx.fillStyle = "rgba(160,82,45,1)";
    ctx.fill();

    // text for empthy tag
    ctx.font = "12pt calibri";
    ctx.fillStyle = "white";
    ctx.fillText("Report Building - Empthy", 770, 105);

    // creating fifth(energy) tag

    // second circle for energy tag
    ctx.fillStyle = "rgba(0,128,0,0.9)";
    ctx.beginPath();
    ctx.arc(1070, 320, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(0,128,0,0.7)";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // second line for energy tag
    ctx.beginPath();
    ctx.moveTo(1070, 320);
    ctx.lineTo(1070, 60);
    ctx.strokeStyle = "rgba(0,128,0,0.7)";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();

    // rectangle for energy tag
    ctx.beginPath();
    ctx.rect(825, 20, 250, 40);
    ctx.fillStyle = "rgba(0,128,0,0.7)";
    ctx.fill();

    // text for energy tag
    ctx.font = "12pt calibri";
    ctx.fillStyle = "white";
    ctx.fillText("Report Building - Energy", 835, 45);

    // event listener for to update bar color and play pause function
    audio.addEventListener("timeupdate", progress);
    playButton.addEventListener("click", playMusic);
})();
