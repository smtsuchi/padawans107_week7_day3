console.log('hello world_DOM_DEMO')


console.log(document) // built in "document" variable is the entry point ot HTML


console.log(document.body)

const h1s = document.getElementsByTagName('h1')
console.log(h1s)
console.log(h1s[0])
console.log(h1s[1])
console.log(h1s[2])

h1s[2].innerHTML = '<p>final H1! -- there i fixed it</p>'
// h1s[2].innerText = '<p>final H1! -- there i fixed it</p>'


const title = document.getElementById('title')
title.innerText = title.innerText.toLowerCase()

const blueTexts = document.getElementsByClassName('text-primary')
console.log(blueTexts)

// grab elements using the querySelector
const mySelector = document.querySelector('p.text-primary.extra')
console.log(mySelector)



const changeColor = (event) => {
    console.log(event)
    console.log('i was clicked')
    const colorButton = event.target
    if (colorButton.className == 'btn btn-primary') {
        colorButton.className = 'btn btn-success'
    }
    else if (colorButton.className == 'btn btn-success'){
        colorButton.className = 'btn btn-danger'
    }
    else{
        colorButton.className = 'btn btn-primary'
    }
};
// create a button from scratch
const colorButton1 = document.createElement('button')
colorButton1.innerText = "click me part 1 (eventListener Version)";
colorButton1.id = 'color';


// document.body.append(colorButton1);
const divContainer = document.getElementById('put-button-in-here')
divContainer.append(colorButton1)


// event listener
// syntax: htmlElement.addEventListener('typeOfEvent', callbackFuncToRun)
const colorButton = document.querySelector('#color')
colorButton.addEventListener('mouseover', changeColor)

// add eventListener2 to the same button but do something else
colorButton.addEventListener('click', ()=>{
    const moreText = document.createElement('h2')    
    moreText.innerText = "I AM ALIVE!!!"
    divContainer.append(moreText)
});



// Grab form data from a submit event
const form = document.getElementById('pokeForm');

form.addEventListener('submit', (e)=>{
    console.log(e)
    e.preventDefault();

    //grabbing info using event
    const searchTerm1 = e.target.children[1].value
    const searchTerm2 = e.target.pokeName.value
    console.log(searchTerm1, searchTerm2)

    //grab info straight from doc
    const input = document.getElementById('poke_name')
    const searchTerm3 = input.value
    console.log(searchTerm3)
});
