const reflectionTrigger = document.querySelector('.growth-reflection summary');
const reflectionModal = document.querySelector('#reflection-modal');
const reflectionContent = document.querySelector('#reflection-modal-content');
const reflectionSource = document.querySelector('.reflection-full');

function closeReflectionModal() {
  reflectionModal.classList.remove('open');
  reflectionModal.setAttribute('aria-hidden', 'true');
}

reflectionTrigger?.addEventListener('click', event => {
  event.preventDefault();
  reflectionContent.innerHTML = reflectionSource.innerHTML;
  reflectionModal.classList.add('open');
  reflectionModal.setAttribute('aria-hidden', 'false');
  reflectionModal.querySelector('.modal-close').focus();
});
reflectionModal?.querySelectorAll('[data-reflection-close]').forEach(control => control.addEventListener('click', closeReflectionModal));
document.addEventListener('keydown', event => { if(event.key === 'Escape' && reflectionModal?.classList.contains('open')) closeReflectionModal(); });