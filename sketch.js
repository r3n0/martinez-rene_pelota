function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	rect(mouseX, mouseY, 20);
	rect(mouseX + 1, mouseY, 20);

	circle(200, 200, 50);
	pint();
}
