// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("");
  //declaration
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("theUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


  //Delete btn
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);



  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};

function secondElement() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("theUL");
  switching = true;
  
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      console.log(b[i].innerHTML);
    }
  }
}

/*


function secondElement() {
    
    const teams = ['Soccer', 'boccer', 'hotter'];
    teams.sort(); 
  
    document.getElementById(secondElement).appendChild(li);
    }

    document.getElementById("myInput").value = "  ";

function edit(id){
  const newTask = prompt('What would u change')
  const task = items.find((item) => item.id === id);
  task.item = newTask
  localStorage.setItem('records',JSON.stringify(items));
  showData();
};


*/

  
function edit(id){
  const newTask = prompt('What would u change')
  const task = items.find((item) => item.id === id);
  task.item = newTask
  localStorage.setItem('records',JSON.stringify(items));
  showData();
};








