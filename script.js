function pageanimation1(){
    var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
tl.from(".center1 h1 ",{
    x:-200,
    opacity:0,
    duration:0.5,

})
tl.from(".center1 p",{
    x:-100,
    opacity:0,
    duration:0.5
})
tl.from(".center1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.7")
tl.from(".sectionbottom1 img",{
    y:30,
    opacity:0,
    duration:0.6,
    stagger:0.15,
})
}
pageanimation1()
function pageanimation2(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top 0%",
            scrub:2
    
        }
    })
    tl2.from(".services",{
        y:-40,
        opacity:0,
        duration:0.2,
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1,
    
    },"anim1")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1,
    
    },"anim1")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1,
    
    },"anim2")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1,
    
    },"anim2")
}
pageanimation2()
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:2

    }
})

tl3.from(".container1",{
    y:-30,
    opacity:0,
    duration:0.5,
})
tl3.from(".container1 .part1",{
    x:-100,
    opacity:0,
    duration:1
},"anim4")
tl3.from(".container1 .part2",{
    x:100,
    opacity:0,
    duration:1
},"anim4")
tl3.from(".services1",{
    y:-40,
    duration:0.2,
    opacity:0
})
tl3.from(".cont",{
    opacity:0,
    duration:0.2
})
tl3.from(".cont .box",{
    y:-50,
    opacity:0,
    duration:1
},"anim5")
tl3.from(".cont hr",{
    y:50,
    opacity:0,
    duration:1
},"anim5")

