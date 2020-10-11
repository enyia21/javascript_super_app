document.addEventListener("DOMContentLoaded", callOnLoad);
const first_name = () => document.getElementById("first_name");
const last_name = () => document.getElementById("last_name");
const email = () => document.getElementById('email');
const age = () => document.getElementById('age');

const newUser = () => document.getElementById('New User');
const selectUser = () => document.querySelector('a.btn.dropdown-button')
const heroList = () => document.getElementById('herolist');
// const 

const serverUrl = 'http://localhost:3000/';
//create user
//user should be find themselves via select users or register as a user

//Create a click event that checks if user would like to register or toggle dropdown menu

class User {
    constructor(firstName, lastName, email, age, id){
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._age = age
        this._id = id
    }

    get firstName(){
        this._firstName;
    }

    set firstName(firstName){
        this._firstName = firstName
    }

    get lastName(){
        this._lastName;
    }

    set lastName(lastName){
        this._lastName = lastName
    }
    get email(){
        this._email;
    }

    set email(email){
        this._email = email
    }
    get age(){
        this._age;
    }

    set age(age){
        this._age = age
    }
    get id(){
        this._id;
    }

    set id(id){
        this._id = id
    }
}

function registerNewUser(){
    newUser().addEventListener('click', buildNewUsersForm)
}
function buildNewUsersForm(){

    const divNewNameRow = document.createElement('div');
    divNewNameRow.className = 'row';

    //first Name for form
    const divFirstNameInputField = document.createElement('div');
    divFirstNameInputField.className= 'input-field col s6';
    const firstNameLabel = document.createElement('label');
    firstNameLabel.setAttribute('for', 'first_name');
    firstNameLabel.innerHTML = 'First Name'
    const inputFirstNameInformation = document.createElement('input');
    inputFirstNameInformation.type='text';
    inputFirstNameInformation.placeholder= 'First Name';
    inputFirstNameInformation.className= "validate";
    inputFirstNameInformation.setAttribute('required', true);
    inputFirstNameInformation.id = 'first_name';

    divFirstNameInputField.appendChild(firstNameLabel);
    divFirstNameInputField.appendChild(inputFirstNameInformation);

    //last Name for form
    const divLastNameInputField = document.createElement('div');
    divLastNameInputField.className= 'input-field col s6';
    const lastNameLabel = document.createElement('label');
    lastNameLabel.setAttribute('for', 'last_name');
    lastNameLabel.innerHTML = 'Last Name'
    const inputLastNameInformation = document.createElement('input');
    inputLastNameInformation.type='text';
    inputLastNameInformation.placeholder= 'Last Name';
    inputLastNameInformation.className= "validate";
    inputLastNameInformation.setAttribute('required', true);
    inputLastNameInformation.id = 'last_name';

    divLastNameInputField.appendChild(lastNameLabel);
    divLastNameInputField.appendChild(inputLastNameInformation);
    
    divNewNameRow.appendChild(divFirstNameInputField);
    divNewNameRow.appendChild(divLastNameInputField);
    const formCreator = document.querySelector('form');
    formCreator.appendChild(divNewNameRow);

    //email
    const divEmailRow = document.createElement('div');
    divEmailRow.className = 'row';


    const divEmailInputField = document.createElement('div');
    divEmailInputField.className= 'input-field col s12';
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerHTML = 'Email'
    const inputEmailInformation = document.createElement('input');
    inputEmailInformation.type='email';
    inputEmailInformation.placeholder= 'Email';
    inputEmailInformation.className= "validate";
    inputEmailInformation.setAttribute('required', true);
    inputEmailInformation.id = 'email';

    divEmailInputField.appendChild(emailLabel);
    divEmailInputField.appendChild(inputEmailInformation);
    divEmailRow.appendChild(divEmailInputField);
    formCreator.appendChild(divEmailRow);

    //age
    const divAgeRow = document.createElement('div');
    divAgeRow.className = 'row';


    const divAgeInputField = document.createElement('div');
    divAgeInputField.className= 'input-field col s12';
    const ageLabel = document.createElement('label');
    ageLabel.setAttribute('for', 'age');
    ageLabel.innerHTML = 'Age'
    const inputAgeInformation = document.createElement('input');
    inputAgeInformation.type='number';
    inputAgeInformation.placeholder= 'Age';
    inputAgeInformation.className= "validate";
    inputAgeInformation.setAttribute('required', true);
    inputAgeInformation.id = 'age';

    divAgeInputField.appendChild(ageLabel);
    divAgeInputField.appendChild(inputAgeInformation);
    divAgeRow.appendChild(divAgeInputField);
    formCreator.appendChild(divAgeRow);

    const makeNewUserButton = document.createElement('button');
    makeNewUserButton.classList.add('btn');
    makeNewUserButton.innerHTML = 'Create User';
    makeNewUserButton.addEventListener('click', createUser);
    formCreator.appendChild(makeNewUserButton);
}


function createUser(e) {
        e.preventDefault();
        user = {
            first_name: first_name().value,
            last_name: last_name().value,
            email: email().value,
            age: age().value
        };
    // return user
    fetch(serverUrl + 'users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(object => {
        debugger;
        return recognizeUser(object)});


}

function recognizeUser(new_user){
    appUsers.push(new_user);
    //select heroes from list 
}

function getAllUsers(){
    fetch(serverUrl + 'users')
    .then(resp => resp.json())
    .then(object => findAllUsers(object))
}

let appUsers = [];

function findAllUsers(users){
    for(const shaUser of users){
        appUsers.push(shaUser);
    }
}





const heroes = [];
const users = [];

function callOnLoad(){
    loadHeroes();
    getAllUsers();
    selectUser().addEventListener('click', listAllUsersOnScreen);
    registerNewUser();
    heroList().addEventListener('click', displayHeroes(heroes))
}   
//build hero card
function buildCard(hero){
    const divRow = document.createElement('div');
    divRow.className = "row"
    const divColumn = document.createElement('div');
    divColumn.className = "col s12 m6";
    const divCard = document.createElement('div');
    divCard.className = 'card';
    
    
    
    //append image to card
    const divImage = document.createElement('div');
    divImage.className = "card-image";
    const heroImage = document.createElement('img');
    heroImage.src = hero['image'];
    divImage.appendChild(heroImage);
    divCard.appendChild(divImage);
    //append attributes to card
    const divCardContent = document.createElement('div');
    divCardContent.className= 'card-content';
    const ulAttributes = document.createElement('ul');
    ulAttributes.className= 'collection';

    const liAlignment = document.createElement('li');
    liAlignment.className = 'collection-item';
    liAlignment.innerHTML = `Alignment ${hero['alignment']}`;
    ulAttributes.appendChild(liAlignment)

    const liPowerLevel = document.createElement('li');
    liPowerLevel.className = 'collection-item';
    liPowerLevel.innerHTML = `Power Level: ${hero['power_level']}`;
    ulAttributes.appendChild(liPowerLevel);

    const liGender = document.createElement('li');
    liGender.className = 'collection-item';
    liGender.innerHTML = `Gender: ${hero['gender']}`;
    ulAttributes.appendChild(liGender);

    const liPlaceOfBirth = document.createElement('li');
    liPlaceOfBirth.className = 'collection-item';
    liPlaceOfBirth.innerHTML = `Place of Birth: ${hero['place_of_birth']}`;
    ulAttributes.appendChild(liPlaceOfBirth);

    divCardContent.appendChild(ulAttributes);
    divCard.appendChild(divCardContent);
    //add card tabs class
    const divCardTab = document.createElement('div');
    divCardTab.className = 'card-tabs';
    const ulTabs = document.createElement('ul')
    ulTabs.className = 'tabs tabs-fixed-width';
    
    
    const aPublisher = document.createElement('a');
    aPublisher.href=`#test4`;
    aPublisher.innerHTML=`${hero['publisher']}`;
    const liPublisherTab = document.createElement('li');
    liPublisherTab.className = 'tab';
    liPublisherTab.appendChild(aPublisher);

    const aFullName = document.createElement('a');
    aFullName.href=`#test5`;
    aFullName.innerHTML=`${hero['full_name']}`;
    const lifullName = document.createElement('li');
    lifullName.className = 'tab';
    lifullName.appendChild(aFullName);

    const aTeamAffiliation = document.createElement('a');
    aTeamAffiliation.href=`#test6`;
    aTeamAffiliation.innerHTML=`${hero['team_affiliation']}`;
    const liTeamAffiliation = document.createElement('li');
    liTeamAffiliation.className = 'tab';
    liTeamAffiliation.appendChild(aTeamAffiliation);


    ulTabs.appendChild(lifullName);
    ulTabs.appendChild(liPublisherTab);
    ulTabs.appendChild(liTeamAffiliation);
    divCardTab.appendChild(ulTabs)
    divCard.appendChild(divCardTab);

    //append Card Content
    const divCardContentTab = document.createElement('div');
    divCardContentTab.className = 'card-content grey lighten-4';
    
    const divPublisher = document.createElement('div');
    divPublisher.id=`#test4`;
    divPublisher.innerHTML=`${hero['publisher']}`;

    const divFullName = document.createElement('div');
    divFullName.id=`#test5`;
    divFullName.innerHTML=`${hero['full_name']}`;

    const divTeamAffiliation = document.createElement('div');
    divTeamAffiliation.id=`#test6`;
    divTeamAffiliation.innerHTML=`${hero['team_affiliation']}`;

    divCardContentTab.appendChild(divFullName);
    divCardContentTab.appendChild(divPublisher);
    divCardContentTab.appendChild(divTeamAffiliation);
    divCard.appendChild(divCardContentTab);

    divColumn.appendChild(divCard);
    divRow.appendChild(divColumn);
    return divRow
}


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
        const divHero = buildCard(hero)
        
        divVisibleBody.appendChild(divHero);
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

//create the select 
function listAllUsersOnScreen(){
    const ulUserDropdown = document.querySelector('ul#dropdown');
    for(const appUser of appUsers){
        const presenceTest = document.getElementById(`${appUser['id']}`)
        if (!presenceTest){
            const liUsers = document.createElement('li');
            const aUsers = document.createElement('a');
            aUsers.id = appUser['id'];
            aUsers.href = '#';
            aUsers.innerHTML = `${appUser['first_name']} ${appUser['last_name']}`
            liUsers.appendChild(aUsers);
            
            const deleteUserButton = document.createElement('button');
            deleteUserButton.classList.add('btn');
            deleteUserButton.innerHTML = 'Delete User';
            deleteUserButton.addEventListener('click', deleteUser);
            deleteUserButton.id = appUser.id;
    
            aUsers.appendChild(deleteUserButton);
            ulUserDropdown.appendChild(liUsers);
        }
    }
}

function deleteUser(e){
    this.id;
    user = appUsers[(parseInt(this.id, 10)-1)]
    fetch(serverUrl + 'users/' + this.id, {
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(object => {
        this.parentNode.remove();
    });
    
}

//select team