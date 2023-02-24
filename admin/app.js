let password = prompt("Please enter password");
if(password=="1234") {
    document.getElementById("loading_screen").style.display="block";
    document.getElementById("preloader").style.display="none";
}
else {
    alert("wrong password")
    window.location.reload();
}
    var html="<tr><th>User info</th><th>Timestamp</th></tr>";
    var name,email,redno,code,t;
    var hjcordiref= firebase.database().ref("userinfo/");
    hjcordiref.on("child_added", function(data){
    var item=data.val();
    console.log(item);
    html+=`<tr>
            <td>
                <ul>
                    <li><span class="lis">Name: &nbsp;</span>${item.name}</li>
                    <li><span class="lis">email: &nbsp;</span>${item.email}</li>
                    <li><span class="lis">Regd. No.: &nbsp;</span>${item['Registration number']}</li>
                    <li><span class="lis">Invitation code: &nbsp;</span>${item['Invitation code']}</li>
                    <li><span class="lis">Time of registration: &nbsp;</span>${item.time}</li>
                </ul>
            </td>
            <td>`
    var pathe= firebase.database().ref("userinfo/"+data.key+"/imgs")
        pathe.on("child_added",function(data){  
            console.log(data.val())
            var inneritem=data.val();
            console.log(inneritem.imgurl)
            console.log(inneritem.timestamp)
                html+=` 
                    <tr>
                        <td>
                        <img src="${inneritem.imgurl}">
                        </td>
                        <td>${inneritem.timestamp}</td>
                    </tr>`
                //})
                

            
        });
        // setTimeout(function(){
            html+="</td></tr>"
        // },7000);
        
    });

    // console.log(html)
    setTimeout(function(){
        console.log()
        document.getElementById("participants").innerHTML += html;
        document.getElementById("loading_screen").style.display="none";
        document.getElementById("container").style.display="block";
    },6000);
    

       

