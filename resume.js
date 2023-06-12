function addNewWEfield(){
    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")
    newNode.classList.add("mt-2")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.setAttribute("rows",3);

    newNode.setAttribute("placeholder","Enter here")
    newNode.classList.add("mt-2")
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");


    aqOb.insertBefore(newNode,aqAddButtonOb);
}
function generateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField;


    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById('addressT').innerHTML=document.getElementById("addressfield").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("ObjectiveField").value;
    
    let wes =document.getElementsByClassName("wefield");
    let str="";
    for(let e of wes){
        str=str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;
    

    let aqs=document.getElementsByClassName('aqfield');
    let str1="";
    for(let e of aqs){
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;
   

    let file=document.getElementById('imgfield').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById('imgtemplate').src=reader.result;

    };


    document.getElementById(`aqT`).innerHTML=str1;
    document.getElementById('cv-form').style.display="none";
    document.getElementById(`cv-template`).style.display="block";
}
function printCV(){
    window.print();

}