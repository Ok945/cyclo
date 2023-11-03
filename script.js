        
const object1 = document.getElementById("cyclebody1");
const wheel1 = document.getElementById("wheel1");
const wheel2 = document.getElementById("wheel2");
const cyclepedal1 = document.getElementById("cyclepedal1");

const object2 = document.getElementById("cyclebody2");
const wheel3 = document.getElementById("wheel3");
const wheel4 = document.getElementById("wheel4");
const cyclepedal2 = document.getElementById("cyclepedal2");

// const road = document.getElementById('path');


const main_body = document.getElementById('main_body')
const card_container= document.getElementById('card_container')


window.addEventListener('scroll', () => {
    let valueY = window.scrollY;
    object1.style.transform = `translateX(${-valueY * 1.2}px) `;
    wheel1.style.transform = `translateX(${-valueY  * 1.2}px)  rotate(${-valueY}deg)`;
    wheel2.style.transform = `translateX(${-valueY * 1.2}px)  rotate(${-valueY}deg)`;
    cyclepedal1.style.transform = `translateX(${-valueY * 1.2}px)  rotate(${-valueY}deg)`;
    // object1.style.transform = `translateX(${-valueY * 1.2}px) translateY(${-valueY * 1.2}px)`;
    // wheel1.style.transform = `translateX(${-valueY  * 1.2}px) translateY(${-valueY * 1.2}px) rotate(${-valueY}deg)`;
    // wheel2.style.transform = `translateX(${-valueY * 1.2}px) translateY(${-valueY * 1.2}px) rotate(${-valueY}deg)`;
    // cyclepedal1.style.transform = `translateX(${-valueY * 1.2}px) translateY(${-valueY * 1.2}px) rotate(${-valueY}deg)`;

    // road.style.transform = `translateY(${-valueY * 1.2 }px)`


    object2.style.transform = `translateX(${valueY}px)   scaleX(-1)`;
    wheel3.style.transform = `translateX(${valueY}px)  rotate(${valueY}deg)`;
    wheel4.style.transform = `translateX(${valueY}px)  rotate(${valueY}deg) `;
    cyclepedal2.style.transform = `translateX(${valueY}px)  rotate(${valueY}deg)`;
    // object2.style.transform = `translateX(${valueY}px) translateY(${-valueY * 1.2}px)  scaleX(-1)`;
    // wheel3.style.transform = `translateX(${valueY}px) translateY(${-valueY * 1.2}px) rotate(${valueY}deg)`;
    // wheel4.style.transform = `translateX(${valueY}px) translateY(${-valueY * 1.2}px) rotate(${valueY}deg) `;
    // cyclepedal2.style.transform = `translateX(${valueY}px) translateY(${-valueY * 1.2}px) rotate(${valueY}deg)`;

    main_body.style.transform =`translateY(${-valueY * 0.25 }px)`
    card_container.style.transform =`translateY(${-valueY *1.2 }px)`

});


const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1, // Trigger when 20% of the element is in view
};



const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Check if the card already has the animation class

            if (!entry.target.classList.contains('animate-card')) {

                entry.target.classList.add('animate-card');
                const textHeadElement = entry.target.querySelector('.text-head');
                const dataElement = entry.target.querySelector('.data');
                dataElement.classList.add('animate-section')
                textHeadElement.classList.add('animate-head');

            }
        } else {

            entry.target.classList.remove('animate-card');
            const textHeadElement = entry.target.querySelector('.text-head');
            textHeadElement.classList.remove('animate-head');

            const dataElement = entry.target.querySelector('.data');
            dataElement.classList.remove('animate-section')



        }
    });
};


const observer = new IntersectionObserver(handleIntersect, options);

const cards = document.querySelectorAll('.artcard');
// console.log(cards)
cards.forEach(card => {
    observer.observe(card);
});





















const optionsMainBody = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1, // Trigger when 20% of the element is in view
};


const handleIntersectMainBody = (entries, observer) => {
    let valueY = window.scrollY;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animate-title class and make it visible when it's in the viewport
            entry.target.classList.add('animate-title');
            
        } else {
            // Remove the animate-title class and hide the element when it's not in the viewport
            entry.target.classList.remove('animate-title');
            // entry.target.style.display = 'none'; // Hide the element
        }
    });
};



const observerMainBody = new IntersectionObserver(handleIntersectMainBody, optionsMainBody);

const title = document.querySelectorAll('.title');
// console.log(cards)
title.forEach(title => {
    observerMainBody.observe(title);
})



