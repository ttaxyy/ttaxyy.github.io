let lang = localStorage.getItem("user-lang");
const estilo = document.getElementsByClassName("estilo");
const raiz = document.querySelector(':root');
    
function langEs(){
    document.documentElement.setAttribute("lang", "es");
    localStorage.setItem("user-lang", "es");
}
    
function langEn(){
    document.documentElement.setAttribute("lang", "en");
    localStorage.setItem("user-lang", "en");
}

if(lang === "es"){
    langEs();
}

function hola(){
    document.getElementById('texto').innerHTML = "<h2>¡Hola!</h2><p>Te doy la bienvenida a mi portafolio...</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[0].style.fontWeight = "bold";
}

function hello(){
    document.getElementById('texto').innerHTML = "<h2>Hello!</h2><p>Welcome to my portfolio...</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[1].style.fontWeight = "bold";
}

function acerca(){
    document.getElementById('texto').innerHTML = "<h2>Acerca de</h2><p>Yo soy...</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[2].style.fontWeight = "bold";
}

function about(){
    document.getElementById('texto').innerHTML = "<h2>About</h2><p>I am...</p>";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[3].style.fontWeight = "bold";
}

function ahora(){
    document.getElementById('texto').innerHTML = "<h2>Ahora</h2>Actualmente...";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[4].style.fontWeight = "bold";
}

function now(){
    document.getElementById('texto').innerHTML = "<h2>Now</h2>Currently...";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[5].style.fontWeight = "bold";
}

function contacto(){
    document.getElementById('texto').innerHTML = "<h2>Contacto</h2>Puedes contactarme a través de...";
    for(i=0; i<10; i++){
        estilo[i].style.fontWeight = "100";
    }
    estilo[6].style.fontWeight = "bold";
}

function contact(){
    document.getElementById('texto').innerHTML = "<h2>Contact</h2>Contact me through...";
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

    document.getElementById("oscuro").classList.add("claroscuro");
    document.getElementById("claro").classList.remove("claroscuro");
}

function modoClaro(){
    raiz.style.setProperty('--color-fondo','whitesmoke');
    raiz.style.setProperty('--color-linea','lightgrey');
    raiz.style.setProperty('--color-fuente','black');
    raiz.style.setProperty('--content-bg','white');

    document.getElementById("claro").classList.add("claroscuro");
    document.getElementById("oscuro").classList.remove("claroscuro");
}