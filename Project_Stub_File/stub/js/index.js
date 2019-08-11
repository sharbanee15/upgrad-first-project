// Clear Input field every time when CreatePost button is clicked
function post(){
    document.getElementById("postTitle").value="";
    document.getElementById("postContent").value="";
 
}
//Close the CreatePost Modal on click of Create button(After successfull validation)
function createPostModal(){      
    var title = document.getElementById("postTitle").value;
    var content = document.getElementById("postContent").value;
     if(title!==""&&content!==""){
           document.getElementById("createPostModal").style.display="none";
         }    
}