// hides all screens except for screen 1
// Change to view an indiviudal screen
$("section:gt(0)").hide();

////GLOBAL VARS////////////////
// set initial screen number
let screenNum = 1;
// transition transDuration
let transDuration = 1;
// delay for starting screen animations
// initially set to 3s to allow the preloader to show and then updated in loadScreen1
let transDelay = 3;

// hide/show navigation functions
function hideNav() {
    gsap.to(".next",{
        duration: 0.25,
        right: -100,
        ease: "Power2.easeInOut"
    });

    gsap.to(".prev",{
        duration: 0.25,
        left: -100,
        ease: "Power2.easeInOut"
    });
}

function showNav() {

    gsap.to(".next",{
        duration: 0.25,
        right: 65,
        ease: "Power2.easeInOut"
    });

    gsap.to(".prev",{
        duration: 0.25,
        left: 20,
        ease: "Power2.easeInOut"
    });

}

// next and previous navigation functions
function showNextScreen()
{
    //target for the current screen
    let currentScreen = "#screen" + screenNum;
    // "#screen1"

    //add 1 to the screenNum
    // screenNum = screenNum + 1;
    screenNum++;

    //target for the next screen
    let nextScreen = "#screen" + screenNum;
    // "#screen2"

    //hide nav
    hideNav();

    //transition to current screen away
    gsap.fromTo(currentScreen, {
        duration: transDuration,
        x: 0
    },{
        duration: transDuration,
        delay: 0.5,
        x: -960,
        ease: "Power2.easeInOut"
    });

    //show next screen
    $(nextScreen).show();

    //transition next screen in
    gsap.fromTo(nextScreen,{
        duration: transDuration,
        x: 960
    },{
        duration: transDuration,
        delay: 0.5,
        x: 0,
        ease: "Power2.easeInOut",
        onComplete: function(){
            //hide current (prev) screen
            $(currentScreen).hide();
            //show nav
            showNav();
        }
    });

    // load the function that will animate screen contents
    window["loadScreen" + screenNum]();

    // pause the voice over when switching screens
    $("#voiceover").trigger("pause");
}

function showPrevScreen()
{
    //target for the current screen
    let currentScreen = "#screen" + screenNum;
    // "#screen2"

    //subtract 1 to the screenNum
    // screenNum = screenNum - 1;
    screenNum--;

    //target for the prev screen
    let prevSreen = "#screen" + screenNum;
    // "#screen1"

    //hide nav
    hideNav();

    //transition the current screen away
    gsap.fromTo(currentScreen,{
        duration: transDuration,
        x: 0
    },{
       duration: transDuration,
       delay: 0.5,
       x: 960,
       ease: "Power2.easeInOut"
    });

    //show prev screen
    $(prevSreen).show();
    //transition on the prev screen
    gsap.fromTo(prevSreen,{
        duration: transDuration,
        x: -960
    },{
       duration: transDuration,
       delay: 0.5,
       x: 0,
       ease: "Power2.easeInOut",
       onComplete: function(){
           //hide current (prev) screen
           $(currentScreen).hide();
           //show the nav
           showNav();
       }
    });

    // load the function that will animate screen contents
    window["loadScreen" + screenNum]();

    // pause the voice over when switching screens
    $("#voiceover").trigger("pause");
}

// next and previous button clicks
$('.next').click(showNextScreen);
$('.prev').click(showPrevScreen);

// LOADING SPECIFIC SCREEN VOICEOVER
function loadScreenAudio(){
    //set the src for #voiceover to the current screen number
    //                         "audio/screen2.mp3"
    $("#voiceover").attr("src", "audio/screen" + screenNum + ".mp3");
    //start audio at volume 0
    $("#voiceover").prop("volume", 0);
    //play voice over
    $("#voiceover").trigger("play");
    //animate volume of voice over
    $("#voiceover").animate({volume: 1}, 500);

}


// SET UP MAIN INTERFACE ///////////////////////////////////////
// fade on main div on page load and hide loading gif
gsap.from("main",{
    duration: transDuration,
    delay: transDelay -2.5,
    y: $(window).height(),
    ease: "Back.easeOut",
    onComplete: function(){
        $("#loading").hide();
    }
});

//BACKGROUND AUDIO CONTROLS
$("#playPause").click(function(){

    if ($(this).hasClass("play")){
        //start music
        $("#background").prop("volume", 0); //start music at 0 volume
        $("#background").trigger("play");  //start music
        $("#background").animate({volume: 0.05}, 2000); //fades on volume

        //change class to pause
        $(this).removeClass("play").addClass("pause");
    }else{
        //pause music
        $("#background").trigger("pause");

        //change class to play
        $(this).removeClass("pause").addClass("play");
    }


});

//sound effects functions for reusability
function playPop1(){
    $("#pop1").trigger("play");
}
function playPop2(){
    $("#pop2").trigger("play");
}
function playSwoosh1(){
    $("#swoosh1").trigger("play");
}
function playSwoosh2(){
    $("#swoosh2").trigger("play");
}


// functions for loading on content of each screen
/////////////////////////////////////////////////////// LOAD SCREEN 1//////////////////////////////////////////////////////////////////////////////////////
function loadScreen1()
{
    gsap.from("#circle1", {duration: 0.2, delay: .20, scale: 0, ease: "easeInOut"})
    gsap.from("#circle2", {duration: 0.5, delay: .60, scale: 0, ease: "easeInOut"})
    gsap.from("#circle3", {duration: 0.8, delay: 1, scale: 0, ease: "easeInOut"})
    gsap.from("#circle4", {duration: 1.3, delay: 1.30, scale: 0, ease: "easeInOut"})
    gsap.from("#circle5", {duration: 1.7, delay: 1.60, scale: 0, ease: "easeInOut"})
    gsap.from("#circle6", {duration: 2.4, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#ship", {duration: 2.4, delay: transDelay, opacity: 0, ease: "Power.easeOut"})
    gsap.from("#plane1", {duration: 2.4, delay: transDelay, opacity: 0, ease: "Power.easeOut"})
    gsap.from("#car1", {duration: 2.4, delay: transDelay, opacity: 0, ease: "Power.easeOut"})
}

// animate on content of screen 1 on page load
loadScreen1()

/////////////////////////////////////////////////////////////// LOAD SCREEN 2 /////////////////////////////////////////////////////////////////////////////
function loadScreen2()
{
    gsap.from("#earth2", {duration: 0.2, delay: 1, scale: 0, ease: "easeOut"})
    gsap.from("#line1", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#line2", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#line3", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from(".circl1", {duration: 0.6, delay: 2.6, scale: 0, ease: "easeOut"})
    gsap.from(".circl2", {duration: 0.6, delay: 2.9, scale: 0, ease: "easeOut"})
    gsap.from(".circl3", {duration: 0.6, delay: 3.2, scale: 0, ease: "easeOut"})

}


///////////////////////////////////////////////////////////////////// LOAD SCREEN 3 ////////////////////////////////////////////////////////////////////////
function loadScreen3()
{
    // animate content on with delays
    gsap.from("#car2",{
        duration: 3,
        delay: 3 ,
        opacity: 0,
        left:-300,

    })

    gsap.from("#tree1", {duration: 0.8, delay: 1, scale: 0, ease: "easeInOut"})
    gsap.from("#tree2", {duration: 0.8, delay: 1, scale: 0, ease: "easeInOut"})
    gsap.from("#stop", {duration: 0.7, delay: 3.1, scale: 0, ease: "easeInOut"})
    gsap.from("#li1", {duration: 0.6, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#ci1", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#clouds1", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#clouds2", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#clouds3", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#clouds4", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#clouds5", {duration: 0.5, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#ri1", {duration: 0.4, delay: 2, scale: 0, ease: "easeOut"})
    gsap.from("#raincloud1", {duration: 0.2, delay: .5, scale: 0, ease: "Power2.easeInOut"})
    gsap.from("#raincloud2", {duration: 0.2, delay: .5, scale: 0, ease: "Power2.easeInOut"})
    gsap.from("#road1", {duration: 0.2, delay: .5, scale: 0, ease: "easeOut"})
    gsap.from("#uline1", {duration: 3, delay: 3, scale: 0, ease: "easeOut"})

    gsap.from("#carcloud1", {duration: 3, delay: 3, opacity: 0, left:- 300, })
     gsap.from("#carcloud2", {duration: 3, delay: 3, opacity: 0, left:- 300, })
     gsap.from("#carcloud3", {duration: 3, delay: 3, opacity: 0, left:- 300, })



    $("#ele6").hover(function(){ //hoverIn
        gsap.to("#ele6",{
            duration: 0.5,
            width: 200,
            height: 200,
        });

        //play swoosh when mouse enters
        playSwoosh1();

        gsap.to("#ele6content",{
            duration: 0.5,
            delay: 0.5,
            opacity: 1
        });
    }, function(){//hoverOut
        gsap.to("#ele6content",{
            duration: 0.25,
            opacity: 0
        });

        //play swoosh when mouse leaves
        playSwoosh2();

        gsap.to("#ele6",{
            duration: 0.5,
            delay: 0.2,
            width: 100,
            height: 100,
        });
    });

    // load voiceover for screen3
    gsap.delayedCall(transDelay + 0.5, loadScreenAudio);

}

//////////////////////////////////////////////////////////////// LOAD SCREEN 4 ////////////////////////////////////////////////////////////////////////////
function loadScreen4()
{
    // animate content on with delays


    function showNumber(currentBar){
        //"#bar2 p"
        gsap.fromTo(currentBar + " p",{
            delay: 0.75,
            duration: 0.5,
            marginTop: 0
        },{
            opacity: 1,
            marginTop: -20
        })
    }

    //bargraph click
    $("#ele7").click(function(){

        //play pop
        playPop1();

        //check if already clicked
        if ($(this).attr("data-click-state") == 1){
            //do nothing
        }else{
            //add click state attribute
            $(this).attr("data-click-state", 1);
            //animation for bars
            //animate each one by one



        }
    });

    // load voiceover for screen4
    gsap.delayedCall(transDelay + 0.5, loadScreenAudio);
}

//////////////////////////////////////////////////////////////// LOAD SCREEN 5////////////////////////////////////////////////////////////////////////////
function loadScreen5()
{
    // animate content on with delays
    gsap.from("#ele8",{
        duration: 1,
        delay: transDelay,
        scale: 0,
        rotate: -800,
        ease: "Power2.easeInOut"
    })

     gsap.from("#plane2", {
         duration: 3,
         delay: 3,
         opacity: 0,
         left:600, })


     gsap.from("#car3", {
         duration: 3,
         delay: 2,
         opacity: 0,
         right:-200, })

    gsap.from("#car4", {
         duration: 3,
         delay: 1,
         opacity: 0,
         right:-200, })

    gsap.from("#road2", {duration: 0.8, delay: .5, scale: 0, ease: "easeOut"})

    gsap.from("#a1", {duration: 3, delay: 2,  opacity: 0,   })
    gsap.from("#a2", {duration: 3, delay: 2.4, opacity: 0,  })
    gsap.from("#a3", {duration: 3, delay: 2.8, opacity: 0,  })
    gsap.from("#a4", {duration: 3, delay: 3.2, opacity: 0,  })
    gsap.from("#a5", {duration: 3, delay: 3.6, opacity: 0, })




    // load voiceover for screen3
    gsap.delayedCall(transDelay + 0.5, loadScreenAudio);
}

// LOAD SCREEN 6 ///////////////////////////////////////////////
function loadScreen6()
{
    // animate content on with delays
    gsap.from("#ele10", {
        duration: 0.5,
        delay: transDelay,
        opacity: 0,
        ease: "Power2.easeInOut",
        onComplete: function(){

            gsap.to("#ele10", {
                duration: 1,
                rotate: 360,
                repeat: -1, //-1 = forever
                ease: "Power2.easeInOut"
            })

        }
    });

    gsap.fromTo("#ele11", {
        opacity: 0,
    },{
        duration: 0.5,
        delay: transDelay,
        opacity: 1,
        rotate: -45,
        ease: "Power2.easeInOut",
        onComplete: function(){

            gsap.fromTo("#ele11", {
                rotate: -45
            },{
                rotate: 45,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "Power2.easeInOut"
            })

        }
    });

    // load voiceover for screen3
    gsap.delayedCall(transDelay + 0.5, loadScreenAudio);

}

// screen2

const circl1 = document.querySelector(".circl1");
const circle1text = document.querySelector(".circle1text");
circl1.addEventListener("mouseover", showcircle1text );

function showcircle1text() {
    circle1text.classList.add("show");
}

const circl2 = document.querySelector(".circl2");
const circle2text = document.querySelector(".circle2text");
circl2.addEventListener("mouseover", showcircle2text );

function showcircle2text() {
    circle2text.classList.add("show");
}


const circl3 = document.querySelector(".circl3");
const circle3text = document.querySelector(".circle3text");
circl3.addEventListener("mouseover", showcircle3text );

function showcircle3text() {
    circle3text.classList.add("show");
}

// screen4
const stopBtn = document.querySelector(".stopclick");
const llinevisibility = document.querySelector(".llinevisibility");
const rlinevisibility = document.querySelector(".rlinevisibility");
const ulinevisibility = document.querySelector(".ulinevisibility");
const gasesvisibility = document.querySelector(".gasesvisibility");
const gas1 = document.querySelector(".gas1");
const gas2 = document.querySelector(".gas2");
const gas3 = document.querySelector(".gas3");
const sunray = document.querySelector(".sunray");

stopBtn.addEventListener("click", showscreen3);

function showscreen3() {
    llinevisibility.classList.add("show");
    rlinevisibility.classList.add("show");
    ulinevisibility.classList.add("show");
    gasesvisibility.classList.add("show");
    gas1.classList.add("show");
    gas2.classList.add("show");
    gas3.classList.add("show");
    sunray.classList.add("show");
}

const questionclick = document.querySelector(".questionclick");
const pie1 = document.querySelector(".pie1");
const piep1 = document.querySelector(".piep1");
const pie2 = document.querySelector(".pie2");
const piep2 = document.querySelector(".piep2");
const pie3 = document.querySelector(".pie3");
const piep3 = document.querySelector(".piep3");

questionclick.addEventListener("click", showpie);
function showpie() {
    pie1.classList.add("show");
    pie1.classList.remove("hidden");
    piep1.classList.add("show");
    piep1.classList.remove("hidden");
    pie2.classList.add("show");
    pie2.classList.remove("hidden");
    piep2.classList.add("show");
    piep2.classList.remove("hidden");
    pie3.classList.add("show");
    pie3.classList.remove("hidden");
    piep3.classList.add("show");
    piep3.classList.remove("hidden");
  }

// screen5
const a1click = document.querySelector(".a1click");
const a1text = document.querySelector(".a1text");

a1click.addEventListener("click", showa1text);

function showa1text() {
  a1text.classList.remove("hidden");
  a1text.classList.add("show");
}

const a2click = document.querySelector(".a2click");
const a2text = document.querySelector(".a2text");

a2click.addEventListener("click", showa2text);

function showa2text() {
  a2text.classList.remove("hidden");
  a2text.classList.add("show");
}

//

const a3click = document.querySelector(".a3click");
const a3text = document.querySelector(".a3text");

a3click.addEventListener("click", showa3text);

function showa3text() {
  a3text.classList.remove("hidden");
  a3text.classList.add("show");
}

const a4click = document.querySelector(".a4click");
const a4text = document.querySelector(".a4text");

a4click.addEventListener("click", showa4text);

function showa4text() {
  a4text.classList.remove("hidden");
  a4text.classList.add("show");
}

const a5click = document.querySelector(".a5click");
const a5text = document.querySelector(".a5text");

a5click.addEventListener("click", showa5text);

function showa5text() {
  a5text.classList.remove("hidden");
  a5text.classList.add("show");
}
