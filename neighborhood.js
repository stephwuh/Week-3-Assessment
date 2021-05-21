let restButton = document.querySelector('#recommendation');
let rest = document.body.querySelector('#options').childNodes


const makeRecommendation = () =>{
    alert("You should try " + rest[Math.floor(Math.random()*rest.length)].textContent +"!")
}

restButton.addEventListener('click', makeRecommendation)

