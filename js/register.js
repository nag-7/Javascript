function checkRegistration()
        {
            var name1 = document.forms["registration"]["Username"];
            var email = document.forms["registration"]["Email"];
            var password = document.forms["registration"]["Password"];
            var address = document.forms["registration"]["address"];
            var gender = document.forms["registration"]["Gender"];
            
            if (name1.value=="")
                {
                    window.alert("Please enter your Username");
                    name1.focus();
                    return false;
                }if (email.value=="")
                    {
                        window.alert("Please enter your email id");
                        email.focus();
                        return false;
                    }
                if (email.value.indexOf("@", 0)<0)
                    {
                        window.alert("Please enter a valid email");
                        email.focus();
                        return false;
                    }
                if (email.value.indexOf(".", 0)<0)
                    {
                        window.alert("Please enter a valid email");
                        email.focus();
                        return false;
                    }
                    if (password.value=="")
                    {
                        window.alert("Please enter your password");
                        password.focus();
                        return false;
                    }
                    if (address.value=="")
                    {
                        window.alert("Please enter your address");
                        address.focus();
                        return false;
                    }
                
              return true;
              }      
