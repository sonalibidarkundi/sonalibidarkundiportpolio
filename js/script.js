/*====================================
    SMOOTH SCROLL
====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*====================================
    ACTIVE NAVIGATION
====================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*====================================
    STICKY NAVBAR
====================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 4px 20px rgba(0,0,0,.4)";

    }

    else{

        header.style.boxShadow="none";

    }

});


/*====================================
    SCROLL ANIMATION
====================================*/

const revealElements=document.querySelectorAll(

".hero,.about,.skills,.education,.experience,.projects,.achievements,.certifications,.contact"

);

function reveal(){

    const trigger=window.innerHeight-120;

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/*====================================
    TYPING EFFECT
====================================*/

const typing=document.querySelector(".hero-text h2");

const words=[

"Python Developer",

"AI Enthusiast",

"Full Stack Developer",

"Machine Learning Learner"

];

let wordIndex=0;

let charIndex=0;

let currentWord="";

let isDeleting=false;

function type(){

    currentWord=words[wordIndex];

    if(isDeleting){

        typing.textContent=currentWord.substring(0,charIndex--);

    }

    else{

        typing.textContent=currentWord.substring(0,charIndex++);

    }

    if(!isDeleting && charIndex===currentWord.length){

        isDeleting=true;

        setTimeout(type,1000);

        return;

    }

    if(isDeleting && charIndex===0){

        isDeleting=false;

        wordIndex++;

        if(wordIndex===words.length){

            wordIndex=0;

        }

    }

    setTimeout(type,isDeleting?60:120);

}

type();


/*====================================
    CONTACT FORM
====================================*/

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const inputs=form.querySelectorAll("input, textarea");

    let valid=true;

    inputs.forEach(input=>{

        if(input.value.trim()===""){

            valid=false;

            input.style.border="2px solid red";

        }

        else{

            input.style.border="2px solid #00abf0";

        }

    });

    if(valid){

        alert("Thank you! Your message has been received.");

        form.reset();

    }

});


/*====================================
    BACK TO TOP BUTTON
====================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00abf0";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*====================================
    FADE-IN EFFECT
====================================*/

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition=".8s";

    observer.observe(section);

});