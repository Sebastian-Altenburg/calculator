const dom = (() => {

    const parentDiv = document.querySelector(".grid");

    parentDiv.childNodes[3].innerHTML = "AC";
    parentDiv.childNodes[3].classList.add("allClear");

    parentDiv.childNodes[4].innerHTML = "DEL";
    parentDiv.childNodes[5].innerHTML = "+";
    parentDiv.childNodes[6].innerHTML = "1";
    parentDiv.childNodes[7].innerHTML = "2";
    parentDiv.childNodes[8].innerHTML = "3";
    parentDiv.childNodes[9].innerHTML = "*";
    parentDiv.childNodes[10].innerHTML = "4";
    parentDiv.childNodes[11].innerHTML = "5";
    parentDiv.childNodes[12].innerHTML = "6";
    parentDiv.childNodes[13].innerHTML = "/";
    parentDiv.childNodes[14].innerHTML = "7";
    parentDiv.childNodes[15].innerHTML = "8";
    parentDiv.childNodes[16].innerHTML = "9";
    parentDiv.childNodes[17].innerHTML = "-";
    parentDiv.childNodes[18].innerHTML = "";
    parentDiv.childNodes[19].innerHTML = "0";

    parentDiv.childNodes[20].innerHTML = "=";
    parentDiv.childNodes[20].classList.add("equals");


    // return {};
})();
export {dom};