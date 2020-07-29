import '../styles/index.scss';

document.getElementById("tombol").addEventListener("click", function(event){
  event.preventDefault();
  console.log("haii");

  const labelText = ["Create initial layout for homepage", "Discussions regarding workflow improvement", "Fixing icons with transparant background", "Create quotation for app redesign project"];
  const spanText = ["Approved","In Progress","In Review", "Waiting"];

  const myList = document.getElementById("my-list");

  // Create label element
  const label = document.createElement('label');
  // Add class
  label.className = 'list';

  const spanLabel = document.createElement('span');
  spanLabel.className = 'status';
  var i = Math.floor(Math.random()*4);
  //console.log(i);

  if(i===0){
	  spanLabel.style.color = '#228B22';
	  spanLabel.style.backgroundColor = '#bcdfc9';
  }
  if(i===2) {
	  spanLabel.style.color = '#ff8c00';
	  spanLabel.style.backgroundColor = '#fed8b1';
  }
  if(i===3) {
	  spanLabel.style.color = '#777777';
	  spanLabel.style.backgroundColor = '#cfcfcf';
  }
  spanLabel.innerHTML = spanText[i];

  // Create text node and append to label
  label.innerHTML = `${labelText[Math.floor(Math.random()*4)]}`;

  const input = document.createElement('input');
  input.type = 'checkbox';

  label.appendChild(input);

  const span = document.createElement('span');
  span.className = 'checkmark';
  span.innerHTML = '';

  label.appendChild(span);
  label.appendChild(spanLabel);

  myList.appendChild(label);

  //console.log(myList);

});
