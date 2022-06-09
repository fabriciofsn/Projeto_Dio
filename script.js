const btn = document.querySelector('#btn');
const text = document.querySelector('.text');

function handleClick(event) {
  text.classList.toggle('active');
}

btn.addEventListener('click', handleClick);
