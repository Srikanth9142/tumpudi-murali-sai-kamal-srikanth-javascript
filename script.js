console.log("scipt attached");

function handleSubmit(){
    //console.log(name);
    let error="";
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pwd1  =  document.getElementById("password1").value;
    let pwd2 = document.getElementById("password2").value;
    let mobNumber = document.getElementById("number").value;
    let dob = document.getElementById("date").value;
    let remail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let renumber= /^[0-9]{10}$/;
    let redate =  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(pwd1!=pwd2){
        error+="Check Password\n";
    }
    else if(pwd1.length!=8){
        error+="Password must be 8 Characters\n";
    }
    if(!email.match(remail)){
        error+="Enter Valid Email\n";
    }
    if(!mobNumber.match(renumber)){
        error+="Enter Valid Mobile Number";
    }
    if(!dob.match(redate)){
        error+="Enter Valid Date of Birth";
    }
    if(error!=""){
        window.alert(error);
    }
    else{
        window.alert("Success");
    }
    
}