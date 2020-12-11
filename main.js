const button = document.querySelector('.share');
const showBar = document.querySelector('.share-info');
const shareIcon = document.querySelector('.share-icon');

button.addEventListener('click', function() {
  button.classList.toggle('share-icon-active');
  shareIcon.classList.toggle('share-btn');
  showBar.classList.toggle('hidden');
});



