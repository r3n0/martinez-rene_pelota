let posX;
let posY;
let diametro;
let radio;
let fondo;

function setup() {
	createCanvas(windowWidth, windowHeight);
	posX = windowWidth / 2;
	posY = windowHeight / 2;
	// frameRate(10);
	diametro = 100;
	radio = diametro / 2;
	fondo = color(25, 100, 50);
}
function draw() {
	background(fondo);

	posX -= 10;
	if (posX < -radio) {
		diametro = random(10, 100);
		radio = diametro / 2;
		fondo = color(255, random(100, 255), 50);
		fondo.saturation(0.7);
		posX = windowWidth + radio;
	}

	fill(0);
	circle(posX, posY, diametro);

	print(posX);
}
