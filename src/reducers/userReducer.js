export function login(state = {}, action) {

    switch (action.type) {

        case 'loginrequest':

            return {

                Register: true

            }

        case 'loginsuccess':

            return {



            }



        case 'loginfail':

            return {



            }

        default:

            return state

    }

}

export function register(state = {}, action) {

    switch (action.type) {

        case 'registerrequest':

            return {

                Register: true

            }

        case 'registersuccess':

            return {



            }



        case 'registerfail':

            return {



            }

        default:

            return state

    }

}