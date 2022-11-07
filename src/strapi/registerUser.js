import {newurl} from '../utils/URL'
async function RegisterUser({email, password, username}){
    let response = await fetch(`${newurl}`,
    {
        headers:{
            'Content-Type' :'application/json',
        },
        body:JSON.stringify({
            username:username,
            password:password,
            email:email
        }),
        method:'POST'

    });
    const data= await response.json();
   return data;
}
export default RegisterUser
