const Submit_button = document.querySelector(".button");
Submit_button.onclick = () => {

    // all input data received this variables
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    // const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    // const cpass = document.getElementById("cpass").value;

    // store the data local
    localStorage.setItem('FirstName',fname);
    localStorage.setItem('LastName',lname);
    // localStorage.setItem('Email',email);
    localStorage.setItem('Password',pass);
    // localStorage.setItem('Cpassword',cpass);

    // condition
    if(fname == "" && lname =="" && pass == "" ){
        alert("Input fild has no value");
    }
    else
    {
        if(fname !== "khamis" && lname !=="khalid" && pass !=="1234"){
            alert("wrong password");
           
        }else{
            // alert('registration successful');
            Window.location.href="home.html" ;
        }
    }
}