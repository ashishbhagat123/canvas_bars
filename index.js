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
    ctx.canvas.width = window.innerWidth - 50;
    let font = window.innerWidth * 0.00911 + "pt Arial";

    // random height for audio bars
    const heights = [150, 110, 140, 110, 110, 150, 180];

    // array to store bars height and y position
    const barsPosition = [];
    const barsHeight = [];
    let barsDistance;
    let barsWidth;

    // changing bars position and width based on screen width
    const handleBars = () => {
        ctx.canvas.width > 1200 ? (barsDistance = 10) : (barsDistance = 3);
        ctx.canvas.width > 1200 ? (barsWidth = 4) : (barsWidth = 2);
    };

    document.addEventListener("resize", handleBars);

    // displaying audio bars when webpage is loaded
    for (let i = 0; i < ctx.canvas.width; i += barsDistance) {
        // selecting random height for rectengle box
        const height = heights[Math.floor(Math.random() * heights.length)];
        // random position for bars
        const y = Math.random() >= 0.3 ? 400 - height : height + 180;

        // pushing heights and y position into the array
        barsPosition.push(y);
        barsHeight.push(height);

        // creating bars
        ctx.canvas.width > 1200 ? (barsWidth = 4) : (barsWidth = 2);
        ctx.fillRect(i - barsDistance, y, barsWidth, height);
        ctx.fillStyle = "#e0e0e0";
    }

    // changes the color of audio line with respect to time duration
    const progress = () => {
        // getting current time of music
        let time = Math.round(audio.currentTime);
        // calculating width with respect to current time
        let audioWidth = (time / audio.duration) * canvas.clientWidth;

        // changing color of bars to original color when user clicks on bars to move backword
        for (let i = 0; i < canvas.clientWidth; i += barsDistance) {
            // getting position and height of bars from array
            ctx.fillRect(
                i - barsDistance,
                barsPosition[i / barsDistance],
                barsWidth,
                barsHeight[i / barsDistance]
            );
            ctx.fillStyle = "#e0e0e0";
        }

        // chnaging color of bars to pink with respect to music timing
        if (audioWidth >= 0) {
            for (
                let i = 0;
                i < audioWidth + 2 * barsDistance;
                i += barsDistance
            ) {
                // getting position and height of bars from array
                ctx.fillRect(
                    i - barsDistance,
                    barsPosition[i / barsDistance],
                    barsWidth,
                    barsHeight[i / barsDistance]
                );
                ctx.fillStyle = "#F08080";
            }
        }
        // changing the play/pause button when music is finished
        if (time === Math.round(audio.duration)) {
            play.style.display = "block";
            pause.style.display = "none";
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
        // if (e.offsetY > 244 && e.offsetY < 405) {
        audio.currentTime = audio.duration * (e.offsetX / canvas.clientWidth);
        // }
    });

    // code for the first(introduction) tag

    // creating arc introduction tag
    {
        let x = ctx.canvas.width * 0.19;

        ctx.fillStyle = "rgba(0,255,48,1)";
        ctx.beginPath();
        ctx.arc(x, 320, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(0,255,48,1)";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    {
        let x = ctx.canvas.width * 0.19;
        let initialY = 500 * 0.64;
        let finalY = 500 * 0.36;

        // creating line introduction tag
        ctx.beginPath();
        ctx.moveTo(x, initialY);
        ctx.lineTo(x, finalY);
        ctx.strokeStyle = "rgba(0,255,48,1)";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }

    {
        // creating rectangle for introduction tag
        let x = ctx.canvas.width * 0.1444;
        let y = 500 * 0.28;
        let width = ctx.canvas.width * 0.0911;

        ctx.beginPath();
        ctx.rect(x, y, width, 40);
        ctx.fillStyle = "rgba(0,255,48,1)";
        ctx.fill();
    }
    {
        let x = ctx.canvas.width * 0.1595;
        ctx.font = font;
        ctx.fillStyle = "white";
        ctx.fillText("Introduction", x, 165);
    }

    // code for the second(music One) tag

    // circle for music one tag
    {
        let x = ctx.canvas.width * 0.3419;

        ctx.fillStyle = "rgba(0,255,127,0.7)";
        ctx.beginPath();
        ctx.arc(x, 320, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(0,255,127,0.7)";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    // line for music one tag
    {
        let x = ctx.canvas.width * 0.3419;
        let initY = 500 * 0.64;
        let finalY = 500 * 0.24;

        ctx.beginPath();
        ctx.moveTo(x, initY);
        ctx.lineTo(x, finalY);
        ctx.strokeStyle = "rgba(0,255,127,0.7)";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }

    // rectangle for music one tag
    {
        let x = ctx.canvas.width * 0.2963;
        let width = ctx.canvas.width * 0.0911;
        ctx.beginPath();
        ctx.rect(x, 80, width, 40);
        ctx.fillStyle = "rgba(0,255,127,0.7)";
        ctx.fill();
    }

    // text for music one tag
    {
        let width = ctx.canvas.width * 0.3115;
        ctx.font = font;
        ctx.fillStyle = "white";
        ctx.fillText("Music one", width, 105);
    }

    // code for the third(pebble) tag

    // circle for pebble tag
    {
        let x = ctx.canvas.width * 0.72188;
        let initY = 500 * 0.64;
        let finalY = 500 * 0.36;
        ctx.fillStyle = "rgba(25,25,112,0.9)";
        ctx.beginPath();
        ctx.arc(x, 320, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(25,25,112,0.7)";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // line for pebble tag
        ctx.beginPath();
        ctx.moveTo(x, initY);
        ctx.lineTo(x, finalY);
        ctx.strokeStyle = "rgba(25,25,112,0.7)";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }

    // rectangle for pebble tag
    {
        let x = ctx.canvas.width * 0.6762;
        let width = ctx.canvas.width * 0.0911;

        ctx.beginPath();
        ctx.rect(x, 140, width, 40);
        ctx.fillStyle = "rgba(25,25,112,0.7)";
        ctx.fill();
    }

    // text for pebble tag
    {
        let x = ctx.canvas.width * 0.6914;
        ctx.font = font;
        ctx.fillStyle = "white";
        ctx.fillText("Pebble", x, 165);
    }
    // first line for fifth(enegergy) tag

    // circle for energy tag
    {
        let x = ctx.canvas.width * 0.6458;
        ctx.fillStyle = "rgba(0,255,127,0.9)";
        ctx.beginPath();
        ctx.arc(x, 320, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(0,255,127,0.7)";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // line for energy tag
        ctx.beginPath();
        ctx.moveTo(x, 320);
        ctx.lineTo(x, 60);
        ctx.strokeStyle = "rgba(0,255,127,0.7)";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }

    // creating fourth(empthy) tag

    // circle for empthy tag
    {
        let x = ctx.canvas.width * 0.7598;
        ctx.fillStyle = "rgba(160,82,45,1)";
        ctx.beginPath();
        ctx.arc(x, 320, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(160,82,45,1)";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // line for empthy tag
        ctx.beginPath();
        ctx.moveTo(x, 320);
        ctx.lineTo(x, 120);
        ctx.strokeStyle = "rgba(160,82,45,1)";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }

    // rectangle for empthy tag
    {
        let x = ctx.canvas.width * 0.5737;
        let width = ctx.canvas.width * 0.1899;
        ctx.beginPath();
        ctx.rect(x, 80, width, 40);
        ctx.fillStyle = "rgba(160,82,45,1)";
        ctx.fill();
    }

    // text for empthy tag
    {
        let x = ctx.canvas.width * 0.5851;
        ctx.font = font;
        ctx.fillStyle = "white";
        ctx.fillText("Report Building - Empthy", x, 105);
    }

    // creating fifth(energy) tag

    // second circle for energy tag
    {
        let x = ctx.canvas.width * 0.813;
        ctx.fillStyle = "rgba(0,128,0,0.9)";
        ctx.beginPath();
        ctx.arc(x, 320, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(0,128,0,0.7)";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // second line for energy tag
        ctx.beginPath();
        ctx.moveTo(x, 320);
        ctx.lineTo(x, 60);
        ctx.strokeStyle = "rgba(0,128,0,0.7)";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }

    // rectangle for energy tag
    {
        let x = ctx.canvas.width * 0.6268;
        let width = ctx.canvas.width * 0.1899;
        ctx.beginPath();
        ctx.rect(x, 20, width, 40);
        ctx.fillStyle = "rgba(0,128,0,0.7)";
        ctx.fill();
    }

    // text for energy tag
    {
        let x = ctx.canvas.width * 0.6344;
        ctx.font = font;
        ctx.fillStyle = "white";
        ctx.fillText("Report Building - Energy", x, 45);
    }

    // event listener for to update bar color and play pause function
    audio.addEventListener("timeupdate", progress);
    playButton.addEventListener("click", playMusic);
})();
