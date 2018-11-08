 var signinbutton = document.getElementById('joinnewsletter');
 console.log (signinbutton);

 function checkEvent(event){
    
    event.preventDefault();
	console.log ("Нажали")};

 signinbutton.addEventListener ("click", checkEvent);

 function checkEvent(event){
    
    event.preventDefault();

var yourname = document.getElementById("yourname");
var valueyourname = yourname.value;

if (valueyourname === '' ){

yourname.style.border = '2px solid red';	
	console.log('Введите имя');
} else {
	yourname.style.border = '1px solid gray';
}

var yourEmail = document.getElementById("yourEmail");
var valueyourEmail = yourEmail.value;

if (valueyourEmail === '' ){

yourEmail.style.border = '2px solid red';	
	console.log('Введите действительный email');
} else {
	yourEmail.style.border = '1px solid gray';
} 

if (valueyourname !== '' && valueyourEmail !== '') {
  hideMessage();
}
}

function hideMessage(){
 var thankyoumessage = document.getElementById('thankyoumessage');
 console.log (thankyoumessage);
 thankyoumessage.style.display = "none";
                                  
	var thankyoumessage = document.getElementById('thankyoumessage');
 console.log (thankyoumessage);
 alert ('Спасибо, Ваше сообщение отправлено');
 thankyoumessage.style.display = "block";
 }

