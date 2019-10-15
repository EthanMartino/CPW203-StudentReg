class Student {
}
let stu = new Student();
stu.firstName = "Ethan";
let fName = stu.firstName;
stu.address = "123 Fake Street";
const birthdateAttr = "data-birthdate";
const addressAttr = "data-address";
const programAttr = "data-program";
window.onload = main;
function main() {
    let regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    let nextStu = getStudentFromForm();
    displayStudent(nextStu);
}
function getStudentFromForm() {
    let tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}
function getInputValue(id) {
    return document.getElementById(id).value;
}
function displayStudent(stu) {
    let newItem = document.createElement("li");
    newItem.innerText = stu.firstName + " " + stu.lastName;
    let displaySection = document.querySelector("#student-list");
    let list = displaySection.querySelector("ul");
    newItem.setAttribute(birthdateAttr, stu.dateOfBirth.toString());
    newItem.setAttribute(addressAttr, stu.address);
    newItem.setAttribute(programAttr, stu.program);
    console.log(newItem);
    newItem.onclick = showStudentData;
    list.appendChild(newItem);
}
function showStudentData() {
    let currListItem = this;
    let name = currListItem.innerText;
    let birthdate = currListItem.getAttribute(birthdateAttr);
    let address = currListItem.getAttribute(addressAttr);
    let program = currListItem.getAttribute(programAttr);
    document.querySelector("#display > h2").innerHTML = name;
    document.querySelector("#display > p").innerHTML = name + " is studying " + program;
}
