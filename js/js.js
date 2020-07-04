
    
        function loginValid()
        {
            var email = document.forms["login"]["Email"];
            var pass = document.forms["login"]["Password"];
            if (email.value=="" && pass.value=="")
                    {
                        window.alert("Please enter your email id and password");
                        email.focus();
                        return false;
                    }
            if (email.value=="")
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
            if (pass.value=="")
                {
                    window.alert("Please enter your password");
                    pass.focus();
                    return false;
                }
            return true;
       }ss