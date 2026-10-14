const evidencePages = [
  { image:'img/Test_Results_and_Compilation/Test_Results_and_Compilation1.png', label:'Evidence 01', title:'Professional Education assessment', score:'Score to be verified' },
  { image:'img/Test_Results_and_Compilation/Test_Results_and_Compilation2.png', label:'Evidence 02', title:'Professional Education assessment', score:'9/10' },
  { image:'img/Test_Results_and_Compilation/Test_Results_and_Compilation3.png', label:'Evidence 03', title:'Professional Education assessment', score:'Score to be verified' },
  { image:'img/Test_Results_and_Compilation/Test_Results_and_Compilation4.png', label:'Evidence 04', title:'Professional Education assessment', score:'Score to be verified' }
];
const bookImage = document.querySelector('#book-image');
const bookPage = document.querySelector('#book-page');
const bookCounter = document.querySelector('#book-counter');
const bookLabel = document.querySelector('#book-page-label');
const bookScore = document.querySelector('#book-score');
const bookKicker = document.querySelector('#book-kicker');
const bookRecord = document.querySelector('#book-record');
const bookEditScore = document.querySelector('#book-edit-score');
const bookTitle = document.querySelector('#book-title');
const bookDescription = document.querySelector('#book-description');
const thumbnails = document.querySelector('#book-thumbnails');
let bookIndex = 0;
function renderBookPage(index) {
  bookIndex = (index + evidencePages.length) % evidencePages.length;
  const page = evidencePages[bookIndex];
  bookImage.src = page.image;
  bookImage.alt = `${page.title} ${bookIndex + 1}`;
  bookLabel.textContent = page.label;
  bookScore.textContent = page.score;
  bookKicker.textContent = page.title;
  bookRecord.textContent = String(bookIndex + 1).padStart(2, '0');
  bookEditScore.textContent = page.score === '9/10' ? '9/10' : '[Add score]';
  bookTitle.textContent = `My documented learning · ${String(bookIndex + 1).padStart(2, '0')}`;
  bookDescription.textContent = 'This page keeps my assessment evidence organized and easy to review. I can update the title, date, and score as I complete my authentic records.';
  bookCounter.textContent = `${String(bookIndex + 1).padStart(2, '0')} / ${String(evidencePages.length).padStart(2, '0')}`;
  thumbnails.querySelectorAll('button').forEach((thumbnail, thumbnailIndex) => thumbnail.classList.toggle('active', thumbnailIndex === bookIndex));
}
thumbnails.innerHTML = evidencePages.map((page, index) => `<button type="button" aria-label="Show ${page.label}"><img src="${page.image}" alt=""></button>`).join('');
document.querySelector('#book-prev').addEventListener('click', () => renderBookPage(bookIndex - 1));
document.querySelector('#book-next').addEventListener('click', () => renderBookPage(bookIndex + 1));
thumbnails.querySelectorAll('button').forEach((thumbnail, index) => thumbnail.addEventListener('click', () => renderBookPage(index)));
bookPage.addEventListener('click', () => {
  const modal = document.querySelector('#evidence-modal');
  document.querySelector('#modal-title').textContent = evidencePages[bookIndex].title;
  document.querySelector('#modal-preview').innerHTML = `<img src="${evidencePages[bookIndex].image}" alt="${evidencePages[bookIndex].title} evidence">`;
  document.querySelector('#modal-score').textContent = evidencePages[bookIndex].score;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
});
renderBookPage(0);
