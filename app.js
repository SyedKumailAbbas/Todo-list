
var list=document.getElementById("list")
var add=document.getElementById("addbtn")
var del=document.getElementById("delbtn")
var upd=document.getElementById("updatebtn")

add.setAttribute("class","btn btn-success")
upd.setAttribute("class","btn btn-warning")
del.setAttribute("class","btn btn-danger")
list.setAttribute("class","list-group")
function addlist(){
    var a=document.getElementById("input").value
     li=document.createElement("li")
     li.setAttribute("class","list-group-item list-group-item-warning"); 
    var b= document.createTextNode(a)
    li.appendChild(b)
    list.appendChild(li)

    document.getElementById("input").value=" "
}