// Write your code here!
let removeMain = document.getElementById("main");
removeMain.remove();


const newHeader = document.createElement("h1");
//document.body.append(newHeader);
newHeader.className = "victory";
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";