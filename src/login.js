import './signup.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
import axios from 'axios';
const BASE_URL="//webla-api.uc.r.appspot.com/api/v1";
const schema = yup.object({
    email:yup.string().email().required("Email is required field"),
    password:yup.string().required("Password is required field")
})
export const Login=()=>{
    const { register, handleSubmit, formState:{ errors } } =useForm({resolver: yupResolver(schema)});
    // console.log("errors...", errors)
    const onSubmit= async (finaldata)=>{
        // console.log(finaldata);
        // console.log("errors...", errors)
try{
    const response=await axios({
method:'POST',
url:`${BASE_URL}/users/login`,
data:{
email:finaldata.email,
password:finaldata.password
}
    });
if(response.status===200){
    const token=response.data.token;
    localStorage.setItem("Ecom_token",token);
    localStorage.setItem("Ecom_cartid",response.data.cart_id);
    toast.success("YOU'VE LOGGED IN SUCCESSFULLY");
    setTimeout(()=>{
        window.location.href="/Productfeed"
    },3000)
}
}
catch(error){
    toast.error(error.response.data.message);
}
    }
    return(
    <>
    <div id="parent">
        <div id="id8">
            <div id="id9">
                <h2 id="id11">  &nbsp; &nbsp; Login</h2>
                <br></br>
                <h3 id="id12"> &nbsp;  &nbsp;  &nbsp; Get access to your<br></br> &nbsp; &nbsp;  &nbsp;orders,wishlists and<br></br> &nbsp; &nbsp;  &nbsp;recommendations</h3>
                <br></br>
                <h3 id="id13"> &nbsp; Thank you for choosing us!! <br></br> &nbsp; &nbsp; &nbsp;~SHAIK.MUTHAHAR,CEO. </h3>
                <img src="slogo.png" alt="can't be displayed" id="id14"></img>
                
            </div>
            <div id="id10">           
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email")} type="mail" placeholder="EMAIL" className="c39"></input>
                        <small style={{position:"absolute",top:"123px",left:"123px",color:"red" }}>{(errors["email"]?.message)}</small>
                        <input  {...register("password")} type="password" placeholder="PASSWORD" className="c40"></input>
                        <small style={{position:"absolute",top:"178px",left:"115px",color:"red" }}>{(errors["password"]?.message)}</small>
                        <button type="submit" className="c42" style={{marginTop:-70}}>LOGIN</button>
                        </form>
                        <div id="id15" style={{marginTop:-80}}><p style={{color:"#047BD5",fontWeight:"bold",marginTop:4,textAlign:"center"}}>New customer? <a href="/signup" style={{color:"#047BD5",fontWeight:"bold",textDecoration:"none"}}>Signup</a></p></div>
                        <a href="/" style={{fontWeight:"bold",position:"absolute",bottom:10,right:10}}>Back to home page >>></a></div></div></div></>
   
)
}
