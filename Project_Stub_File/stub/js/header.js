// Clear Input field every time when SignUp button is clicked

function signUp1(){
      document.getElementById("fname").value="";
      document.getElementById("uname1").value="";
      document.getElementById("pass1").value="";
      document.getElementById("confPass").value="";
}
// Clear Input field every time when SignIn button is clicked
function signIn(){
      document.getElementById("uname").value="";
      document.getElementById("pass").value="";
}
//Close the SignUp Modal on click of SignUp button(After successfull validation)
function signUpModal(){      
    var fname = document.getElementById("fname").value;
    var uname = document.getElementById("uname1").value;
    var pass = document.getElementById("pass1").value;
    var confPass = document.getElementById("confPass").value;
     if(fname!==""&&uname!==""&&pass!==""&&confPass!==""){
           document.getElementById("signUpModal").style.display="none";
         }    
}
//Close the SignIn Modal on click of SignIn button(After successfull validation)
function signInModal(){      
      var uname = document.getElementById("uname").value;
      var pass = document.getElementById("pass").value;
       if(uname!==""&&pass!==""){
             document.getElementById("signInModal").style.display="none";
           }    
  }
