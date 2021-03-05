function check(){
    var fname=document.getElementById('fn');
    var lname=document.getElementById('ln');
    var email=document.getElementById('em');
    var remail=document.getElementById('rem');
    var date=document.getElementById('dt');
    var male=document.getElementById('ml').checked;
    var female=document.getElementById('fml').checked;
    
    if(fname.value==""){
       document.getElementById('one').innerHTML='First name field Blank';
        fname.focus();
        return false;
       }else{
           document.getElementById('one').innerHTML='';
       }

    if(lname.value==""){
       document.getElementById('two').innerHTML='Last name field Blank';
        lname.focus();
        return false;
       }else{
           document.getElementById('two').innerHTML='';
       }
    if(email.value==""){
       alert('Please enter your email');
        email.focus();
        return false;
       }
    if(remail.value==""){
       alert('Please Confirm your email');
        remail.focus();
        return false;
       }
    if(email.value != remail.value){
       alert('Does not match your email');
        remail.focus();
        return false;
       }
    if(date.value==""){
       alert('Please select date option');
        date.focus();
        return false;
       }
    if(male=='' && female==''){
       alert('Please select Gender');
        return false;
       }
 
}




