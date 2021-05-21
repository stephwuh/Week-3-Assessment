console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Message successfully submitted")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let compliment = document.querySelector('img');

function giveCompliment(evt) {
	alert("You are awesome! I wish I was you. Can we be best friends?")
}

compliment.addEventListener('mouseover', giveCompliment)

