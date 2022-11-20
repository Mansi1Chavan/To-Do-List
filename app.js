

const nameEnters = document.getElementById('nameEnter');
const textEnters = document.getElementById('textEnter');
const emailEnters = document.getElementById('emailEnter');
const btn = document.getElementById('btn');
let ul = document.querySelector('ul');




btn.addEventListener('click', function () {
    let input1 = nameEnters.value;
    let input2 = textEnters.value;
    let input3 = emailEnters.value;


    //creating elements

    let element1 = document.createElement('li');
    let element2 = document.createElement('li');
    let element3 = document.createElement('li3');
    let btn1 = document.createElement('button');


    ul.style.display='flex';
    ul.style.justifyContent='center';
    ul.style.alignItems='center';
    
    element1.style.marginLeft = "90px";

    
    element1.innerText = input1;
    element2.innerText = input2;
    element3.innerText = input3;
    btn1.innerText = 'Delete';

    element1.style.border='4px solid maroon';
    element1.style.fontSize = "25px";
    element1.style.borderRadius = "5px";
    element1.style.backgroundColor = "gray"
    element1.style.width = "20rem"
    element1.style.marginRight = "15px";
    element1.style.textAlign = "center";


    element2.style.border='4px solid maroon';
    element2.style.fontSize = "25px";
    element2.style.borderRadius = "5px";
    element2.style.backgroundColor = "gray"
    element2.style.width = "20rem"
    element2.style.textAlign = "center";

    element3.style.border='4px solid maroon';
    element3.style.fontSize = "25px";
    element3.style.borderRadius = "5px";
    element3.style.backgroundColor = "gray"
    element3.style.width = "20rem"
    element2.style.textAlign = "center";


    btn1.style.backgroundColor="red";
    btn1.style.fontSize="25px";
    btn1.style.backgroundColor="red";
    btn1.style.position= "absolute";
    btn1.style.textAlign = "center";


    //Appending the created element


    ul.appendChild(element1);
    ul.appendChild(element2);
    ul.appendChild(element3);
    element1.appendChild(btn1);
    element2.appendChild(btn1);
    element3.appendChild(btn1);

    //adding functionality to button

    btn1.addEventListener('click', function () {
        element1.remove();
        element2.remove();
        element3.remove();

    })
});





