/* *************************
*** USER SIGNUP ***
************************** */
function userSignUp() {
     console.log('userSignUp Function Called')
    let userEmail = document.getElementById('emailSignup').value;
    let userPass = document.getElementById('pwdSignup').value;
    let newUserData = {user: {email: userEmail, password: userPass}};

    console.log(`NEWUSERDATA ==> ${newUserData.user.email} ${newUserData.user.password}`)

    fetch('http://localhost:3000/user/create',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(Response => Response.json())
    .then(function(response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })
    }

    
    
    /* *************************
    *** USER LOGIN ***
    ************************** */
    function userLogin() {
    let userEmail = document.getElementById('emailSignup').value;
    let userPass = document.getElementById('pwdSignup').value;
    console.log('userLogin Function Called')

    console.log(`USERDATA ==> ${UserData.user.email} ${UserData.user.password}`)

    fetch('http://localhost:3000/user/create',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UserData)
    })
    .then(Response => Response.json())
    .then(function(response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })

    }
    
    
    /* *************************
    *** USER LOGOUT ***
    ************************** */
    function userLogout() {
     console.log('userLogout Function Called')
    localStorage.setItem('SessionToken', undefined)
    console.log(`sessionToken ==> ${localStorage.sessionToken}`)
    tokenChecker()
    }
    
    
    /* *************************
     *** TOKEN CHECKER FUNCTION ***
    ************************** */
    function tokenChecker() {
     console.log('tokenChecker Function Called')
    }
    tokenChecker()