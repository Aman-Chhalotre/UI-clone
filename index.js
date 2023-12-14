let menu = document.getElementById('menu')
let close = document.getElementById('close')
menu.addEventListener('click',()=>{

    let upperContent = document.getElementById("menu-upperContent")
    let middleContent = document.getElementById("menu-middleContent")
    let lowerContent = document.getElementById("menu-lowerContent")
    upperContent.style.visibility = 'visible';
    middleContent.style.visibility = 'visible';
    lowerContent.style.visibility = 'visible';
    lowerContent.style.transition = 'all linear';
    gsap.to('#menu-content',{
        height:"70vh",
        duration:1
    }),gsap.from('#menu-upperContent',{
        y:50,
        duration:1,
    }),gsap.from("#menu-middleContent div h1" ,{
        y:50,
        opacity:0,
        duration:0.5,
        stagger:0.1,
        
    }),gsap.from("#menu-lowerContent h4",{
        x:50,
        opacity:0,
        duration:0.5,
        delay:1,
        stagger:0.1,
    })
})

close.addEventListener('click',()=>{
    let menuContent = document.getElementById("menu-content")
    let upperContent = document.getElementById("menu-upperContent")
    let middleContent = document.getElementById("menu-middleContent")
    let lowerContent = document.getElementById("menu-lowerContent")
    upperContent.style.visibility = 'hidden';
    middleContent.style.visibility = 'hidden';
    lowerContent.style.visibility = 'hidden';
    lowerContent.style.transition = 'all linear';
    gsap.to(menuContent,{
        height:0,
        duration:1
    })
})


function locoScroll(){
    
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

function homeAnimation(){
    
    gsap.from("#blackscreen h2 ",{
        delay:2,
        opacity:0,
        x:50,
        duration:1,
        stagger:0.2,
    })
    gsap.to("#blackscreen h2 span",{
        delay:4,
        opacity:0,
        x:-50,
        duration:0.8,
        stagger:0.1,
    })
    gsap.to("#blackscreen",{
        display:"none",
        opacity:0,
        duration:0.8,
        delay:5,
        
    })
        
}
homeAnimation()

function cursorEffect(){
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector('#cursor')

page1Content.addEventListener("mousemove", function(value){
    gsap.to(cursor,{
        x: value.x,
        y: value.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}
cursorEffect()

function page1Animation(){
    gsap.from("#rejouice span",{
        y:100,
        duration:1,
        stagger:0.1,
        delay:4.5
    })
    gsap.from("nav",{
        x:100,
        duration:1,
        stagger:0.1,
        delay:4.5
    })
}
page1Animation()

function page2Animation(){
    
        gsap.from("#page2-upperText h2 span",{
            y:30,
            duration:1,
            stagger:0.2,
            scrollTrigger:{
                trigger:"#page-2",
                scroller :"#main",
                start:"top 90%",
                end: "top 10%",
                markers: false,
                scrub:1
            }
        }),gsap.from("#page2-text h1 span",{
            y:60,
            duration:1,
            stagger:0.1,
            scrollTrigger:{
                trigger:"#page-2",
                scroller :"#main",
                start:"top 50%",
                end: "top 0%",
                markers: false,
                scrub:2
            }
        }),
        gsap.from('#line',{
            width:0,
            duration:2,
            scrollTrigger:{
                trigger:"#page-2",
                scroller :"#main",
                start:"top 70%",
                end: "top 60%",
                markers: false,
                scrub:5
            }
        })
}
page2Animation()

function page3Animation(){
    gsap.from("#page3-content h1 span",{
        y:80,
        // opacity:0,
        duration:1,
        stagger:0.1,
        scrollTrigger:{
            trigger:"#page-3",
            scroller :"#main",
            start:"top 120%",
            end: "top 0%",
            markers: false,
            scrub:1
        }
})
}
page3Animation()

function page5Animation(){
    gsap.from('#page5-upperText h2 span',{
        y:30,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page-5",
            scroller :"#main",
            start:"top 90%",
            end: "top 0%",
            markers: false,
            scrub:1
        }
    }),gsap.from('#page5-lowerText h1 span',{
            y:60,
            duration:1,
            stagger:0.1,
            scrollTrigger:{
                trigger:"#page-5",
                scroller :"#main",
                start:"top 60%",
                end: "top 0%",
                markers: false,
                scrub:2
            }
    }),gsap.from('#page5-line',{
        width:0,
        duration:2,
        scrollTrigger:{
            trigger:"#page-5",
            scroller :"#main",
            start:"top 70%",
            end: "top 60%",
            markers: false,
            scrub:5
        }
    })
}
page5Animation()

// function page6Cursor(){

//         var Video = document.querySelector("#page6-content video")
//         var page6Cursor = document.querySelector('#page6-cursor')
    
//         Video.addEventListener("mousemove", function(value){
//         gsap.to(page6Cursor,{
//             x: value.x,
//             y: value.y
//         })
        
//     })
    
//     Video.addEventListener("mouseenter",function(){
//         gsap.to(page6Cursor,{
//             scale:1,
//             opacity:1
//         })
//     })
//     Video.addEventListener("mouseleave",function(){
//         gsap.to(page6Cursor,{
//             scale:0,
//             opacity:0
//         })
//     })
// }
// page6Cursor()
function page7Animation(){
    gsap.from("#page7-upperText h2 span",{
        y:30,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page-7",
            scroller :"#main",
            start:"top 90%",
            end: "top 10%",
            markers: false,
            scrub:1
        }
    }),gsap.from("#page7-lowerText h1 span",{
        y:60,
        duration:1,
        stagger:0.1,
        scrollTrigger:{
            trigger:"#page-7",
            scroller :"#main",
            start:"top 50%",
            end: "top 0%",
            markers: false,
            scrub:2
        }
    }),gsap.from('#page7-line',{
        width:0,
        duration:2,
        scrollTrigger:{
            trigger:"#page-7",
            scroller :"#main",
            start:"top 70%",
            end: "top 60%",
            markers: false,
            scrub:5
        }
    })
}
page7Animation()

function page8Animation(){

    new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });
}
page8Animation()

function page9Animation(){
    gsap.from("#page9-content h1 span",{
        y:70,
        duration:1,
        stagger:0.1,
        scrollTrigger:{
            trigger:"#page-9",
            scroller :"#main",
            start:"top 100%",
            end: "top 0%",
            markers: false,
            scrub:1
        }
})
}
page9Animation()

function footerAnimatin(){
    gsap.from("#footer-rejouice span",{
        y:-100,
        duration:3,
        stagger:0.5,
        scrollTrigger:{
            trigger:"footer",
            scroller :"#main",
            start:"center 80%",
            end: "center 50%",
            markers: false,
            scrub:4
        }
    })
}
footerAnimatin()