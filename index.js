
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log("hello");
function callvalue(event){


    event.preventDefault();
    console.log("hello lkk");
    var name = document.getElementById("fname").value;
    var email= document.getElementById("email").value;
    var Regno=document.getElementById("number").value;
    var code=document.getElementById("invitation").value;
    var d= new Date();
    var format=d.getDate()+" / "+(d.getMonth()+1)+" / "+d.getFullYear()+" "+(d.getHours())+" : "+(d.getMinutes()+1)+" : "+(d.getSeconds()+1)+" GMT +0530 (Indian Standard Time)";

    var tgref=firebase.database().ref("userinfo/");
    var data={
        "name":name,
        "email":email,
        "registration_number":Regno,
        "invitation_code": code,
        "time": format,
    }
    tgref.push(data).then((res)=>{
    console.log(res.key)
    localStorage.setItem("key",res.key)
        console.log("Data sent successfully!");
        // console.log(res.key)
        window.open("https://amit-mohanty12.github.io/elitmus-camera/camera/camera.html","_self")             
    });    

    console.log(name);
}
const form =document.getElementById("user_form");
form.addEventListener("submit",callvalue,true);




