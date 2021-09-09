var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

function auth(){

    var number = '+91' + document.querySelector('input').value;
  
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('successful text message');


        var 
            code = prompt('Please enter your verification number ', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log('authentication success', result.user);

            document.querySelector('label').textContent += 'Success ' + result.user.phoneNumber;
            
        }).catch(function (error) {
            console.error('authentication failed', error);
            
        });

    })
    .catch(function (error) {
        console.error('Failed to send text', error);

    });
  
}