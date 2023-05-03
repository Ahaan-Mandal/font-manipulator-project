function setup() 
{
    video= createCapture(VIDEO);
    video.size(550,500);

canvas=createCanvas(550,500);
canvas.position(900,150);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw ()
{
    background('#ba8706');   
    textSize(difference);
    fill('#dc0e2b');
    text("Ahaan", 50, 150 );
    document.getElementById("font_size").innerHTML= "Font size of the text will be " + difference + "px";
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results) 
{
if (results.length > 0)
{
    console.log(results);
    left_wristX=results[0].pose.leftWrist.x;
    right_wristX=results[0].pose.rightWrist.x;
    difference = floor(left_wristX - right_wristX);
}
}