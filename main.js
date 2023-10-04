document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const timerValue = document.getElementById('timerValue');
    const startButton = document.getElementById('startButton');
    
    let canvas;
    let context;
    let timer;

    startButton.addEventListener('click', () => {
        createCanvas(); 
        startDrawing();
        startButton.disabled = true;
    });

    function createCanvas() {
        canvas = document.createElement('canvas');
        canvas.width = 170; 
        canvas.height = 170; 
        canvas.style.border = '2px solid #000'; 
        canvas.style.backgroundColor = 'blue'; 
        container.appendChild(canvas);
        context = canvas.getContext('2d');
    }

    function startDrawing() {
        let timeLeft = 60; 
        
        timerValue.textContent = timeLeft;
        
        timer = setInterval(() => {
            timeLeft--;
            timerValue.textContent = timeLeft;
            
            if (timeLeft === 0) {
                clearInterval(timer);
                alert("Time's up! Drawing task completed.");
                startButton.disabled = false;
                clearCanvas();
            }
        }, 1000);
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
});
