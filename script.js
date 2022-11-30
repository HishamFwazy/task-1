function store(){ 
    let userName = document.getElementById('userName').value;
    let age = document.getElementById('age').value;
    let id = document.getElementById('key').value; 
    let check=document.getElementById('active')
    let data = {
        userName: userName,
        Age: age,
        status:check.value
    }
    if(check.checked==true){
        
        window.localStorage.setItem(id,JSON.stringify(data));  
    }else{
        data.status="not active"
        window.localStorage.setItem(id,JSON.stringify(data));  
    }
    
}


function showItem(){ 
    let id = document.getElementById('ShowItem').value;
    let records = window.localStorage.getItem(id);
    let paragraph = document.createElement("p");
    let infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    let element = document.getElementById("retrieve");
    element.appendChild(paragraph);
    
}


function removeItem(){  
    let key = document.getElementById('removeKey').value;
    localStorage.removeItem(key)
}


function clearStorage(){ 

    localStorage.clear()
}

window.onload =function(){ 
    document.getElementById("userForm").onsubmit = store
    document.getElementById("retrieveButton").onclick = showItem
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("clearButton").onclick = clearStorage
}


let obj={
    name:"hisham",
    kk:"hisham",
    ww:"hisham",
    e:"hisham",
}
console.log(obj.kk)