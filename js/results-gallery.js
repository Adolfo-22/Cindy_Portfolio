const resultsModal = document.querySelector('#evidence-modal');
const resultsModalTitle = document.querySelector('#modal-title');
const resultsModalPreview = document.querySelector('#modal-preview');
const resultsModalScore = document.querySelector('#modal-score');

document.querySelectorAll('.row-image-button').forEach(button => {
  button.addEventListener('click', () => {
    const score = button.closest('.row-evidence-card').querySelector('figcaption strong').textContent.trim();
    resultsModalTitle.textContent = button.dataset.resultTitle;
    resultsModalPreview.innerHTML = `<img src="${button.dataset.resultImage}" alt="${button.dataset.resultTitle} evidence">`;
    resultsModalScore.textContent = score ? `Score: ${score}` : '';
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
