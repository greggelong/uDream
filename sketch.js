
let foo, foo1;
let speakButton;
let stops = [];
let r 
let s = 1
let bg
// ll700 possible combinations
// however I have added duplicates of gate and lou and others so they appear more often
function preload(){
  bg = loadImage("bg.jpg")
}

function setup() {
    //const allCombinations = generateCombinations();
    //console.log(allCombinations.length) 
    createCanvas(windowWidth,windowHeight)
    if(windowWidth<windowHeight){
        //width is small
        r = (windowWidth/2)*0.9 
    }else{
        //height is smaller
        r = (windowHeight/2)*0.9
    }
    getStops(12)
    bg.resize(width,height)
    print(stops)
    angleMode(DEGREES)
    frameRate(0.5)
    foo = new p5.Speech(); // speech synthesis object
    foo1 = new p5.Speech();
  //capture = createCaptu
}

function draw(){
    background(255)
    tint(255,100)
    image(bg,0,0)
    
    translate(width/2,height/2)
    noFill()
    stroke(255,180)
    strokeWeight(20)
    ellipse(0,0,r*2)
    let a = 0
    let ainc = 360/stops.length
    for(let i =0;i<stops.length;i++){

        let x = cos(a)*(r)
        let y = sin(a)*(r)
        // circle
        // stroke(255)
        // noFill()
        // ellipse(x,y,20)
        // name//
        noStroke()
        if(i ===s){
            fill(0,100,0)
        }else{
        fill(0)
        }
        textSize(22)
        let c = stops[i].chinese
        let e = stops[i].english

        text(c,x-c.length*10,y)
        text(e,x-e.length*3,y+25)
        a+=ainc;

    }
    // next stop
    textSize(40)
    fill(255,0,0)
    text("下一站",-70,-75)
    
    foo.setLang("zh-CN");
    
    let c = stops[s].chinese
    foo.speak("下一站 ,"+ c)

    let e = stops[s].english

    foo1.setLang("en-US");
    foo1.speak("Next Stop: "+e); 

    
    fill(255,0,0)
    text(c,-c.length*25,45)
    text(e,-e.length*8,100)
    if (frameCount%10==0){
        s++
        s=s%stops.length

    }

}

function getStops(num) {
  // get number of random stops
  // keep adding until you get the number
  while (stops.length < num) {
    let pAdj = random(adj);
    let pNoun = random(nouns);
    let pPlace = random(places);
    // make new object
    let newStop = { 
        chinese: `${pAdj.chinese}${pNoun.chinese}${pPlace.chinese}`, // notice no space for chinese
        pinyin: `${pAdj.pinyin} ${pNoun.pinyin} ${pPlace.pinyin}`, 
        english: `${pAdj.english} ${pNoun.english} ${pPlace.english}`,
    };
    if (!stops.includes(newStop) ){
        stops.push(newStop)
    }
  }
}
