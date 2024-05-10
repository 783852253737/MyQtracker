var selectedRow = null
var studentDataKey =1;
var formData = {};

function onFormSubmit() {
        var formData = readFormData();
        // if (selectedRow == null)
        //     insertNewRecord(formData);
        // else
        //     updateRecord(formData);
        // resetForm();

   saveStudentData(formData);
   readFormData();
}

function readFormData() {
  
    formData["studentname"] = document.getElementById("studentname").value;
    formData["studentemail"] = document.getElementById("studentemail").value;
    formData["studentcontact"] = document.getElementById("studentcontact").value;
    formData["address"] = document.getElementById("address").value;
    formData["education"] = document.getElementById("education").value;
    formData["branch"] = document.getElementById("branch").value;
    formData["yop"] = document.getElementById("yop").value;
    return formData;
}

function resetForm() {
    document.getElementById("studentname").value = "";
    document.getElementById("studentemail").value = "";
    document.getElementById("studentcontact").value = "";
    document.getElementById("address").value = "";
    document.getElementById("education").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("yop").value = "";
    selectedRow = null;
}


function saveStudentData(formData)
{
    localStorage.setItem(studentDataKey,JSON.stringify(formData));
    studentDataKey++;
}