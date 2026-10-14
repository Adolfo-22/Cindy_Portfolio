const resultsModal = document.querySelector('#evidence-modal');
const resultsModalTitle = document.querySelector('#modal-title');
const resultsModalPreview = document.querySelector('#modal-preview');
const resultsModalScore = document.querySelector('#modal-score');

document.querySelectorAll('.row-image-button').forEach(button => {
  button.addEventListener('click', () => {
    resultsModalTitle.textContent = button.dataset.resultTitle;
    resultsModalPreview.innerHTML = `<img src="${button.dataset.resultImage}" alt="${button.dataset.resultTitle} evidence">`;
    resultsModalScore.textContent = 'Add the verified score and assessment details in the card above.';
    resultsModal.classList.add('open');
    resultsModal.setAttribute('aria-hidden', 'false');
    document.querySelector('.modal-close').focus();
  });
});

function closeResultsModal() {
  resultsModal.classList.remove('open');
  resultsModal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', event => { if(event.target.closest('[data-close-modal]')) closeResultsModal(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape' && resultsModal.classList.contains('open')) closeResultsModal(); });
