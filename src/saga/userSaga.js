import { useraction } from '../actions/actions'

import { takeEvery, call, put } from 'redux-saga/effects'


export function* fetchapi() {

    yield takeEvery('loginrequest', login)
    yield takeEvery('registerrequest', register)

}



function* login(user) {

    try {

        const result = yield call(()=>{loginapi(user)})

        yield put(useraction.Loginsuccess(result))

    }

    catch (err) {

        yield put(useraction.Loginfail(err))

    }

}



function loginapi(user) {
    const logincust = {
        "username": user.payload.username,
        "store_id": 3,
        "password": user.payload.password
    }

    const requestoptions = {

        method: 'POST',

        headers: {

            //'Bearer-Token':'8fi40i66dtyiku1vmrxrkjqmdjtyuy93',

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(logincust)
    }
    console.log(requestoptions)
    console.log(JSON.stringify(logincust))

    return fetch('http://cf467543a5.nxcli.net/jewellery_store_view/rest/V1/integration/customer/token', requestoptions).then(data =>{
   

        console.log(data)

    })

}






//Fetching Register API


function* register(user) {

    try {

        const result = yield call(()=>{registerapi(user)})

        yield put(useraction.Registersuccess(result))

    }

    catch (err) {

        yield put(useraction.Registerfail(err))

    }

}



function registerapi(user) {
    const customer = {
        "customer": {
            "group_id": 1,
            "email": user.email,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "store_id": 3
        },
        "password": user.password
    }
    const requestOptions = {
        method: 'POST',
        headers: { 
           'Bearer-Token':'alva7ays2d36i0tsu95gnp8mseqsk3xi',
            'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    };

    return fetch('http://cf467543a5.nxcli.net/rest/all/V1/customers',requestOptions).then(data=>{console.log(data)});
    //return fetch('http://cf467543a5.nxcli.net/rest/all/V1/customers', requestOptions).then(data => { console.log(data) });

}
