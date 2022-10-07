console.log('js file connected successfully');

const ride_button =  document.querySelector("#ride");
ride_button.addEventListener("click",()=>{
    const ride = new Audio ();
    ride.src = "assets/ride.wav";
    ride.play();
})

//Stores the element described with ID 'ride' into a constant called ride_button.
//Makes this button an event listener (i.e a function is carried out if the button is interacted with in a specified way)
//'new' keyword is used to create an instance of an object that has a constructor function (i.e a new empty object is created)
//'Audio' creates and returns a new HTMLAudioElement object
//the src attribute specifies the URL of an external script file.


const crash_button =  document.querySelector("#crash");
crash_button.addEventListener("click",()=>{
    const crash = new Audio ();
    crash.src = "assets/crash.wav";
    crash.play();
})


const hihat_button =  document.querySelector("#hihat");
hihat_button.addEventListener("click",()=>{
    const hihat = new Audio ();
    hihat.src = "assets/hi-hat.wav";
    hihat.play();
})


const med_tom_button =  document.querySelector("#med_tom");
med_tom_button.addEventListener("click",()=>{
    const med_tom = new Audio ();
    med_tom.src = "assets/medium-tom.wav";
    med_tom.play();
})


const high_tom_button =  document.querySelector("#high_tom");
high_tom_button.addEventListener("click",()=>{
    const high_tom = new Audio ();
    high_tom.src = "assets/high-tom.wav";
    high_tom.play();
})


const floor_button =  document.querySelector("#floor");
floor_button.addEventListener("click",()=>{
    const floor = new Audio ();
    floor.src = "assets/floor-tom.wav";
    floor.play();
})


const snare_button =  document.querySelector("#snare");
snare_button.addEventListener("click",()=>{
    const snare = new Audio ();
    snare.src = "assets/snare.wav";
    snare.play();
})


const bass_button =  document.querySelector("#bass");
bass_button.addEventListener("click",()=>{
    const bass = new Audio ();
    bass.src = "assets/bass-drum.wav";
    bass.play();
})