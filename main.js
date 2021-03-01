Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'">';
    })
}
console.log("ml5 Version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3YnucW_XB/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function check(){
    img=document.getElementById("image");
    classifier.classify(img,getresult);
}
function getresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}