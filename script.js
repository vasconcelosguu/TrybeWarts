const checkCredencials = () => {
  const getEmail = document.querySelector('#email');
  const getPassword = document.querySelector('#password');
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
};

const enableButton = () => {
  const getBtnButton = document.querySelector('#submit-btn');
  getBtnButton.toggleAttribute('disabled');
};

const getForm = document.getElementById('evaluation-form');
const Email = document.getElementById('input-email');
const House = document.getElementById('house');
const textArea = document.getElementById('textarea');
const names = document.getElementById('input-name');
const name2 = document.getElementById('input-lastname');

const createForm = (e) => {
  e.preventDefault();
  const family = document.querySelector('input[name=family]:checked');
  const rating = document.querySelector('input[name=rate]:checked');
  const subjects = document.querySelectorAll('.subject:checked');
  const newForm = document.querySelector('#form-data');

  getForm.style.display = 'none';
  newForm.classList.toggle('display');
  newForm.innerText = `
  Nome: ${names.value} ${name2.value}
  Email: ${Email.value}
  Casa: ${House.value}
  Família: ${family.value}
  Matérias: ${[...subjects].map((subject) => subject.value).join(', ')}
  Avaliação: ${rating.value}
  Observações: ${textArea.value}
  `;
};

getForm.addEventListener('submit', createForm);

const $ = document.querySelector('#textarea');
$.addEventListener('input', () => {
  const getCounter = document.querySelector('#counter');
  getCounter.textContent = $.getAttribute('maxlength') - $.value.length;
});

const agree = document.querySelector('#agreement');
const sendEmail = document.querySelector('#submit');
agree.addEventListener('change', enableButton);
sendEmail.addEventListener('click', checkCredencials);
