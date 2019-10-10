class Student {
}
let stu = new Student();
stu.firstName = "Ethan";
let fName = stu.firstName;
stu.address = "123 Fake Street";
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
function displayStudent(s) {
    let newItem = document.createElement("li");
    newItem.innerText = s.firstName + " " + s.lastName;
    document.querySelector("#student-list > ul").appendChild(newItem);
}
