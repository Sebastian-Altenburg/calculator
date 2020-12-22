const buttonCreation = (()=> {

    const parentDiv = document.querySelector(".grid");
    let buttons;

    for (let i = 0; i < 18; i++) {
        buttons = document.createElement("button");
        parentDiv.appendChild(buttons);
    }

    for (let i = 0; i < parentDiv.children.length + 1; i++) {

        if(i == 5 || i == 9 || i == 13 || i == 17){
            parentDiv.childNodes[i].classList.add("operation");
        }
        else if(i==6||i ==7||i==8||i==10||i==11||i==12||i==14||i==15||i==16||i==19) {
            parentDiv.childNodes[i].classList.add("numClass");
        }   
        else if (i == 4) parentDiv.childNodes[i].classList.add("delete");
    }


    // return{};
})();
export {buttonCreation};