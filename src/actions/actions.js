const LoginRequest = (user) => {

    return {

        type: 'loginrequest',

        payload: user

    }

}



const Loginsuccess = (success) => {

    return {

        type: 'loginsuccess',

        payload: success

    }

}



const Loginfail = (error) => {

    return {

        type: 'loginfail',

        payload: error

    }

}


const RegisterRequest = (user) => {

    return {

        type: 'registerrequest',

        payload: user

    }

}



const Registersuccess = (success) => {

    return {

        type: 'registersuccess',

        payload: success

    }

}



const Registerfail = (error) => {

    return {

        type: 'registerfail',

        payload: error

    }

}


export const useraction={

    LoginRequest,Loginfail,Loginsuccess, RegisterRequest, Registerfail, Registersuccess

}