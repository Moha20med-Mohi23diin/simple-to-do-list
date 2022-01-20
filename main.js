let addbutton= document.getElementById('addtodo');
let tconta= document.getElementById('todocontanier');
let input=document.getElementById('inputfield');
addbutton.addEventListener('click',function(){
    var paragraph =document.createElement('p')
    paragraph.innerText=input.value;
    tconta.appendChild(paragraph);
})

