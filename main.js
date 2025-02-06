const bars = document.querySelector(".bars"),
menubar = document.querySelector("#menubar");
close = document.querySelector(".close");

bars.addEventListener("click", () => {
    menubar.classList.add("active");
});

close.addEventListener("click", () => {
    menubar.classList.remove("active");
});

gsap.to(".notification-bar p,.notification-bar a,.notification-bar span", {
    opacity: 1,
    y: 0,
    duration: .1
})


gsap.to("#menubar .logo, #menubar ul, #menubar .bars", {
    opacity: 1,
    y: 0,
    duration: .5,
    delay: .4
})


gsap.to(".home .text, .home .image", {
    opacity: 1,
    y: 0,
    duration: .5,
    delay: .8,
    stagger: .5
})


gsap.to(".resources-and-review ", {
    opacity: 1,
    y: 0,
    duration: .5,
    stagger: .5,
    scrollTrigger: {
        trigger: ".resources-and-review",
        start: "top 70%",
    }
})

gsap.to(".testimonials .sub-heading, .testimonials .head ", {
    opacity: 1,
    y: 0,
    duration: .5,
    stagger: .5,
    scrollTrigger: {
        trigger: ".testimonials .head",
        start: "top 90%",
    }
})


gsap.to(".testimonials .sub-heading, .testimonials .head ", {
    opacity: 1,
    y: 0,
    duration: .5,
    stagger: .5,
    scrollTrigger: {
        trigger: ".testimonials .head",
        start: "top 90%",
    }
})


gsap.to(".testimonials .container", {
    opacity: 1,
    y: 0,
    duration: .5,
    scrollTrigger: {
        trigger: ".testimonials .container",
        start: "top 70%",
    }
})

gsap.to(".testimonials .statistics .box ", {
    opacity: 1,
    y: 0,
    duration: .5,
    scrollTrigger: {
        trigger: ".testimonials .statistics",
        start: "top 70%",
    }
})

gsap.to(".work-section .container", {
    height: "100%",
    duration: .5,
    scrollTrigger: {
        trigger: ".work-section .container",
        start: "top 50%",
    }
})

gsap.to(".footer .text, .footer ul", {
    opacity: 1,
    x: 0,
    duration: .2,
    stagger: .2,
    scrollTrigger: {
        trigger: ".footer",
        start: "bottom 150%",
    }
})

