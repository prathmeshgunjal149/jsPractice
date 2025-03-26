function addImageG()
{
    let imgg=document.getElementById("image-gallery");
    let imm=document.createElement("img");
    imm.setAttribute("src","https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    imm.setAttribute("alt","nature image");
    imgg.appendChild(imm);
    imm.style.width = "300px"; 
    imm.style.height = "200px";
    imm.style.padding = "20px";

}  

function removeLastImg()
{
    let imgg=document.getElementById("image-gallery");
    if(imgg.lastChild)
    {
      imgg.removeChild(imgg.lastChild); 
    }

}