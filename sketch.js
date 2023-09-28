let posX;
let posY;
let diametro = 100;
let radio = diametro / 2;
let colorDeFondo;
let vel = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	posX = windowWidth / 2;
	posY = windowHeight / 2;
	// frameRate(10);
	colorDeFondo = color(255, 200, 50);
}

function draw() {
	background(colorDeFondo);
	posX -= vel;

	if (posX < -radio) {
		diametro = random(10, 100);
		radio = diametro / 2;
		colorDeFondo = color(255, random(100, 255), 50);
		// colorDeFondo.saturation(0.7);
		posX = windowWidth + radio;
	}
	fill(0);
	circle(posX, posY, diametro);
	print(posX);
}
