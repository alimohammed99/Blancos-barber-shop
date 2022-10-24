function contactVal(){
           var F_Name =     document.getElementById('name').value;
           var Phone  =     document.getElementById('phone').value;
           var Email = document.getElementById('email').value;
           var Message = document.getElementById('message').value;
           var ErrorDisplay = document.getElementById('error-con');
           var SuccesDisplay = document.getElementById('success-con');
           var Phone_lenght = Phone.length;
            var Phone_Number_slice_part = Phone.slice(0,2); 
  
            if(F_Name == ""){
                ErrorDisplay.innerHTML="Name not enter";
                document.getElementById('name').focus();
            }
            else{
                if(Phone == ""){
                    ErrorDisplay.innerHTML="phone number not enter";
                    document.getElementById('phone').focus();
                 }
                 else(Email == ""){
                    ErrorDisplay.innerHTML="Email not enter";
                    document.getElementById('email').focus();
                }else{
                    
                    if(Message == ""){
                        ErrorDisplay.innerHTML="Message not enter";
                        document.getElementById('message').focus();
                    }
                else{

                    if(!Phone_lenght> 10 && !Phone_lenght < 12 && !Number(Phone) && 
                    !Phone_Number_slice_part == "090" && !Phone_Number_slice_part == "080" && !Phone_Number_slice_part == "070" && !Phone_Number_slice_part == "081"
                    )
                    {
                        ErrorDisplay.innerHTML="Invalid phone number";
                        document.getElementById('phone').focus(); 
                    }
                    else{

                    
                        else{
                            ErrorDisplay.innerHTML=" ";
                            SuccesDisplay.innerHTML="Thanks Message deliver successfully"
                        }
                        
                    }
                 }
                }
            }
           
}