// document.addEventListener("DOMContentLoaded", serverUrl)

const serverUrl = 'http://localhost:3000/'
//create user
//user should be find themselves via select users or register as a user
function createUserForm() {


}
// function createUser(e){
//     e.preventDefault()

//     const user= {
//         // first_name: 
//         // last_name:
//         // email:
//         // age: 
//     }
// }

// //select user
// const hero = {

// }
// //based on user selection or creation we will 
// function displayHeros()
const heroes = [];
const users = [];

function displayHeroes(heroes){
    for(const hero of heroes){
        const liHeroes = document.createElement('li');
        const divVisibleHeader = document.createElement('div');


        divVisibleHeader.className= 'collapsible-header';
        const iSubClass = document.createElement('i');
        iSubClass.className= 'collapsible-header';
        const divVisibleBody = document.createElement('div');
        divVisibleBody.className = 'collapsible-body';
        divVisibleHeader.innerHTML = `${hero['name']}`;
        const pCollapsableBody = document.createElement('p');
        pCollapsableBody.innerHTML= `Hero PowerLevel: ${hero['power_level']}`;
        
        divVisibleBody.appendChild(pCollapsableBody);
        divVisibleHeader.appendChild(iSubClass);
        liHeroes.appendChild(divVisibleHeader);
        liHeroes.appendChild(divVisibleBody);
        
        const ul = document.querySelector('ul.collapsible');
        ul.appendChild(liHeroes);
    }
}

function createHero(heroData){
    const hero = {
        name: heroData["name"],
        gender: heroData["gender"],
        power_level: heroData["power_level"],
        full_name: heroData["full_name"],
        place_of_birth: heroData["place_of_birth"],
        publisher: heroData["publisher"],
        alignment: heroData["alignment"],
        team_affiliation: heroData["team_affiliation"],
        image: heroData["image"]
    }
    heroes.push(hero);
}

function createHeroesArray(heroes){
    console.log(heroes)
    for(const hero of heroes){
        createHero(hero);
    }
}

function loadHeroes(){
    //fetch to get blog data 
    fetch(serverUrl + '/superheros')
    .then(resp =>{
        return resp.json();
    })
    .then(data => createHeroesArray(data))
}


// function load