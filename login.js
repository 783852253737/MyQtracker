let username1 = document.getElementById("username1");
let pass = document.getElementById("pass");

function checkCred()
{
    let trackerData  = getTrackerData();

    if((username1.value==trackerData.username) && (pass.value==trackerData.password)){
        open("homepage.html");
    }else{
        alert("WRONG CREDENTIALS")
    }
}

function getTrackerData()
{
   let trackerInfo =  localStorage.getItem("trackerInfo");

    return JSON.parse(trackerInfo);
}