document.addEventListener('DOMContentLoaded',()=>{
    animate();
    console.log("working")
})

animate = ()=>{
    var tl = gsap.timeline(
        {
            scrollTrigger:{
                duration:2,
                trigger:".intro",
                markers:true,
                start:"top mid",
                end:"+=10000",
                scrub:true
            }
        }
    )

    tl.from(".intro",{
        opacity:0
    })
    tl.from(".introt",{
        opacity:0
    })
    tl.from(".mid",{
        opacity:0
    })
    tl.from(".midt",{
        opacity:0
    })
    tl.from(".end",{
        opacity:0,
    })


    tl.from(".endt",{
        opacity:0,
    })
}