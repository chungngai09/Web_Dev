//DOM Document Object + Element Object + Attribute Object + Event Object



// variables
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false); // add a listener, fales is default
}

//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false); // delete button's function is to remove parent, target return it's element 
  evt.target.parentNode.remove(); // parentNode 
}

//click on a list item and it strikethroughs the text
function lineThrough(event){
	var a=event.target; //return element
	
	// click 
	if(count==0)
	{
		
	    a.classList.add("done");
	}
	else
	{
		a.classList.toggle("done");
	}
	count++;

}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


//adding new items:

function inputLength(){
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
	
}


// click
function addToListAfterClick(){
	if(inputLength() > 0){
			createListElement();
		}
}

// keyboard enter keycode 13
function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Give two methods
button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);

// 1. If you click on the list item, it toggles the .done  class on and off. 

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!) 