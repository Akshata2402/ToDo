const inputBox=document.getElementById('input-box') 
const listContainer=document.getElementById('list-container')
console.log(inputBox.value);
function AddTask(){
    if(inputBox.value === ''){
        alert("write something")
    }else{
       let li=document.createElement('li')
       li.innerHTML=inputBox.value
       console.log(listContainer);
       listContainer.appendChild(li);
       let span=document.createElement('span')
       span.innerHTML='\u00d7'
       li.appendChild(span);
       console.log("innerhtml in newly createdli",li);
       inputBox.value=" "
       saveData();
    }
    // console.log("Button pressed",inputBox.value);
}
//callback element
listContainer.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
})
function getData(){
    listContainer.innerHTML= localStorage.getItem('data');
}

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}