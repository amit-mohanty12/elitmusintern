const video = document.querySelector('#video')
const btn = document.querySelector('#btn')
const canvas =  document.querySelector('#canvas')

if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true })
    .then(stream => {
        video.srcObject = stream
        setInterval(takePicture,15000)
    })
    .catch(error => {
        console.log('An error occured while accessing webcam.')
    })
}

const takePicture=() => {
    // get intrinsic width and height of the video element
    const width = video.videoWidth, height = video.videoHeight

    const context = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height

    context.drawImage(video, 0, 0, width, height)

    const imgURL = canvas.toDataURL('image/png')
    console.log(imgURL)
    var d= new Date();
    var format=d.getDate()+" / "+(d.getMonth()+1)+" / "+d.getFullYear()+" "+(d.getHours())+" : "+(d.getMinutes()+1)+" : "+(d.getSeconds()+1)+" GMT +0530 (Indian Standard Time)";

    var tgref=firebase.database().ref(`userinfo/${localStorage.getItem('key')}/imgs`);
    var data={
        imgurl:imgURL,
        timestamp:format
    }
    tgref.push(data).then((res)=>{
        
        console.log("photo send",res)
    })


}