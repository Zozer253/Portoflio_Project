const title = document.querySelector(".hero-title");
const text = title.textContent;
let index = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = isDeleting ? text.slice(0, index - 1) : text.slice(0, index);
  title.textContent = currentText;

  if (!isDeleting && index <= text.length) {
    index++;
  } else {
    isDeleting = true;
    index--;
  }

  if (index === 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect, 150);
}

typeEffect();

// Deuxieme Fonctionnalite 

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const project = document.querySelectorAll('.projectCOntainer')
const projectLength = project.length

let ind = 0

prev.addEventListener('click', (e) => {
  nextImage('prev')
})

next.addEventListener('click', (e) => {
  nextImage('next')
})

function nextImage(direction) {
  if(direction==='next'){
    ind++
    if(ind === projectLength) {
      ind = 0
    }
  } else if(direction === 'prev'){
    if(ind == 0){
      ind = projectLength - 1
    } else {
      ind--
    }
  }

  for(let i=0; i < projectLength; i++){
    project[i].classList.add('hidden-card')
  }
  project[ind].classList.remove('hidden-card')
}

setInterval(() => {
  nextImage("next");
}, 5000);

const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  form.reset()
})

// "skill-progress"
let skills = document.querySelectorAll('.skill-progress');

skills.forEach(skill => {
  let progress = skill.getAttribute('data-progress');
  skill.style.width = progress + '%';
});

