	const slides = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	];

	//Declaration slides image, tagline et dots
	let currentSlideIndex = 0;
	const bannerImg = document.querySelector('.banner-img');
	const tagLine = document.getElementById('tagLine');
	const dotsContainer = document.querySelector('.dots');

	//fonction selection image slide et tagline
	function showSlide(index) {
		bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
		tagLine.innerHTML = slides[index].tagLine;
		updateDots(index);
	}
	//Fonction creation et mise a jour des dots
	function updateDots(index) {
		dotsContainer.innerHTML = '';
		for (let i = 0; i < slides.length; i++) {
			const dot = document.createElement('div');
			dot.className = 'dot';
			if (i === index) {
				dot.className += ' dot_selected';
			}
			dotsContainer.appendChild(dot);
		}
	}
	// Fonction slideRight
	function slideRight() {
		currentSlideIndex = currentSlideIndex + 1;
		if (currentSlideIndex === slides.length) {
			currentSlideIndex = 0;
		}
		showSlide(currentSlideIndex);
	}
	// Fonction slideLeft
	function slideLeft() {
		currentSlideIndex = currentSlideIndex - 1;
		if (currentSlideIndex < 0) {
			currentSlideIndex = slides.length - 1;
		}
		showSlide(currentSlideIndex);
	}
	// Ajout event listeners aux flèches gauche et droite
	document.getElementById('caroussel_left').addEventListener('click', slideLeft);
	document.getElementById('caroussel_right').addEventListener('click', slideRight);

	updateDots(currentSlideIndex);

