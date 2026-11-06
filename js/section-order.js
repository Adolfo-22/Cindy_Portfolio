const growthSection = document.querySelector('.goals-section');
const letPlanSection = document.querySelector('.let-plan-section');
if (growthSection && letPlanSection) {
  letPlanSection.querySelector('.eyebrow').textContent = '06 / looking ahead';
  growthSection.querySelector('.eyebrow').textContent = '07 / keep becoming';
  growthSection.parentElement.insertBefore(letPlanSection, growthSection);
}
