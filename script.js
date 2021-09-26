function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#Email').val();
    var subject = $('#Number').val();
var message = $('#Message').val();

    // var body = $('#body').val();

         var Body= '<html> <body> <table border="2"> <thead> <tr> <td> Name </td>  <td> Email </td>  <td> Phone Number  </td>  <td> Message </td>  </tr> <tbody> <tr> <td>'+name +'</td> <td>'+email +'</td><td>'+subject +'</td><td>'+message +'</td>  </tr> </tbody> </table> </body> </html>';

    console.log(name, subject, email, message);

    Email.send({
SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'kishorewolf28@gmail.com',
        From: "demooptimalweb@gmail.com",
        Subject: "New message on contact from "+name,
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}
