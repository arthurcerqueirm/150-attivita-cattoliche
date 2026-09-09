const modal = document.getElementById('upgrade-modal');
const essentialButton = document.getElementById('essential-button');
let lastFocused = null;

function openModal(){
  lastFocused = document.activeElement;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  modal.querySelector('.modal-x').focus();
}

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  if(lastFocused) lastFocused.focus();
}

essentialButton.addEventListener('click',openModal);
modal.querySelectorAll('[data-close]').forEach(element=>element.addEventListener('click',closeModal));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.classList.contains('open'))closeModal()});
