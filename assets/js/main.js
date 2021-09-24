/*Mostar Menu*/
const navMenu = document.getElementById('nav-menu'),
      navAlternancia = document.getElementById('nav-alternancia'),
      navFecha = document.getElementById('nav-fechar')

/*MENU SHOW */
/* Valida  se a const existir */
if(navAlternancia){
    navAlternancia.addEventListener('click', () =>{
        navMenu.classList.add('mostrar-menu')
    })
}

/*esconder Menu*/
/*Valida  se a const existir */
if(navFecha){
    navFecha.addEventListener('click', () =>{
        navMenu.classList.remove('mostrar-menu')
    })
}

/*Remover menu Mobile*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //  quando clicamos em cada nav-link , removemos a classe mostrar-menu
    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Mudar o background(fundo) do header*/
function scrollHeader(){
    const header = document.getElementById('header')
    // quando o scroll for maior que 50 de altura  do viewpont(JANELA DE VISUALIZAÇÃO), temos que adicionar  a classe mostrar-rolagem para a tag header
    if(this.scrollY >= 50) header.classList.add('mostrar-rolagem'); else header.classList.remove('mostrar-rolagem')
}
window.addEventListener('scroll', scrollHeader)

/* Mostrar scroll up*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //Quando a rolagem é superior a 200 na altura da janela de visualização, adicione a classe show-scroll à tag junto com a classe scroll-top
    if(this.scrollY>=200) scrollUp.classList.add('mostrar-scroll');
    else scrollUp.classList.remove('mostrar-scroll')
}
window.addEventListener('scroll', scrollUp)


/*SCROLL SECTIONS  LINK  DE ATIVAÇÃO*/

/* const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
      

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menuc a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menuc a[href*=' + sectionId + ']').classList.remove('active-link')
        }
        console.log(sectionId)
    })
}
window.addEventListener('scroll', scrollActive) */
/*Scroll Reveal Animation*/
 const sr = ScrollReveal({
     distance:'60px',
     duration: 2500,
     delay:400,
    // reset:true,
 })
 sr.reveal(`.inicio-header, .section-titulo`, {delay:600})

 sr.reveal(`.inicio-footer`,{delay:700})

 sr.reveal(`.inicio-img` ,{delay:900, origin:'top'})

 sr.reveal(`.patrocinio-img, .produtos-cartas, .footer-logo, .footer-conteudo, .footer-copy`, {origin:'top', interval:100})

 sr.reveal(`.especificacoes-dados, .disconto-animado`, {origin:'left', interval:100})

 sr.reveal(`.especificacoes-img, .disconto-img`, {origin:'right'})

 sr.reveal(`.capas-img`,{origin:'top'})

 sr.reveal(`.capas-dados`)