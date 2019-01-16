var tableBody = document.getElementById('tableBody');
var btnAdd = document.getElementById('add');
var btnUpdate = document.getElementById('update');
var btnDelete = document.getElementById('delete');

function clearInp() {
	$('input').val(""); 
}


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function() {
	var data = JSON.parse(xhr.responseText);
		showAtHTML(data);	
	};	
xhr.send();


function showAtHTML(ourData) {
	let tableRow = "";

	for (var i = 0; i < 20; i++) {
		tableRow += "<tr><td>" + ourData[i].userId + "</td>" + 
					"<td>" + ourData[i].id + "</td>" + 
					"<td>" + ourData[i].title + "</td>" + 
					"<td>" + ourData[i].body + "</td></tr>";		
	}
	
	tableBody.insertAdjacentHTML("afterbegin", tableRow);
}


btnAdd.addEventListener("click", function() {

	var dataToAdd = {};
    dataToAdd[inpUserID.name] = parseInt(inpUserID.value, 10);
    dataToAdd[inpID.name] = parseInt(inpID.value, 10);
    dataToAdd[inpTitle.name] = inpTitle.value;
    dataToAdd[inpBody.name] = inpBody.value;
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(dataToAdd));
	console.log(dataToAdd);

	renderTable(); 

	clearInp();
});

btnUpdate.addEventListener("click", function() { 

	var idToUpdate = document.getElementById('inpUpdID').value;

	var dataToUpdate = {};
    dataToUpdate[inpUpdUserID.name] = parseInt(inpUpdUserID.value, 10);
    dataToUpdate[inpUpdID.name] = parseInt(inpUpdID.value, 10);
    dataToUpdate[inpUpdTitle.name] = inpUpdTitle.value;
    dataToUpdate[inpUpdBody.name] = inpUpdBody.value;

	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/'+ idToUpdate);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify(dataToUpdate));
	console.log(dataToUpdate);
	renderTable();

	clearInp();
});


btnDelete.addEventListener("click", function() { // event to delete fields by id in users

	var idToDelete = parseInt(document.getElementById('inpDel').value, 10);

	var request = new XMLHttpRequest();
	request.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/'+ idToDelete);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();

	renderTable();

	clearInp();
});



function renderTable() { 
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = function() {
	var dataAfterAdd = JSON.parse(xhr.responseText);
		changeHTML(dataAfterAdd);
		console.log(dataAfterAdd);	
	};	
	
	xhr.send();
}


function changeHTML(ourData) { 
	let tableRow = "";

	for (var i = 0; i < 20; i++) {
		tableRow += "<tr><td>" + ourData[i].userId + "</td>" + 
					"<td>" + ourData[i].id + "</td>" + 
					"<td>" + ourData[i].title + "</td>" + 
					"<td>" + ourData[i].body + "</td></tr>";		
	}
	$("#tableBody tr").remove();
	tableBody.insertAdjacentHTML("beforeend", tableRow);
}