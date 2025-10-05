function Container(photo,head,para){
    this.photo = photo;
    this.head = head;
    this.para = para;
    this.status = false;

}
let count = 0;
let ele1 = new Container("fa-solid fa-camera-retro","DevLens","Quickly inspect page layouts and visualize elements boundaries")
let ele2 = new Container("fa-solid fa-camera-retro","StyleSpy","Quickly inspect page layouts and visualize elements boundaries")
let ele3 = new Container("fa-solid fa-camera-retro","SpeedBoost","Quickly inspect page layouts and visualize elements boundaries")
let ele4 = new Container("fa-solid fa-camera-retro","JSONWizard","Quickly inspect page layouts and visualize elements boundaries")
let ele5 = new Container("fa-solid fa-camera-retro","TabMaster Pro","Quickly inspect page layouts and visualize elements boundaries")
let ele6 = new Container("fa-solid fa-camera-retro","ViewportBuddy","Quickly inspect page layouts and visualize elements boundaries")
let ele7 = new Container("fa-solid fa-camera-retro","Markup Notes","Quickly inspect page layouts and visualize elements boundaries")
let ele8 = new Container("fa-solid fa-camera-retro","Grid Guides","Quickly inspect page layouts and visualize elements boundaries")
let ele9 = new Container("fa-solid fa-camera-retro","Palette Picker","Quickly inspect page layouts and visualize elements boundaries")
let ele10 = new Container("fa-solid fa-camera-retro","LinkChecker","Quickly inspect page layouts and visualize elements boundaries")
let ele11 = new Container("fa-solid fa-camera-retro","DOM Snapshot","Quickly inspect page layouts and visualize elements boundaries")
let ele12 = new Container("fa-solid fa-camera-retro","ConsolePlus","Quickly inspect page layouts and visualize elements boundaries")

let arr= [ele1,ele2,ele3,ele4,ele5,ele6,ele7,ele8,ele9,ele10,ele11,ele12];

let body = document.querySelector("body");
let innerHeading = document.querySelector(".innerHeading");
let btnDiv = document.createElement("div");
btnDiv.className = "btns"

let btn1 = document.createElement("button");
btn1.className = "btn clickBtn";

btn1.innerText = "All";

btn1.addEventListener("click",()=> all());

let btn2 = document.createElement("button");
btn2.innerText = "Active";
btn2.className = "btn"
btn2.addEventListener("click",()=> active());

let btn3 = document.createElement("button");
btn3.innerText = "Inactive";
btn3.className = "btn"
btn3.addEventListener("click",()=> inactive());

btnDiv.append(btn1,btn2,btn3);
innerHeading.append(btnDiv);

let container = document.querySelector(".container");
divFun();
function divFun(){
    container.innerHTML="";
    arr.forEach(element=>{
        let main = document.createElement("div");
    let subMain = document.createElement("div");
    let forFlex= document.createElement("div");
    forFlex.className = "forFlex"

    let div1= document.createElement("div");
    div1.className = "div1"
    let icon= document.createElement("i");
    icon.className=element.photo;

    let div2= document.createElement("div");
    div2.className = "div2";

    let h1= document.createElement("h1");
    h1.innerText=element.head;

    let p= document.createElement("p");
    p.innerText=element.para;


    let wrapBtn = document.createElement("div");
    wrapBtn.className = "wrapBtn";

    let button = document.createElement("button");
    button.innerText="Remove";
    button.id=count;
    button.addEventListener("click",(event)=>{
        remove(event.target.id);
    })

    let label = document.createElement("label");
    label.className="switch";
    let input = document.createElement("input");
    let span = document.createElement("span");
    span.className="slider round";

    input.type="checkbox";
    input.className = "cardToggle";
    input.checked = element.status;
    input.addEventListener("change", () => {
        element.status = input.checked;
    });

    
    label.append(input,span);
    wrapBtn.append(button,label);

    div1.append(icon);
    div2.append(h1,p);

    forFlex.append(div1,div2);
    subMain.append(forFlex)
    main.append(subMain,wrapBtn);
    container.append(main);
    count++;
    })
}




function remove(index){
    console.log(index);
    arr.splice(index,1)
    count=0;
    // if()
    divFun();
}

function all(){
    btn1.classList.add("clickBtn");
    btn2.classList.remove("clickBtn");
    btn3.classList.remove("clickBtn");
    divFun();
}
function active(){
    btn1.classList.remove("clickBtn");
    btn2.classList.add("clickBtn");
    btn3.classList.remove("clickBtn");
    let cards= document.querySelectorAll(".container > div");

    cards.forEach((card)=>{
        let checkbox = card.querySelector(".cardToggle");
        if(checkbox.checked){
            card.style.display="block";

        }
        else{
            card.style.display="none"
        }
    })

}
function inactive(){
    btn1.classList.remove("clickBtn");
    btn3.classList.add("clickBtn");
    btn2.classList.remove("clickBtn");
    let cards = document.querySelectorAll(".container>div");

    
    cards.forEach((card)=>{
        let checkbox = card.querySelector(".cardToggle");
        if(!checkbox.checked){
            card.style.display="block";
            
        }
        else{
            card.style.display="none";
        }
    })

}