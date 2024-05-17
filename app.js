
function scrollinganimation(){
//scroller animation page 1
let main = document.querySelector(".section1")
let scroller = document.querySelector(".scroller")
//scroller animation page2
let main2 = document.querySelector(".page2")
let scroller2 = document.querySelector(".scroller2")
//scroller animation for black card hover 
let blackcard = document.querySelector(".black")

//moving scroller for first page 
main.addEventListener("mousemove",function(dets){
    gsap.to(scroller,{
        x:dets.x,
        y:dets.y,
        duration:.6,
        ease:"back.out",
        
    })
})
//scrolling on nav bar 
let nav = document.querySelector("nav")
nav.addEventListener("mouseover",function(){
    
    gsap.to(scroller,{
        scale:2,
        backgroundColor:"grey"
        })
})
nav.addEventListener("mouseleave",function(){
    gsap.to(scroller,{
        scale:1,
        backgroundColor:"black"
    })
})

//scrolling on main image
let mainimage= document.querySelector(".mainimg")

mainimage.addEventListener("mousemove",function(dets){
    gsap.to(scroller,{
        scale:2
    })
})
mainimage.addEventListener("mouseleave",function(dets){
    gsap.to(scroller,{
        scale:1
    })
})
//moving scroller for second page
main2.addEventListener("mousemove",function(dets){
    gsap.to(scroller2,{
        x:dets.x,
        y:dets.y,
        duration:.6,
        ease:"back.out",
        
    })
})
main2.addEventListener("mousemove",function(dets){
    gsap.to(scroller2,{
       opacity:2
        
    })
})

//animation on black card hovering
blackcard.addEventListener("mousemove",function(){
    gsap.to(scroller2,{
        backgroundColor:"white"
    })
})
    
blackcard.addEventListener("mouseleave",function(){
    gsap.to(scroller2,{
        backgroundColor:"black"
    })
})
}
function page1animation(){
    let t=gsap.timeline()
    t.from("nav h1",{
        y:-30,
        opacity:0,
        delay:.3,
        duration:.4
    
    })
    t.from("nav h4,nav button",{
        y:-30,
        opacity:0,
        delay:.5,
        duration:.7,
       stagger:.3
    })
    
    
    t.from(".centerpart1 h1",{
        x:-300,
        opacity:0,
        duration:.8
    })
    
    
    t.from(".centerpart1 p",{
        x:-100,
        opacity:0,
        duration:.4
    })
    
    t.from(".centerpart1 button",{
        
        opacity:0,
        duration:.4
    })
    t.from(".centerpart2 img",{
        opacity:0,
        duration:.5
    },"-=0.3")
    
    t.from(".section1bottom img",{
        opacity:0,
        y:30,
        stagger:.15,
        duration:.6
    })
}

function page2animation(){
    let tl2= gsap.timeline({
        scrollTrigger:{
            trigger:".sectionpart2",
            scroller:"body",
           
            start:"top 65%",
            scrub:2,
            end:"top 0",
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:.5,
        
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line3.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.line3.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
}
scrollinganimation()
page1animation()
page2animation()