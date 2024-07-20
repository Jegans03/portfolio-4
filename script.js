/*-----------------Scroll reveal-------------*/
ScrollReveal({
  distance:'80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .skills-box, .contact form',{
  origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right' });
  
  
/*---------------Message submission------------*/
/*const scriptURL = 'https://script.google.com/macros/s/AKfycbw4Jkc_8n_KT5EsvqqVa-ion2N92OArkYHoLG6uImNm818yEx9Z0SGxxn1_68xlVxEy4A/exec' 
const form = document.forms['submit-to-google-sheet'] form.addEventListener('submit', e => { e.preventDefault() fetch(scriptURL, { method: 'POST', body: new FormData(form)}) .then(response => console.log('Success!', response)) .catch(error => console.error('Error!', error.message)) })*/