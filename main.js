var pizzaarry=["mushroom pizza","Vegetable pizza","Pizza candyland","PIzza fruit"];
function getmenu(){ 
    var display=[];
    for(var i=0; i<pizzaarry.length;i++){
        display.push("<h4> "+pizzaarry[i]+"</h4>");
    }
htmldata=htmldata+"/ol"
document.getElementById("display_menu").innerHTML=htmldata
}


    var removecommas=display.join(" ");
document.getElementById("menu").innerHTML=removecommas;

function add_item(){
    var htmldata;
  var items=document.getElementById("add_item").value
    var newpizza=document.getElementById("add_item").value;
    menu_list_array.push(items)
    menu_list_array.sort()
    htmldata="<section class-'cards'>"
    for (var i=0; <menu_list_array.lenght;i++){
htmldata=htmldata+"<div class="card">"+'<img src="images/pizzalmg.png'/>' + menu_list_array[i] +'</div>'
    } 




    pizzaarry.push(newpizza);
    document.getElementById("add_item").value="";
}


menu_list_array= ["Veg surprem pizza","panner tikka pizza","corn pizza","delux pizza"];