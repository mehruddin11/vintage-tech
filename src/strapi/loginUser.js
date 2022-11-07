// import axios from 'axios
async function LoginUser({email, password}){
            const response = await fetch('https://react-store-vintage-tech-v1.herokuapp.com/api/auth/local', {
                headers:{
                    'Content-Type' :'application/json',
                },
                body:JSON.stringify({
                    identifier:email,
                    password:password,
                }),
                method:'POST'
            })
            const data= await response.json();
            return data;
}

export default LoginUser;

