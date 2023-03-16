import './signup.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
// import { userRegisterApi } from './api';
const BASE_URL="//webla-api.uc.r.appspot.com/api/v1";
const schema = yup.object({
    name:yup.string().min(3,"Min length is 3").max(20,"Max length is exceeded").required(),
    email:yup.string().email().required("Email is required field"),
    password:yup.string().required("Password is required field"),
    confirmpassword:yup.string().required("Confirmpassword is required field")
})

export const Signup=()=>{

    const { register, handleSubmit, formState:{ errors } } =useForm({resolver: yupResolver(schema)});
    // console.log("errors...", errors)
    const onSubmit= async (finaldata)=>{
        // console.log(finaldata);
        if(finaldata.confirmpassword!==finaldata.password){
            alert("password doesnot match");
            return;
        }    
        try{
            const response=
           await axios({
                method:'POST',
                url:`${BASE_URL}/users/register`,
                data:{
                  name:finaldata.name,
                  email:finaldata.email,
                  password:finaldata.password
                  }
            });
            console.log(response);
//             const mut=await userRegisterApi(finaldata);
// console.log(mut,"success");
if(response.status===200){
    setTimeout(()=>{
    window.location.href="/login"},3000)
    toast.success("Your registration is sucessful,please Login");
}

        }
        catch(error){
            console.log(error);
            if(error){
                toast.error(error.response.data.message);
            }
        }
    }
 
    return(
        <> 
        <div id="parent" >
            <div id="id8">
                <div id="id9">
                    <h2 id="id11">  &nbsp; Looks like you're<br></br>  &nbsp; new here!</h2>
                    <br></br>
                    <h3 id="id12"> &nbsp;  Sign up with your mobile <br></br> &nbsp; number or email to get <br></br> &nbsp; started</h3>
                    <br></br>
                    <h3 id="id13"> &nbsp; Thank you for choosing us!! <br></br> &nbsp; &nbsp; &nbsp;~SHAIK.MUTHAHAR,CEO. </h3>
                    <img src="slogo.png" alt="can't be displayed" id="id14"></img>   
                </div>
                <div id="id10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} type="text" placeholder="USERNAME" className="c38"></input>
                        <small style={{position:"absolute",top:"63px",left:"130px",color:"red" }}>{(errors["name"]?.message)}</small>
                        <input  {...register("email")} type="mail" placeholder="EMAIL" className="c39"></input>
                        <small style={{position:"absolute",top:"123px",left:"123px",color:"red" }}>{(errors["email"]?.message)}</small>
                        <input  {...register("password")} type="password" placeholder="PASSWORD" className="c40"></input>
                        <small style={{position:"absolute",top:"183px",left:"115px",color:"red" }}>{(errors["password"]?.message)}</small>
                        <input  {...register("confirmpassword")} type="password" placeholder="CONFIRM PASSWORD" className="c41"></input>
                        <small style={{position:"absolute",top:"245px",left:"90px",color:"red" }}>{(errors["confirmpassword"]?.message)}</small>
                        <button type="submit" className="c42">SIGNUP</button>


                        </form>
                        <div id="id15"><p style={{color:"#047BD5",fontWeight:"bold",marginTop:4,textAlign:"center"}}>Existing user?<a href="/login" style={{textDecoration:"none",color:"#047BD5",fontWeight:"bold"}}>Login</a></p></div>
                        <a href="/" style={{fontWeight:"bold",position:"absolute",bottom:10,right:10}}>Back to home page >>></a></div></div></div></>
    )
}
