import axios from 'axios';


async function SumbitOrder({name, total, items, stripeTokenId, userToken}){

  
   const response= await   axios
      .post('https://react-store-vintage-tech-v1.herokuapp.com/api/orders/', {
        data:{
            name, total, items, stripeTokenId
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }).catch(error => console.log('An error occurred:', error.response));
    return response;

}
export default SumbitOrder;
   
   
    
