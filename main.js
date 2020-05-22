let imageFigureElement = document.querySelector("image-figure");

if (!imageFigureElement) {
	imageFigureElement = document.createElement("image-figure");
	document.body.appendChild(imageFigureElement);
}

setTimeout(() => {
	imageFigureElement.setAttribute("caption", "Gambar 1");
}, 1000);

setTimeout(() => {
	imageFigureElement.remove();
}, 8000);