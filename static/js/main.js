

// module aliases
var Engine = Matter.Engine;

World = Matter.World;
Bodies = Matter.Bodies;
Constraints = Matter.Constraint;

var boxes = [];
var circles = [];
var world;

var boxBod;
var circleBod;

var conCount = 0;

var wallLeft;
var wallRight;
var canvHeight;

var stillAliveSong;
var bohemianSong;
var harderSong;

var colorB = [];
var boxAmounti;
var boxAmount;

var amp;


function preload(){
	soundFormats('ogg','mp3');
	stillAliveSong = loadSound( 'static/js/assets/stillAlive.mp3');
	bohemianSong = loadSound( 'static/js/assets/bohemian.mp3');
	harderSong = loadSound(	'static/js/assets/harder.mp3');
}


function setup(){
	canvHeight = innerHeight-90
	createCanvas(innerWidth,canvHeight);

	amp = new p5.Amplitude();

	// create an engine
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	wallLeft = Bodies.rectangle(0,innerHeight/2,20,innerHeight, { isStatic: true });
	wallRight = Bodies.rectangle(innerWidth,innerHeight/2,20,innerHeight, { isStatic: true });
	World.add(world, wallLeft);
	World.add(world, wallRight);

	boxAmount = 1;

}

function stillAlive(){
	if (!stillAliveSong.isPlaying()){
		stillAliveSong.play();
	} else {
		stillAliveSong.pause();
	}

}
function bohemian(){
	if (!bohemianSong.isPlaying()){
		bohemianSong.play();
	} else {
		bohemianSong.pause();
	}

}

function harder(){
	if (!harderSong.isPlaying()){
		harderSong.play();
	} else {
		harderSong.pause();
	}

}


function draw(){

	background(0,0,0);

	fill(170);
	rectMode(CENTER);
	rect(0,innerHeight/2,20,innerHeight);
	rect(innerWidth,innerHeight/2,20,innerHeight);

	var vol = amp.getLevel();

	boxAmount = Math.round(map(vol, 0, 0.5, 0, 5));
	var bump = map(vol, 0, 0.5, 20, width);

	boxAmounti = 0;
	for (boxAmounti = 0; boxAmounti < boxAmount; boxAmounti++){
		boxes.push(new Box(bump*2.5-200,0,20,20));
	}


	boxes.map(function(curr, i){
			colorB[0] = random(0,100);
			colorMode(HSB,100)
			fill(colorB[0],100,100);
    	curr.showB();
			if (curr.isOffScreen()){
				World.remove(world, curr.body);
				boxes.splice(i ,1);
				i--;
			}
  	})


}
