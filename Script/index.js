function matrixRain() {
    const c = document.getElementById('matrix');
    const ctx = c.getContext('2d');
    const screen = document.getElementsByTagName('body')[0];
    
    c.height = 200;
    c.width = window.innerWidth -21;

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
FontRaibow()
matrixRain();

function FontRaibow(){
    const fonte = document.querySelector('.fontRaibow');

    let timer = setInterval(() => {
        setTimeout(()=>{
            fonte.style.color = `${generateColor()}`;
        }, 500)
    },1000)
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