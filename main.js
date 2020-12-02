var pizzaarry=["Mushroom pizza","Vegetable pizza","Pizza candyland","Pizza fruit"];
function getmenu(){
    var display=[];
    for(var i=0; i<pizzaarry.length;i++){
        display.push("<h4> "+pizzaarry[i]+"</h4>");

    }
    pizzaarry.sort();
    var removecommas=display.join(" ");
document.getElementById("menu").innerHTML=removecommas;
}
function add_item(){
    var newpizza=document.getElementById("add_item").value;
    pizzaarry.push(newpizza);
    pizzaarry.sort();
    document.getElementById("add_item").value="";
}

