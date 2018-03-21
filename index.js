var menuButton = document.getElementById("menuButton"),
    controls = document.getElementById("controls"),
    bgFile = document.getElementById("bgFile"),
    bg = document.getElementById("background"),
    titleInput = document.getElementById("titleInput"),
    title = document.getElementById("title"),
    Dinput = document.getElementById("descriptionInput"),
    description = document.getElementById("description"),
    textColor = document.getElementById("textColor"),
    addStory = document.getElementById('add'),
    display = document.getElementById("display"),
    row = document.getElementsByClassName("row"),
    theDiv = bg,
    theTitle = title,
    theDesp = description,
    bgSrc = "",
    bgHeight = 300,
    bgLeft = 0,
    bgTop = 0;
    open = false;

function expandMenu(){
    
    if (open == false){
        open =true;
        controls.style.bottom = 0 + "px";
    }else{
        open = false;
        controls.style.bottom = -120 + 'px';
    }
};

function changeColor(ctrl){
    title.style.color = ctrl.value
    description.style = 'color:'+ctrl.value
};

function changeDescription(input){
    theDesp.innerHTML = input.value
};

function changeTitle(input ){
    theTitle.innerHTML = input.value
    
};

function changeDiv(div){
    theDiv = div;
    childDiv = div.childNodes;
    theTitle = childDiv[0];
    theDesp = childDiv[1];
}

function changeBg(ev){
    if (ev.keyCode == 13){
        if (bgFile.value == "horse"){
            bgSrc = "imgs/i1.jpg";
        }else if (bgFile.value == "night"){
            bgSrc = "imgs/i2.jpg";
        }else if (bgFile.value == "mountain"){
            bgSrc = "imgs/i3.jpg";
        }else if (bgFile.value.indexOf("epic") !==-1) {
            bgSrc = "imgs/i4.jpg"; //try horsepic
        }else{
            bgSrc = bgFile.value;
        }
    }
    
    theDiv.style.backgroundImage = "url("+bgSrc+")";
};

function moveBg(ev){
    console.log(ev.keyCode);
    if (ev.keyCode == 37 ){ //left 
        bgLeft -= 10;
        theDiv.style.backgroundPosition = bgLeft +"px " + bgTop+"px";
    }else if (ev.keyCode == 38){ //up
         bgTop -= 10;
        theDiv.style.backgroundPosition = bgLeft +"px " + bgTop+"px";
    }else if (ev.keyCode == 39){ //right
         bgLeft += 10;
        theDiv.style.backgroundPosition = bgLeft +"px " + bgTop+"px";
    }else if (ev.keyCode == 40){ //down
         bgTop += 10;
        theDiv.style.backgroundPosition = bgLeft +"px " + bgTop+"px";
    }else if (ev.keyCode == 107){ //plus
         bgHeight += 10;
        theDiv.style.height = bgHeight +"px";
    }else if (ev.keyCode == 109){ //subtract
         bgHeight -= 10;
        theDiv.style.height = bgHeight+"px";
    };
    
};

function makeStory(){
    var getStory = document.createElement("div"),
        getTitle = document.createElement("div"),
        getDesp = document.createElement("div"),
        rowDiv = document.createElement("div");
    
    rowDiv.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
    getStory.className = "stories";
    getTitle.className = "newTitle";
    getDesp.className = "newDesp";
    getTitle.innerHTML = "";
    getDesp.innerHTML = ""
    
    rowDiv.appendChild(getStory);
    getStory.appendChild(getTitle);
    getStory.appendChild(getDesp);
    display.appendChild(rowDiv);
    
    getTitle.style.cssText = "font-size:large; border-bottom-color:grey; position:absolute;top:10%;left:10%; border-bottom-style:solid;"
    
    getDesp.style.cssText = "position:absolute;top:20%;left:10%;"
    
    getStory.style.cssText = "width:100%; height:300px; position:relative; background-image: url("+bgSrc+"); margin:0px"   
    
    getStory.addEventListener("click",function(){
        changeDiv(this);
        
        
    })
};

bg.addEventListener("click",function(){
    changeDiv(this);
});


document.body.addEventListener("keydown",function(ev){
    
   moveBg(ev) 
});


menuButton.addEventListener("click",function(){
    expandMenu();
});


bgFile.addEventListener("keyup",function(ev){
    console.log(ev)
    changeBg(ev);
})

titleInput.addEventListener("keypress",function(){
    changeTitle(this);
})

Dinput.addEventListener("keypress",function(){
    changeDescription(Dinput);
})

textColor.addEventListener("change",function(){
    changeColor(textColor);
});

addStory.addEventListener("click",function(){
    makeStory();
})


