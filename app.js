
var list = document.getElementById("list")
var add = document.getElementById("addbtn")
var del = document.getElementById("delbtn")

list.setAttribute("class", "list-group")



function addlist() {
    var a = document.getElementById("input").value
    li = document.createElement("li")
    li.setAttribute("class", "list-group-item list-group-item-warning");
    var b = document.createTextNode(a)
    li.appendChild(b)
    list.appendChild(li)

    document.getElementById("input").value = " "
    //creating remove btn
    var delbtn = document.createElement("button")
    var deltxt = document.createTextNode("Remove")
    delbtn.appendChild(deltxt)
    li.appendChild(delbtn)
    delbtn.setAttribute("class", "btn btn-danger")
    delbtn.setAttribute("onclick", "removeitem(this)")


    //creating update btn
    var updbtn = document.createElement("button")
    var updtext = document.createTextNode("change")
    updbtn.appendChild(updtext)
    li.appendChild(updbtn)
    updbtn.setAttribute("class", "btn btn-warning")
    updbtn.setAttribute("onclick", "update(this)")


}

function removeitem(a){
    a.parentNode.remove()
    
}

function update(a){
    var b=prompt("Enter item",a.parentNode.firstChild.nodeValue)
    a.parentNode.firstChild.nodeValue=b
}

// function delitem(){

// }