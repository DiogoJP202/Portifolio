//funcao gerar link da imagem
//quando passar o mouse por cima das imagens vai aparecer um botao para acessar o projeto
document.addEventListener('mouseenter', function(event){
    elemento = event.target;
    if(elemento.classList.contains('ProjectImg')){
       return console.log('passou aqui!');   
    }
})