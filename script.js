// Theme Toggle

const toggleBtn = document.getElementById("theme-toggle");

if(toggleBtn){

    toggleBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light-theme");

        if(document.body.classList.contains("light-theme")){
            toggleBtn.textContent = "☀️ Light Mode";
        }
        else{
            toggleBtn.textContent = "🌙 Dark Mode";
        }

    });

}

// Smooth Scrolling

document.querySelectorAll(".dropdown-btn").forEach(button => {

    button.addEventListener("click", () => {

        button.parentElement.classList.toggle("active");

    });

});