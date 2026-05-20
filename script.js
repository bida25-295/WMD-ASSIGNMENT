// NAVIGATION ACTIVE LINK

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    
    if(link.href === window.location.href){
        link.style.color = "#ff69b4";
    }

});


// CONTACT & FEEDBACK FORM ALERT

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

});


// PRODUCT BUTTONS

const addButtons = document.querySelectorAll(".add-to-bag");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "Added ✓";

        button.style.background = "#000";

        setTimeout(() => {

            button.innerHTML = "Add to Bag";

            button.style.background = "#ff69b4";

        }, 2000);

    });

});


// BLOG POST ANIMATION

const blogPosts = document.querySelectorAll(".blog-post");

blogPosts.forEach(post => {

    post.addEventListener("mouseover", () => {

        post.style.transform = "scale(1.03)";
        post.style.transition = "0.3s";

    });

    post.addEventListener("mouseout", () => {

        post.style.transform = "scale(1)";

    });

});


// SMOOTH SCROLL EFFECT

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// WELCOME MESSAGE

window.addEventListener("load", () => {

    console.log("Welcome to Kylie Cosmetics ✨");

});