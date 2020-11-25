var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll('ul > div > li');
var div = document.querySelectorAll('ul > div');
var deleteButton = document.querySelectorAll('ul > div > button');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggle(){
	this.classList.toggle("done");
}

function deleteLi() {
	for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteLi);
    }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// every li can toggle
for(var i = 0; i < li.length; i++){
	li[i].addEventListener("click", toggle);
}

deleteButton.addEventListener("click", deleteLi);

// delete it by i
for(var i = 0; i < div.length; i++){
	div[i].addEventListener("click", deleteLi);
}