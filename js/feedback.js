// Funkcija za preklapljanje med odzivi
let currentIndex = 0;
const reviews = document.querySelectorAll('.review');

function changeReview() {
  // Odstranimo obstoječe razrede
  reviews.forEach(review => review.classList.remove('left', 'center', 'right', 'hidden'));

  // Določimo naslednji razred za vsakega odziva
  if (currentIndex === 0) {
    reviews[0].classList.add('right');
    reviews[1].classList.add('left');
    reviews[2].classList.add('center');
    reviews[3].classList.add('hidden');
    reviews[4].classList.add('hidden');
  } else if (currentIndex === 1) {
    reviews[0].classList.add('center');
    reviews[1].classList.add('hidden');
    reviews[2].classList.add('left');
    reviews[3].classList.add('right');
    reviews[4].classList.add('hidden');

  } else if (currentIndex === 2) {
    reviews[0].classList.add('left');
    reviews[1].classList.add('hidden');
    reviews[2].classList.add('hidden');
    reviews[3].classList.add('center');
    reviews[4].classList.add('right');

  } else if (currentIndex === 3) {
    reviews[0].classList.add('hidden');
    reviews[1].classList.add('right');
    reviews[2].classList.add('hidden');
    reviews[3].classList.add('left');
    reviews[4].classList.add('center');

  } else if (currentIndex === 4) {
    reviews[0].classList.add('hidden');
    reviews[1].classList.add('center');
    reviews[2].classList.add('right');
    reviews[3].classList.add('hidden');
    reviews[4].classList.add('left');

  }

  // Povečamo index za naslednji preklop
  currentIndex = (currentIndex + 1) % 5;
}

// Sprememba razredov vsake 5 sekund
setInterval(changeReview, 5000);

// Nastavimo začetno stanje
changeReview();