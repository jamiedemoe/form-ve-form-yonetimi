let formDOM = document.querySelector("#userform");
formDOM.addEventListener("submit", handleSubmit)
function handleSubmit(event){
event.preventDefault();
let userDOM = document.getElementById("userid").value;
let lastnameDOM = document.getElementById("lastname").value;
alert(`teşekkürler ${userDOM} ${lastnameDOM}`);
}