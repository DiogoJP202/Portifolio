function matrixRain() {
    const c = document.getElementById('matrix');
    const ctx = c.getContext('2d');
    const screen = document.getElementsByTagName('body')[0];

    c.height = 380;
    c.width = screen.offsetWidth;

    const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
    const fontSize = 18;
    const columns = c.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);
    function draw(){
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#0F0";
        ctx.font = `${fontSize}px arial`;
        
        for(let i = 0; i < drops.length; i++){
            let text = letters[Math.floor(Math.random()*letters.length)];

            ctx.fillText(text, i * fontSize, drops[i] * fontSize); 
            drops[i] ++;
            if(drops[i] * fontSize > c.height && Math.random() > 0.99){
                drops[i] = 0;
            }
        }
        window.requestAnimationFrame(draw);
    }
    window.addEventListener('resize',(matrixRain))
    draw();
}

function FontRaibow(){
    const fonte = document.querySelector('.fontRaibow');

    let timer = setInterval(() => {
        setTimeout(()=>{
            fonte.style.color = `${generateColor()}`;
        }, 500)
    }, 1000)
    window.requestAnimationFrame(FontRaibow);
}

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color; 
}

function hands(){
    const hands = document.querySelectorAll('.hand');
    let contador = 0;

    hands[1].style.transform = "scale(-1)";
    hands[0].style.transform = "scale(-1)";
    
    function handLeft(){
        hands[0].style.transform = "rotate(30deg)";
        hands[1].style.transform = "rotate(-30deg)";
    }
    
    function handright(){
        hands[0].style.transform = "rotate(-30deg)";
        hands[1].style.transform = "rotate(30deg)";
    }

    setInterval(()=>{
        if(contador % 2 === 0){
            handLeft();
        } else {
            handright();
        }
        contador ++;
    }, 500)
}

function showMore(){
    let contador = 1;
    let contador1 = 1;

    document.addEventListener('click', event => {
        element = event.target;

        if(element.classList.contains('showMore')){
            const projects = document.querySelectorAll('.Project');

            contador ++;
            projects[contador].style.display = 'block';

            if(contador > 3) element.style.display = 'none';
        }

        if(element.classList.contains('showMore1')){
            const projects = document.querySelectorAll('.Project1');

            contador1 ++;
            projects[contador1].style.display = 'block';

            if(contador1 > 12) element.style.display = 'none';
        }
    })
}

FontRaibow();
matrixRain();
hands();
showMore()