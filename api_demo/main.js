console.log('API DEMO')


const getFormData = async (e) => {
    e.preventDefault();
    const pokemon = e.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    // Fetch and Axios are both ways to make HTTP requests in JS
    // fetch() -- this is built in
    // axios.get()

    const res = await fetch(url);
    
    const data = await res.json();
    

    const name = data['name'];
    const id = data.id;
    const imgUrl = data.sprites.front_default;  
     
    const myData =  {
        name: name,
        id: id,
        imgUrl: imgUrl
    }
    

    addToPage(myData)
};
const addToPage = (p) => {
    console.log(p, 'print p')
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${p.imgUrl}" class="card-img-top" alt="${p.name}">
    <div class="card-body">
      <h5 class="card-title">${p.name}</h5>
    </div>
  </div>
    `
    const container = document.querySelector('.container');
    if (container.innerHTML !== ''){
        container.innerHTML = ''
    }
    container.append(card)
};



const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', getFormData)