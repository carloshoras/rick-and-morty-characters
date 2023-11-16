
const personajes = document.getElementById('character-list');
const nextButton = document.getElementById('next-page');
const prevButton = document.getElementById('prev-page');
let pagina = 1;
fetchFunction(1);

function fetchFunction (pagina) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`).then((response) => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa')
        }
        return response.json()
    }).then((data) => {
        data.results.forEach((personaje) => {
            personajes.innerHTML += `<li><img src="${personaje.image}" alt="${personaje.name}" /><div class="name"><h4>Name:</h4><span>${personaje.name}</span></div><div class="species"><h4>Species:</h4><span>${personaje.species}</span></div></li>`
        })
    })  
}

nextButton.addEventListener('click', () => {
    if (pagina < 42) {
        pagina += 1
        personajes.innerHTML = ""
        fetchFunction(pagina)
    }
})

prevButton.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1
        personajes.innerHTML = ""
        fetchFunction(pagina)
    }
})
