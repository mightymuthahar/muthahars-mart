import axios from "axios";
const BASE_URL="//webla-api.uc.r.appspot.com/api/v1";

export const userRegisterApi= async (data)=>{
    const response = await
    axios({
        method:'POST',
        url:`${BASE_URL}/users/register`,
        data:{
          name:data.name,
          email:data.email,
          password:data.password
          }
    })
    return response;
}