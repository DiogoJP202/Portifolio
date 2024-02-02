class animation{
    constructor(){
        this.contador = 0;
    }

    matrixRain(){
        const c = document.getElementById('matrix');
        const ctx = c.getContext('2d');
        const screen = document.querySelector('body');
    
        c.height = 450;
        c.width = screen.offsetWidth; // Get Element Width;
        // Is like window.innerWidth;

        const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
        const fontSize = 18;
        let columns = c.width / fontSize;
        let drops = new Array(Math.floor(columns)).fill(1);
        
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

        window.addEventListener('resize', () => this.matrixRain());

        draw();
    }

    static generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color; 
    }

    FontRaibow(){
        const fonte = document.querySelector('.fontRaibow');

        fonte.style.color = `${animation.generateColor()}`;
        setInterval(() => setTimeout(() => fonte.style.color = `${animation.generateColor()}`, 50), 50);
    }
    
    hands(){
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
            contador % 2 === 0 ?handLeft() :handright();
            contador ++;
        }, 300)
    }
    
    showMore(){
        let contador = [1,1];
    
        document.addEventListener('click', event => {
            const element = event.target;
    
            if(element.classList.contains('showMore')){
                const projects = document.querySelectorAll('.Project');
    
                contador[0] ++;
                projects[contador[0]].style.display = 'block';
    
                if(contador[0] > 3) element.style.display = 'none';
            }
    
            if(element.classList.contains('showMore1')){
                const projects = document.querySelectorAll('.Project1');
    
                contador[1] ++;
                projects[contador[1]].style.display = 'block';
    
                if(contador[1] > 12) element.style.display = 'none';
            }
        })
    }

    linkAnimation(){
        const links = document.querySelectorAll('.linkR');
        let contador = 0;

        function left(){
            links[0].style.transform = "rotate(-30deg)";
            links[1].style.transform = "rotate(-30deg)";
        }
        
        function right(){
            links[0].style.transform = "rotate(30deg)";
            links[1].style.transform = "rotate(30deg)";
        }

        setInterval(()=>{
            contador % 2 === 0 ?left() :right();
            contador ++;
        }, 2000)
    }
}

const animations = new animation();

animations.matrixRain();
animations.showMore();
animations.hands();
animations.FontRaibow();
animations.linkAnimation();