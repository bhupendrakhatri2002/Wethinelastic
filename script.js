
// var tl =gsap.timeline()
// tl.to(".img1",{
//     opacity:1
// })
// tl.to(".img1",{
//     opacity:0
// })

// tl.to(".img2",{
//     opacity:1
// })
// tl.to(".img2",{
//     opacity:0
// })

// tl.to(".img3",{
//     opacity:1
// })
// tl.to(".img3",{
//     opacity:0
// })

// tl.to(".img4",{
//     opacity:1
// })
// tl.to(".img4",{
//     opacity:0
// })

// tl.to(".img45",{
//     opacity:1
// })
// tl.to(".img45",{
//     opacity:0
// })

// tl.to(".img6",{
//     opacity:1
// })
// tl.to(".img6",{
//     opacity:0
// })

// tl.to(".img7",{
//     opacity:1
// })
// tl.to(".img7",{
//     opacity:0
// })

// tl.to(".img8",{
//     opacity:1
// })
// tl.to(".img8",{
//     opacity:0
// })

// tl.to(".img9",{
//     opacity:1
// })
// tl.to(".img9",{
//     opacity:0
// })

// tl.to(".img10",{
//     opacity:1
// })
// tl.to(".img10",{
//     opacity:0
// })
// tl.to(".img11",{
//     opacity:1
// })
// tl.to(".img11",{
//     opacity:0
// })

var arr = [".img1", ".img2", ".img3", ".img4", ".img45", ".img6", ".img7", ".img8", ".img9", ".img10", ".img11"];
var tl = gsap.timeline();

arr.forEach(element => {
    tl.to(element, {opacity: 1,duration:.1})
      .to(element, {opacity: 0 ,duration:.1});
});

tl.to(".page1",{
    y:-40,
    opacity:1
})

// var clutter = "";

// document.querySelector(".hello>h3").text<Content.split("").forEach(function(dets){
//     clutter += `<h3 class="pg1h3">${dets}</h3>`

//     document.querySelector(".hello>h3").innerHTML =clutter;
// })

// gsap.from(".hello>h3>h3",{
//     y:900,
//     stagger:.2,
//     duration: .8,
//     delay:2
// })

tl.to(".hello span",{
    y:1200,
    // y:900,
    opacity:1,
    duration:.8,
    stagger:.3,
    delay:1
})


gsap.to(".page2>video",{
    width:"100%",
    // duration:1,
    // yoyo:true,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top -40%",
        scrub:1
    }
   
})


gsap.from(".page3 h2",{
    y:1000,
    stagger:.3,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top -80%",
        scrub:true,
        
    }
})


// -------------------page4----------
function page4animation(){
    document.querySelector(".page4 .left .vid2 video").addEventListener("mouseenter",function(){
        gsap.to("video",{
            scale:".95"
        }
    )
    })
    document.querySelector(".page4 .left .vid2 video").addEventListener("mouseleave",function(){
        gsap.to("video",{
            scale:"1"
        }
    )
    })
    
    document.querySelector(".page4 .right .bottom img").addEventListener("mouseenter",function(){
        gsap.to("img",{
            scale:".95"
        }
    )
    })
    document.querySelector(".page4 .right .bottom img").addEventListener("mouseleave",function(){
        gsap.to(".page4 .right .bottom img",{
            scale:"1"
        }
    )
    })
}
page4animation()




// ---------------page8-------------------

gsap.from(".page8 .move",{
    x:1700,
    duration:5,
    scrollTrigger:{
        trigger:".page8",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -1200%",
        pin:true,
        scrub:1,
        repeat:-1
    }
})

gsap.from(".page11 h2",{
    y:1000,
    stagger:.3,
    duration:1,
    delay:4,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".page11",
        start:"top 70%",
        end:"top 30%",
        scrub:1,
    }
})