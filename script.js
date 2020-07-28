// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
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
    }else if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }else if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }else if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
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
