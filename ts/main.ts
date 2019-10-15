/**
 * Represents a College Student
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;

    /**
     * The full address of the student.
     * Street, City, State, Zip
     */
    address:string;

    /**
     * The Program of study
     */
    program:string;

    /*
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }
    */
}


//THIS IS TEST CODE
let stu:Student = new Student();
stu.firstName = "Ethan"; // SET
let fName:string = stu.firstName; //GET
stu.address = "123 Fake Street";

const birthdateAttr:string = "data-birthdate";
const addressAttr:string = "data-address";
const programAttr:string = "data-program";


//Actual Code
window.onload = main;

function main():void{
    let regBtn:HTMLButtonElement = document.querySelector("button");
    regBtn.onclick = processForm;
}

function processForm():void{
    let nextStu:Student = getStudentFromForm();
    displayStudent(nextStu);
    clearForm();
}

function clearForm(){
    /////Resets whole form\\\\\\
    //let regForm:HTMLFormElement = document.querySelector("reg-form");
    //regForm.reset();

    let allTextBoxes:NodeListOf<HTMLInputElement> = document.querySelectorAll("form input[type=text]");

    //////Traditional for loop\\\\\\\
    // for (let i = 0; i < allTextBoxes.length; i++) {
    //     let currBox:HTMLInputElement = allTextBoxes[i];
    //     currBox.value = "";
    // }

    //////for-of loop\\\\\\
    for (let currBox of allTextBoxes) {
        currBox.value = "";
    }
}

function getStudentFromForm():Student{
    //Create a new student object from the inputs in the form
    let tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");

    console.log(tempStu);
    return tempStu;
}

function getInputValue(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;
}

function displayStudent(stu:Student):void{
    //Create new <li>
    let newItem:HTMLLIElement = document.createElement("li");
    //Get firstName and lastName properties from s Student object 
    //and put them into the newly created <li>
    newItem.innerText = stu.firstName + " " + stu.lastName;
    let displaySection = document.querySelector("#student-list");
    let list = displaySection.querySelector("ul");

    //Embed Student data in <li>
    newItem.setAttribute(birthdateAttr, stu.dateOfBirth.toString());
    newItem.setAttribute(addressAttr, stu.address);
    newItem.setAttribute(programAttr, stu.program);

    console.log(newItem);

    newItem.onclick = showStudentData;

    //Put the new <li> in the <ul> in the student-list <div>
    list.appendChild(newItem);
}

/**
 * Shows Certain student data when <li> is clicked
 */
function showStudentData():void{
    //console.log(this);
    let currListItem = <HTMLLIElement>this;
    let name:string = currListItem.innerText;
    let birthdate:string = currListItem.getAttribute(birthdateAttr);
    let address:string = currListItem.getAttribute(addressAttr);
    let program:string = currListItem.getAttribute(programAttr);

    //Display Student under the list of students
    document.querySelector("#display > h2").innerHTML = name;
    document.querySelector("#display > p").innerHTML = name + " is studying " + program; 
}