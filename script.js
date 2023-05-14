
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let navLinks = document.querySelectorAll('.navbar a');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

navLinks.forEach(link => {
  link.onclick = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
});

document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
});




const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  const answer = faq.querySelector('.answer');
  let isOpen = false;

  question.addEventListener('click', () => {
    if (isOpen) {
      answer.classList.remove('active');
      isOpen = false;
    } else {
      faqs.forEach(faq => faq.querySelector('.answer').classList.remove('active'));
      answer.classList.add('active');
      isOpen = true;
    }
  });
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  const input = tab.querySelector('input[type="radio"]');
  const label = tab.querySelector('label');
  const content = tab.querySelector('.jit');
  
  label.addEventListener('click', () => {
    if (input.checked) {
      input.checked = false;
      content.style.display = 'none';
    } else {
      input.checked = true;
      content.style.display = 'block';
    }
  });
});





