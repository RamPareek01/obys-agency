function scrolling(){
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}
function sheryAnimation(){
  Shery.imageEffect(".image-div",{
    style:5,
    config:{"a":{"value":1.83,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195864976497},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.61,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
  })
}
function loadingAnimation(){
      var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1, .line h2",  {
    opacity: 0,
    onStart: function () {
      var h4timer = document.querySelector("#line1-part1 h4");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h4timer.innerHTML = grow++;
        } else {
          h4timer.innerHTML = grow;
        }
      }, 27);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.6,
  });
  tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4
  })
  tl.to("#loader",{
    display:"none"
  })
  tl.from("#nav",{
    opacity:0

  })
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:150,
    stagger:0.25,

  })
}
function cursorAnimation(){
  Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
 Shery.makeMagnet("#nav h3");
 var videoContainer=document.querySelector("#video-container");
 var video=document.querySelector("#video-container video")
 videoContainer.addEventListener("mouseenter", function(){
  videoContainer.addEventListener("mousemove",function(dets){
    gsap.to(".mousefollower",{
      opacity:0
    })
    gsap.to("#video-crsr",{
      left:dets.x -500,
      y:dets.y-180
    })
  })
  videoContainer.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
      opacity:1
    })
    gsap.to("#video-crsr",{
      left:"70%",
      top:"-15%"
    })
  })
 })
 var flag=0;
 videoContainer.addEventListener("click",function(){
  if(flag==0){
    video.play();
  video.style.opacity=1
  document.querySelector("#video-crsr").innerHTML ='<i class="ri-pause-mini-line"></i>'
  gsap.to("#video-crsr",{
    scale:0.5
  })
  flag=1
  }else{
      video.pause();
  video.style.opacity=0
  document.querySelector("#video-crsr").innerHTML ='<i class="ri-play-fill"></i>'
  gsap.to("#video-crsr",{
    scale:1
  })
  flag=0
 }
})
}
function flag(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      x:dets.x ,
      y:dets.y
    })
  })
  document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
      opacity:1
    })
  })
  document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity:0
    })
  })
}

cursorAnimation()
scrolling()
sheryAnimation()
loadingAnimation()
flag()