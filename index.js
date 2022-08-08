import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

var projects = [];

window.onload = () => {
    if(window.scrollY == 0){
        var setPageLoadInterval =  setInterval(()=>{
            document.body.style.overflowY = "scroll";
            document.getElementById("loader-wrapper").style.display = "none";
            clearInterval (setPageLoadInterval);
        }, 3000);
    } else{
        document.getElementById("loader-wrapper").style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}

class Project{
    constructor(name, description, toolsUsed, codeLink, demoLink){
        this.name = name;
        this.description = description;
        this.toolsUsed = toolsUsed;
        this.codeLink = codeLink;
        this.demoLink = demoLink;
    }
}

function addProjectToList(){
    projects.push(new Project("Codex Discord Bot", "Coming Soon...", "Node.js", "", ""));
    projects.push(new Project("Cross Click", "This is a web game based on HTML canvas element. The user has option to control the game settingsbefore the game starts. During the game, the user has to click the enemies that are spawned at random locations before it disappears.", "JavaScript", "https://github.com/Kharnate/Cross_Click", "https://kharnate.github.io/Cross_Click/"));
    projects.push(new Project("Grocery List", "For this project I used SQLite Database to build a grocery list app. The data is saved into the database and display the results in a RecycleView.", "Java, Android Studio", "https://github.com/Kharnate/Product-Tracking", "" ));
    projects.push(new Project("Order A Car", "Created an Uber like GUI application with two types of user rider and driver. This project had a group of 6 people. In this project I did Front-End work and my task was to make a GUI design for Login Scene, Driver Scene, Rider Scene, Registraion Scene and adding functionality.", "Java, Scene Builder", "https://github.com/quaide/order-a-car" , ""));
    projects.push(new Project("Product Tracking", " Software for a media player production facility that will keep track of what products are produced. Program includes the catalog, allows user to enter new product, employee accounts can be made, production statistic can be displayed and total display on number of production for different types.", "C++", "https://github.com/Kharnate/Product-Tracking", ""));
}

function showProjectToWeb(){
    const cardWrapper = document.getElementsByClassName("card-wrapper");

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('swiper-slide')

        const cardContent = document.createElement('div');
        cardContent.classList.add("card-content");

        const name = document.createElement('h2');
        name.classList.add('name');
        name.innerHTML = project.name;

        const description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = project.description;

        const links = document.createElement('div');
        links.classList.add("project-links");

        if(project.codeLink !== ""){
            const codeBtn = document.createElement('a');
            codeBtn.classList.add("project-btn");
            codeBtn.innerHTML = "Code";
            codeBtn.target = "_blank";
            codeBtn.href = project.codeLink;
            links.appendChild(codeBtn);
        }

        if(project.demoLink != ""){
            const demoBtn = document.createElement('a');
            demoBtn.classList.add("project-btn");
            demoBtn.innerHTML = "Demo";
            demoBtn.target = "_blank";
            demoBtn.href = project.demoLink;
            links.appendChild(demoBtn);
        }

        cardContent.appendChild(name);
        cardContent.appendChild(description);
        cardContent.appendChild(links);
        card.appendChild(cardContent);
        cardWrapper[0].appendChild(card);
    });
    
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
});

function formInputValueHandler(){
    var formInput = document.getElementsByClassName("form-input");

    for(let i=0; i<formInput.length; i++){
        formInput[i].onchange = function(e){
            if(formInput[i].value !== "" || formInput[i].value.length !== 0){
                formInput[i].style.borderBottom = "1px solid white";
            }else{
                formInput[i].style.borderBottom= "1px solid rgba(255, 255, 255, 0.5)";
            }
        }
    }
}

function scrollStyleHandler(){
    const navScrollTracker = document.querySelector(".scroll-tracker");
    
    const scrollTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets: [CSS.percent(0), CSS.percent(100)]
    });

    navScrollTracker.animate(
        {
            transform: ["scaleX(0)", "scaleX(1)"]
        },
        {
            duration: 1,
            timeline: scrollTimeline
        }
    );

}

scrollStyleHandler();
formInputValueHandler();
addProjectToList();
showProjectToWeb();

  