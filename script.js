// local reviews data
const reviewsEn = [
    {
      id: 1,
      name: "Írisz",
      text:
        "I know him as an individual of great capacity and extreme conscientious. You can ask any question or have any request he will be more than honored to be at your service. He can take any challenge in any situation to provide at the highest value.",
    },
    {
      id: 2,
      name: "Győző",
      text:
        "Sólyom is driven, persistent, resourceful, while He is also creative and flexible. Tough I got to know his attitude and work from a non-IT side, I am convinced He completes his goals and tasks just as thoroughly in any field of life."
    },
    {
      id: 3,
      name: "Nándor",
      text:
        "Solyom is an extremely hard working and dedicated guy, who loves what he's doing. He is reliable and very easy to work with. I would definately recommend him. If you have a vision, he can help you bring it to life!",
    },
        {
      id: 4,
      name: "Bajnok",
      text:
        "Solyom is a people-centered man, who always listens to the customers' needs. He loves to learn new things, new methods to improve in his private life and his career."
    },
    {
      id: 5,
      name: "Ani",
      text:
        "Solyom is highly professional, kind, polite and very easy to work with. All of our visions came true through his precise and profound hard work.",
    },
    {
      id: 6,
      name: "Bátor",
      text:
        "I can only recommend you working with Solyom. Hard-working and dedicated. Working together with him in a few words – momentum, cooperation, precision and humour. I love his style and innovative ideas. I know whom I will turn to."
    },
];

const reviewsHu = [
  {
    id: 1,
    name: "Írisz",
    text:
      "Nagy teherbírású es rendkívül lelkiismeretes embernek ismertem meg. Bármilyen kérdéssel és kéréssel fordulhatsz hozzá, készségesen segít benne. Számtalan helyzetben állja a kihívásokat, a maximumot nyújtva.",
  },
  {
    id: 2,
    name: "Győző",
    text:
      "Sólyom elszánt, kitartó, leleményes, mindezek mellett még kreatív és rugalmas is. IT területen kívül ismertem meg a hozzáállását és a munkáját, de meggyőzött arról, hogy az élet bármely területén alaposan végzi az elvállalt feladatot vagy a kitűzött célt."
  },
  {
    id: 3,
    name: "Nándor",
    text:
      "Solyom egy hihetetlenül szorgalmas és elszánt ember, aki imádja amit csinál. Nagyon megbizható és nagyon könnyen lehet vele együtt dolgozni. Mindenképp ajánlanám a közös munkát. A te víziódat is segítheti életre kelteni!",
  },
  {
    id: 4,
    name: "Bajnok",
    text:
      "Solyom egy emberközpontú srác, aki minden figyel és hallgat a vásárlók igényire. Imád új dolgokat, eljárásokat tanulni, hogy fejlődhessen, mind a privát életében, mind pedig a karrierjében."
  }, 
  {
    id: 5,
    name: "Ani",
    text:
      "Solyom jól képzett, kedves, udvarias és könnyű vele együtt dolgozni. Minden víziónk valóra vált a precíz és szorgalmas munkájának köszönhetően.",
  },
  {
    id: 6,
    name: "Bátor",
    text:
      "Csak ajánlani tudom, hogy Solyommal dolgozz. Szorgalmas és elszánt. A vele való közös munka pár szóban - lendületes, kooperáció, pontosság és humor. Szeretem a stílusát és az innovatív ötleteit. Legközelebb is tudom, hogy kihez fogok fordulni."
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

let reviews = 0;

if(document.documentElement.lang == "en"){
  reviews = reviewsEn;
} else if(document.documentElement.lang == "hu"){
  reviews = reviewsHu;
}

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
            console.log('Message is not valid.')
        }
        
    })
