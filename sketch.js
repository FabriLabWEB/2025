let formURL = "https://forms.gle/azuKYHAniw1RrjKf7";
let buttonVisible = false;
let dots = "";
let frameCountSinceStart = 0;
let img;
let img2;
let audiowideFont;

function preload() {
    // Cargar una imagen desde una URL o un archivo local
    img = loadImage("Text Tittle.png"); // Reemplázala con tu logo
    img2 = loadImage("QR FabriLab Web.png");
    audiowideFont = loadFont("Audiowide-Regular.ttf"); // Fuente Audiowide
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(20);
    textAlign(CENTER, CENTER);
    fill(255);

    // Intentar abrir la URL automáticamente
    let newTab = window.open(formURL, "_blank");

    // Si la pestaña se abre, intentamos cerrar esta ventana
    if (newTab) {
        window.close();
    }

    // Si el navegador bloquea la redirección, mostrar botón manual
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        buttonVisible = true;
    }
  imageMode(CENTER, CENTER);
}

function draw() {
    background(20);
    fill(255);
    textFont(audiowideFont);

    image(img, width/2, height*0.28, img.width*0.1, img.height*0.1);
  
    image(img2, width/2, height*0.61, img2.width*0.14, img2.height*0.14);

    // Animación de "Redirigiendo..."
    frameCountSinceStart++;
    if (frameCountSinceStart % 30 === 0) { // Cambia cada 30 frames
        dots = dots.length < 3 ? dots + "." : "";
    }
    textSize(32);
    textStyle(BOLD);
    text("Redirigiendo a FabriLab WEB" + dots, width / 2, height / 2 - 80);

    // Mensaje "Ya puedes cerrar esta ventana" (más abajo)
    textSize(18);
    textStyle(NORMAL);
    fill(200);
    text("Ya puedes cerrar esta ventana", width / 2, height / 2 - 10);

    if (buttonVisible) {
        textSize(20);
        fill(255);
        text("Haz clic en el botón para abrir FabriLab WEB", width / 2, height / 2 + 30);

        // Dibujar botón
        let btnX = width / 2 - 100;
        let btnY = height / 2 + 60;
        let btnW = 200;
        let btnH = 60;

        // Cambiar color si el mouse está sobre el botón
        if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
            fill(100, 200, 255);
            cursor(HAND);
        } else {
            fill(50, 150, 255);
            cursor(ARROW);
        }

        // Sombra del botón
        noStroke();
        rect(btnX, btnY, btnW, btnH, 15);

        // Texto del botón
        fill(255);
        textSize(22);
        text("Abrir FabriLab WEB", width / 2, height / 2 + 90);
    }
}

function mousePressed() {
    let btnX = width / 2 - 100;
    let btnY = height / 2 + 60;
    let btnW = 200;
    let btnH = 60;

    if (buttonVisible && mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
        let newTab = window.open(formURL, "_blank");

        // Intentar cerrar la ventana después de abrir el formulario
        if (newTab) {
            window.close();
        }
    }
}


