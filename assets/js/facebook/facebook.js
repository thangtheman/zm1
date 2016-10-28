function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}
//fires after login is checked on page load
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        //already logged in
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
    }
}
//fires after button is used
var loginCB = function(response){
    console.log('loginCallback');
    console.log(response);
    if (response.status === 'connected') {
        FB.api('/me?fields=id,email,name', function(fbResponse){
            console.log('fb graph',fbResponse);
            if (fbResponse && !fbResponse.error) {
                document.getElementById("fbName").value =fbResponse.name;
                document.getElementById("fbEmail").value=fbResponse.email;
                facebookForm()
                function facebookForm() {
                    document.getElementById("thangForm").submit();
                    console.log('submited')
                }
            }
        })
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.

    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.

    }
};
