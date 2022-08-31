const pass = 
    {
        email: "winnie@gmail.com"
    }


function validate(){
    const Email= document.getElementById("Email").value;
    if ( Email == pass.email)
    {
        alert("login successfull");
    }
    else
    {
        alert("login unsuccessfull");
    }
};