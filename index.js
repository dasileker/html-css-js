
var selectedRow = null


let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
   {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
     {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  }
]

// document.getElementById('add').addEventListener("click", function () {
//   window.localStorage.setItem('formData', JSON.stringify(id: ));
//   // insertNewRecord();
// })




function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

static(users);

function static(data){
  var entry = document.getElementById('myTable');

  for (var i = 0; i < data.length; i++){
    var row = `<tr><td>${data[i].id}</td><td>${data[i].createdDate}</td><td>${data[i].status}</td><td>${data[i].firstName}</td><td>${data[i].lastName}</td><td>${data[i].userName}</td><td>${data[i].registrationNumber}</td><td><i  onClick="onDelete(this)" class="fa fa-trash-o" style="font-size:20px;color:red"></td></tr>`

    entry.innerHTML += row;
  }

}
//Retrieve the data
function readFormData() {
    var formData = {};
    formData ["id"] = document.getElementById('ID');
    // id.textContent = Date.now();
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["createdDate"] = document.getElementById("createdDate").value;
    formData["Etat"] = document.getElementById("Etat").value;
    formData["userName"] = document.getElementById("userName").value;
    formData["registrationNumber"] = document.getElementById("registrationNumber").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = `${Date.now()}`;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.createdDate;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Etat;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.firstName;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.lastName;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.userName;
    cell7 = newRow.insertCell((6));
		cell7.innerHTML = data.registrationNumber;
    cell8 = newRow.insertCell((7));
    cell8.innerHTML = `<i  onClick="onDelete(this)" class="fa fa-trash-o" style="font-size:20px;color:red">`;

  
    
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
     document.getElementById("id") = selectedRow.cells[0].innerHTML;
    document.getElementById("createdDate").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Etat").value = selectedRow.cells[2].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[3].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[4].innerHTML;
    document.getElementById("userName").value = selectedRow.cells[5].innerHTML;
    document.getElementById("registrationNumber").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    // selectedRow.cells[0].innerHTML = cell1;
    selectedRow.cells[1].innerHTML = formData.createdDate;
    selectedRow.cells[2].innerHTML = formData.Etat;
    selectedRow.cells[3].innerHTML = formData.firstName;
    selectedRow.cells[4].innerHTML = formData.lastName;
    selectedRow.cells[5].innerHTML = formData.userName;
    selectedRow.cells[6].innerHTML = formData.registrationNumber;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
function resetForm() {
    // document.getElementById("ID").innerHTML = `${Date.now()}`;
    document.getElementById("createdDate").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("Etat").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("userName").value = '';
    document.getElementById("registrationNumber").value = '';
    selectedRow = null;
}

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});

