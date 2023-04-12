
// Function to register a new user

function registration()
{
var name= document.getElementById("name1").value;
var email= document.getElementById("email1").value;
var number= document.getElementById("number1").value;
var female= document.getElementById("female1").value;			
var male= document.getElementById("male1").value;
var password= document.getElementById("password1").value;
var compassword= document.getElementById("compassword1").value;

    //email id expression code
   
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // var phoneno = /^\d{10}$/;

    
var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    if(name =='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(number=='')
    {
        alert('Please enter the Mobile Number.');
    }
    else if(password=='')
    {
        alert('Please enter Password');
    }
  
    else if(!pwd_expression.test(password))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(document.getElementById("password1").value.length < 6)
    {
        alert ('Password minimum length is 6');
    }
    
    else if(document.getElementById("password1").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else if(compassword=='')
    {
        alert('Enter Confirm Password');
    }
    else if(password != compassword)
    {
        alert ('Password not Matched');
    }
   
    else if(document.getElementById('condition1').checked==false){
        alert('Please Checked the checkbox properly')
    }
    else
    {				                            
           alert('Thank You for Login & You are Redirecting to Log In page');
    }
    
   
}
function validateLoginForm() {
    var username = document.getElementById('email11').value;
    var password = document.getElementById('password11').value;


  
    if (username == "" || password == "") {
        alert("Please fill all the fields.");
        return false;
    }

    window.location.href = "Assignment-1.html";

    return false;
}
