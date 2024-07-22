let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let age = document.getElementById("age")
let cell = document.getElementById("cell")
let submit = document.getElementById("submit")
let tableborder = document.getElementById("tableborder")
let studentform = document.getElementById("studentform")
let tablebox = document.getElementById("tablebox")
let qualification = document.getElementById("qualification")

var table = document.createElement("table");
var tabletop = document.createElement("thead");
var tablerow = document.createElement("tr");

tablerow.innerHTML = `
<th class ="top"> Name</th>
<th class ="top">Father's name</th>
<th class ="top"> Age</th>
<th class ="top">Qualification</th>
<th class ="top"> Cell no</th>
<th class ="top"> Roll no</th> 
`;
tabletop.appendChild(tablerow)
table.appendChild(tabletop)
var tablebody = document.createElement("tbody");
table.appendChild(tablebody);
tablebox.appendChild(table);

var rollno= Math.floor(Math.random()*1000000)
console.log(rollno);
submit.addEventListener("click", function(){
  if(fname.value == "" || lname.value == "" ||age.value == "" || cell.value == "" || qualification.value==""){
    alert("Please fill all the details")
    rollno.style.display = "none"
  }  
  var getdata = JSON.parse(localStorage.getItem("alldata")) || [];
  var childdata = {
    fname: fname.value,
    lname: lname.value,
    // qualification:qualification.value,
    age: age.value,
    cell: cell.value,
    rollno: Math.floor(Math.random()*1000000)
  }
  getdata.push(childdata);
  localStorage.setItem("alldata" , JSON.stringify(getdata));

tablebody.innerHTML = ""
for(i=0; i<getdata.length; i++){

var tablerow = document.createElement("tr");
  tablerow.innerHTML = `
  <td class = tabledata">${getdata[i].fname}</td> 
    <td class = tabledata">${getdata[i].lname}</td>
      <td class = tabledata">${getdata[i].age}</td>
         <td class = tabledata">${getdata[i].qualification}</td>
      <td class = tabledata">${getdata[i].cell}</td>  
        <td class = tabledata">${getdata[i].rollno}</td>`;

    tablebody.appendChild(tablerow); 

fname.value = ""
lname.value = ""
age.value = ""
qualification = ""
cell.value = ""
}
})

let add = document.getElementById("add");

add.addEventListener("click" , function(){
    tableborder.style.display = "none"
    studentform.style.display = "block"
    add.style.display = "none"

    fname.value = "";
    lname.value = "";
    age.value = "";
    cell.value = "";
    qualification.value = "";
})

let remove = document.getElementById("delete")

remove.addEventListener("click" , function(){ 
    localStorage.removeItem()
})

