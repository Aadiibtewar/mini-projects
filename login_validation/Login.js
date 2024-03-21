let usn=document.getElementById('email');
let pass=document.getElementById('password');


function fetchLoginData() {
	// body...
	let userCred=JSON.parse(localStorage.getItem("userData"));

	if (((email.value)==(userCred.username))&&((password.value)==(userCred.password))) {
		open("Homepage.html")
	}else{
		alert("wrong credentilas");
	}
}