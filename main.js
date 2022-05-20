nosex=0;
nosey=0;
difference=0;
rwristx=0;
lwristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 450);
    canvas.position(560, 100);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gtposes);
}

function draw(){
background('#D4F3FA');
document.getElementById("square").innerHTML="width and height of the square will be: "+difference+"px";
fill('#AE621F');
textSize(difference);
text('Aanya', 50, 400)

}

function modelloaded(){
    console.log("model is loaded");
}

function gtposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey="+nosey);

        lwristx=results[0].pose.leftWrist.x;
        rwristx=results[0].pose.rightWrist.x;
        difference=floor(lwristx-rwristx);
        console.log("lwristx="+lwristx+"rwristx="+rwristx+"difference="+difference);

    }
}