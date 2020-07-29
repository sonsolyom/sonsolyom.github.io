// local reviews data
const reviews = [
    {
      id: 1,
      name: "Írisz",
      text:
        "Nagy teherbirasu es rendkivul lelkiismeretes embernek ismertelek meg. Barmilyen kerdessel es keressel fordulhatok hozzad, keszsegesen segitesz. Szamtalan helyzetben allod a kihivasokat, a maximumot nyujtva.",
    },
    {
      id: 2,
      name: "Nándor",
      text:
        "Solyom is an extremely hard working and dedicated guy, who loves what he's doing. He is reliable and very easy to work with. I would definately recommend him. If you have a vision, he can help you bring it to life!",
    },
    {
      id: 3,
      name: "Ani",
      text:
        "Solyom is highly professional, kind, polite and very easy to work with. All of our visions came true through his precise and profound hard work.",
    },
    {
      id: 4,
      name: "Kristóf",
      text:
        " 1. -Dedicated and hard-working. Working together with Solyom in a few words – momentum, cooperation and precision and humour. I LOVE his style and innovative ideas. 2. -Utterly satisfied! I can only recommend you working with Solyom. We could always negotiate if something was up flexibility and hard work for real! I know whom I will turn to. 3. -Nice guy, nice work. Happy I was working with him. His attitude is just great! Wouldn’t hesitate to call him again!",
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// reviews
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});

function showPerson(person){
  const item = reviews[person];

  
  author.textContent = item.name;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
  currentItem++;

  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }

  showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
  currentItem--;

  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
  currentItem = getRandomNumber();
  console.log(currentItem);
  showPerson(currentItem);
});

function getRandomNumber(){
  return Math.floor(Math.random() * reviews.length);
}

let submit = document.querySelector('#submit-btn')
let theme = localStorage.getItem('theme');
let languageImg = document.querySelector('#language_img')

// theme dots
if(theme == null){
    setTheme('light');
}else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option clicked: ' +mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == 'light'){
      document.getElementById('theme-style').href = 'default.css';
      languageImg.src = '/images/dark-languages.png';
    }else if(mode == 'blue'){
      document.getElementById('theme-style').href = 'blue.css';
      languageImg.src = '/images/light-languages.png';
    }else if(mode == 'green'){
      document.getElementById('theme-style').href = 'green.css';
      languageImg.src = '/images/light-languages.png';
    }else if(mode == 'purple'){
      document.getElementById('theme-style').href = 'purple.css';
      languageImg.src = '/images/light-languages.png';
    }

    localStorage.setItem('theme', mode);
}

// form
function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 


    submit.addEventListener('click', function(e){
        console.log('button clicked');

        let name = document.querySelector('#name').value;
        let subject = document.querySelector('#subject').value;
        let email = document.querySelector('#email').value;
        let message = document.querySelector('#message').value;

        if(name.length >= 2){
            console.log('Name is valid.')
        } else {
            console.log('Name is not valid.')
        }

        if(subject.length >= 2){
            console.log('Subject is valid.')
        } else {
            console.log('Subject is not valid.')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.') ){
            console.log('Email is valid.')
        } else {
            console.log('Email is not valid.')
        }

        if(message.length >= 10){
            console.log('Message is valid.')
        } else {
            console.log('MEssage is not valid.')
        }
        
    })
