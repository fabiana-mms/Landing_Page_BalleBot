// Acesso ao botao, chamando ele com o querySelector
const btnMobile = document.querySelector('#btn-mobile');

//Funcao que sera ativada quando clicar no botao
function toggleMenu(event) {
    
    //Informando para o evento do touchstart prevenir o padrao, nao realizando o evento de click, nao ativando mais nada do que possa fazer
    if (event.type === "touchstart") event.preventDefault();

    //Chamara a area de navegacao da pagina
    const nav = document.querySelector('#nav');

    //Adicionando uma classe de ativo
    nav.classList.toggle('active');
    
    //Configuracao de acessibilidade

    //verifica se contem ou nao a classe que sera passada
    const active = nav.classList.contains('active');
    //setAttribute: define o atributo
    event.currentTarget.setAttribute('aria-expanded', active);
    //Abrir ou fechar menu na acessibilidade 
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

//Adicionando um evento de click ao botao
btnMobile.addEventListener('click', toggleMenu);
//Adicionando um evento de touch ao botao
btnMobile.addEventListener('touchstart', toggleMenu);

