


const randomColor = () => {
	let colorA = Math.floor(Math.random() * 255 + 100);
	let colorB = Math.floor(Math.random() * 255 + 100);
	let colorC = Math.floor(Math.random() * 255 + 100);
	const newColor = `rgb(${colorA}, ${colorB}, ${colorC})`;
	console.log(newColor);
	return newColor
}

const colorizedCards = document.querySelectorAll(".colorize");

for (let card of colorizedCards) {
	card.addEventListener("click", function() {
	card.style.backgroundColor = randomColor()
})
}

