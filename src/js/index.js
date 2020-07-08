import '../scss/main.scss';
import '../js/main2.js';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = "Artur";
const age = 24;

console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lata.`);


const additionalParagraph = document.querySelector(
  ".language-info__description--JS"
);

console.log(additionalParagraph);

additionalParagraph.innerHTML =
  "<b>Dobrałem się do treści HTML przy pomocy JS</b>";



function greetOld(age, firstName) {
    console.log (
        `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
    );
}

const greet = (age,firstName) => {
      console.log (
        `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
      );
}

greetOld(age, firstName)
greet ('33', `Krystian`)

function calculateOld(myNumber)  {
  return myNumber*7;
}                                                     //oba zapisy góra i dół poprawne

const calculate = (myNumber) => myNumber*7


function createContent(querySelectorContent, content) {
    
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

function helloWorld() {
  console.log ('witaj świecie')
}

helloWorld();

createContent('.language-info__description--JS', 'Treść modyfikowana funkcją createContent w JS');    //wywołanie funckji

createContent('.language-info__heading--JS', 'JavaScript - JS - the hard one (createContent-JS)' );


const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed `)
  },
  isOperating: true,
  name: 'Death Star',
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: 'Darth Vader',
    age: 44
  }
}

deathStar.fire('Rebel ship')

console.log(deathStar.commander.name)
console.log(deathStar.commander.age)

console.log (deathStar['name'])

const humanOne = {
  name: 'Maciek',
  age: 32,
  address: {
    street: 'Warszawska',
    city: 'Białystok',
  }
}


const humanTwo = {
  name: 'Stefan',
  age: 35,
  address: {
    street: humanOne.address.street,
    city: 'Białystok',
  }
};

console.log(humanOne.address)
console.log(humanTwo.address)


console.log (humanOne);
console.log (humanTwo);

humanOne.age = 35;


console.log(humanOne);
console.log(humanTwo);






const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click',() => {
  const nav = document.querySelector('.navigation--js')
  nav.classList.toggle('navigation--open');
})

const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;

document.cookie = 'name = artur' 
document.cookie = 'test = korsi' 


localStorage.setItem('nowyKlucz', JSON.stringify({name:'artur'}));

const myResult = localStorage.getItem('nowyKlucz');

console.log(JSON.parse(myResult));

const myNewObject = JSON.parse(myResult);

myNewObject.newProperty = 'hi';

console.log(myNewObject)


const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
  console.log (`wartość entry: ${entry}`)
  result = entry;
}


const entryInput = document.querySelector('.entry--js');
entryInput.value = result;

const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('click', () => {
      localStorage.setItem('entry', entryInput.value);
});

