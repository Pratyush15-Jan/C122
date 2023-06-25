function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);
    fill("red");
    stroke("green");
    circle(20,20,35);
    rect(10,38,20,330);
    circle(20,385,35);
    rect(38,375,330,20);
    circle(385,385,35);
    rect(375,40,20,330);
    circle(385,20,35);
    rect(38,10,330,20);
}
function take_snapshot() {
    save('My Image Filter.jpg');
}