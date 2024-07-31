let lang = localStorage.getItem("user-lang");
const estilo = document.getElementsByClassName("estilo");
const raiz = document.querySelector(':root');
    
function langEs(){
    document.documentElement.setAttribute("lang", "es");
    localStorage.setItem("user-lang", "es");

    if(estilo[1].style.fontWeight == "bold"){hola();};
    if(estilo[3].style.fontWeight == "bold"){acerca();};
    if(estilo[5].style.fontWeight == "bold"){ahora();};
    if(estilo[7].style.fontWeight == "bold"){contacto();};
}
    
function langEn(){
    document.documentElement.setAttribute("lang", "en");
    localStorage.setItem("user-lang", "en");

    if(estilo[0].style.fontWeight == "bold"){hello();};
    if(estilo[2].style.fontWeight == "bold"){about();};
    if(estilo[4].style.fontWeight == "bold"){now();};
    if(estilo[6].style.fontWeight == "bold"){contact();};
}

if(lang === "es"){
    langEs();
}

function hola(){
    document.getElementById('texto').innerHTML = "<h2>¡Hola!</h2><p>Soy Jett, y me estoy adentrando al mundo digital!</p><p>Me gusta usar este medio para expresarme, aprender y generar cosas nuevas.<br>Recientemente me certifiqué en desarrollo full-stack, así que espero poder irme por ese camino.</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[0].style.fontWeight = "bold";
}

function hello(){
    document.getElementById('texto').innerHTML = "<h2>Hello!</h2><p>I'm Jett, and I'm entering the digital world!</p><p>I like using this medium to express myself, learn and create new things.<br>Recently, I got certified in full-stack development, so I hope I go down that road.</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[1].style.fontWeight = "bold";
}

function acerca(){
    document.getElementById('texto').innerHTML = "<h2>Acerca de</h2><p>Tengo 24 años y estudié Licenciatura en Artes Visuales en la Universidad Católica de Chile. Posterior a eso, explorando diversas maneras de expresar el arte digital, me enfoqué en el desarrollo de videojuegos y la programación.</p><p>Empecé asistiendo a diversos Game Jams y para aprender más creé mi propio sitio web personal. Así encontré una gran comunidad que me empujó a seguir desarrollando mi conocimiento.</p><p>A principios del año 2024 fui parte de un bootcamp y actualmente tengo una certificación de desarrollo full-stack, y en el futuro me gustaría aprender nuevas herramientas y lenguajes para seguir creando y explorando en este medio digital.</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[2].style.fontWeight = "bold";
}

function about(){
    document.getElementById('texto').innerHTML = "<h2>About</h2><p>I am 24 years old and I got my Bachelor's degree in visual arts at the Universidad Católica de Chile. After that, while exploring different ways to express digital art, I focused on developing videogames and programming.</p><p>I started by attending various game jams and to learn more I created my own personal website. This way, I found a great community that pushed me further into developing my knowledge.</p><p>At the beginning of 2024 I was part of a bootcamp and now I have a full-stack development certificate. In the future I'd like to learn new tools and languages to keep on creating and exploring this digital medium.</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[3].style.fontWeight = "bold";
}

function ahora(){
    document.getElementById('texto').innerHTML = `<h2>Ahora (Última actualización: <time datetime="2024-07-30">30/7/24</time>)</h2><p>Me gradué del bootcamp de Generation Chile, en su programa de Desarrollo Full-Stack Java, y actualmente estoy buscando empleo en esta área.</p><p>Estaré participando del Women's Game Jam Chile del 9 a 11 de agosto.</p>`;
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[4].style.fontWeight = "bold";
}

function now(){
    document.getElementById('texto').innerHTML = `<h2>Now (Last update: <time datetime="2024-07-30">7/30/24</time>)</h2><p>I just graduated Generation's Full-Stack Java Development's bootcamp, and I'm currently looking for employment in this area.</p><p>I will be participating in this year's Women's Game Jam from august 9 to 11.</p>`;
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[5].style.fontWeight = "bold";
}

function contacto(){
    document.getElementById('texto').innerHTML = `<h2>Contacto</h2><p>Puedes contactarme a través de los siguientes medios:</p><br><ul><li>jpugapizarro@gmail.com</li><li>+56 9 68492996</li><li><a href="https://www.linkedin.com/in/javiera-puga-pizarro/" target="_blank">Linkedin</a></li></ul>`;
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[6].style.fontWeight = "bold";
}

function contact(){
    document.getElementById('texto').innerHTML = `<h2>Contact</h2><p>You can contact me through the following channels:</p><br><ul><li>jpugapizarro@gmail.com</li><li>+56 9 68492996</li><li><a href="https://www.linkedin.com/in/javiera-puga-pizarro/" target="_blank">Linkedin</a></li></ul>`;
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[7].style.fontWeight = "bold";
}

function modoOscuro(){
    raiz.style.setProperty('--color-fondo','#4b4b4b');
    raiz.style.setProperty('--color-linea','dimgray');
    raiz.style.setProperty('--color-fuente','white');
    raiz.style.setProperty('--content-bg','#252525');
    raiz.style.setProperty('--color-highlight','#ff8800');

    document.getElementById("oscuro").classList.add("claroscuro");
    document.getElementById("claro").classList.remove("claroscuro");
}

function modoClaro(){
    raiz.style.setProperty('--color-fondo','whitesmoke');
    raiz.style.setProperty('--color-linea','lightgrey');
    raiz.style.setProperty('--color-fuente','black');
    raiz.style.setProperty('--content-bg','white');
    raiz.style.setProperty('--color-highlight','#000FFF');

    document.getElementById("claro").classList.add("claroscuro");
    document.getElementById("oscuro").classList.remove("claroscuro");
}