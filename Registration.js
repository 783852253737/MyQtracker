let username = document.getElementById("username");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let batchcode = document.getElementById("batchcode");
let password = document.getElementById("password");
let password1 = document.getElementById("password1");


 let trackerData={};
function registerTracker()
{
    trackerData.username = username.value;
    trackerData.phone = phone.value;
    trackerData.email = email.value;
    trackerData.batchcode = batchcode.value;
    trackerData.password = password.value;
    trackerData.password1 = password1.value;

    if(password.value!=password1.value)
    {
        alert("Passwords are not matching");
    }else{
        saveData(trackerData);
        open("login.html")
    }

    clearFeilds();

}
function clearFeilds()
{
    username.value="";
    phone.value="";
    email.value="";
    username.value="";
    batchcode.value="";
    password.value="";
    password1.value="";
}

function saveData(trackerData)
{
    localStorage.setItem("trackerInfo",JSON.stringify(trackerData));
}