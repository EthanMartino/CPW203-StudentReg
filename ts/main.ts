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

window.onload = main;

function main():void{
    let regBtn:HTMLButtonElement = document.querySelector("button");
    regBtn.onclick = processForm;
}

function processForm():void{
    let nextStu:Student = getStudentFromForm();
    //displayStudent(nextStu);
    //clearForm();
}

function getStudentFromForm():Student{
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