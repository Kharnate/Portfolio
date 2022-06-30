import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

function collapsibleClickEventHandler(){
    var collapsible = document.getElementsByClassName("collapsible");

    for(let i = 0; i < collapsible.length; i++){
        collapsible[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.paddingBottom = "0px";
                content.style.maxHeight = null;
            }else{
                content.style.paddingBottom = "10px";
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

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
collapsibleClickEventHandler();
formInputValueHandler();
