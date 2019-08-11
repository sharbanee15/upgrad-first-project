//toggle Save and Edit Button
    function edit(){
        //Toggling of Save and Edit Button
         document.getElementsByClassName("editButton")[0].style.display="none";
         document.getElementsByClassName("saveButton")[0].style.display="block";
        //To make the Body and Title Editable
         var text= document.getElementById("blogBody");
         text.contentEditable="true";
         text.style.border="1px solid #f3bcbc";//To add border to body 
         var title= document.getElementById("spanTitle");
         title.style.border="1.5px solid #f3bcbc ";//To add border to title
         title.contentEditable="true";
    }
    function save(){
        //Toggling of Save and Edit Button
         document.getElementsByClassName("saveButton")[0].style.display="none";
         document.getElementsByClassName("editButton")[0].style.display="block";
        //To remove border of Body and Title
         document.getElementById("blogBody").style.border="none";
         document.getElementById("spanTitle").style.border="none";
    }
//Add Functionality to Like Button
var count=0;
function like(){
    document.getElementsByClassName("likeButton")[0].innerHTML= "<i class='fa fa-thumbs-up'></i>&nbsp;" + "Liked!";
       count=count+1;
       if(count==1){
            document.getElementById("likePara").innerHTML= count + " Person likes this!";
       }
       else{
            document.getElementById("likePara").innerHTML= count + " People have liked this!";
       }
}
//Add Functionality to Comment Button
function allComment(){
    var commentSection = document.getElementById("commentBox").value;
    if(commentSection == ""){
        alert("Do write some comment!");
    } 
    else{
            var template = document.createElement("div");
            var text = document.createTextNode(commentSection);
            template.appendChild(text);
            template.setAttribute("class","newDiv");
            document.getElementById("commentSection").prepend(template);
            document.getElementById("commentBox").value="";    
    }
}
