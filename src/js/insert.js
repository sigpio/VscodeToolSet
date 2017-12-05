import people from "./people";

let listPeople = document.querySelector('#list-people');


people.map (obj => {
    listPeople.innerHTML += `<li>${obj.name}, ${obj.lastname}</li>`;
});


