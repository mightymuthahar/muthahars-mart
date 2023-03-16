import "./products.css";
import {useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const token=localStorage.getItem("Ecom_token");
const cartid=localStorage.getItem("Ecom_cartid");
export const Products=()=>{
    const navigate=useNavigate();
    const[feed,setfeed]=useState([]);
const Loadproducts= async()=>{
    try{
   const response= await axios({
        method:"GET",
        url:"https://webla-api.uc.r.appspot.com/api/v1/products",
        headers:{
           " X-Authorization": `Bearer ${token}`
        },
        params:{
            per_page: 25,
            page: 1
        }
    })
    setfeed(response.data);
    
}
catch(error){

}
}
useEffect(()=>{Loadproducts()},[])    
const handleLogout=()=>{
    toast.info("ThankYou For Visiting !!,Come Again");
    setTimeout(()=>{
    localStorage.clear();
    window.location.href="/";},5000)
}
const addProduct=(product_id)=>{
    axios({
        method:"POST",
        url:`//webla-api.uc.r.appspot.com/api/v1/carts/${cartid}`,
        headers:{
            " X-Authorization": `Bearer ${token}`
         },
         data:{
            "id": product_id,
	"quantity": 1
         }
    }).then((response)=>{
        console.log(response);
        toast.success(response.data.message);
    }).catch((err)=>{
        console.log(err);
    })
}
    return(
        <>
   <div id="p1">
    <div id="p2">
        <img src="hs.png" alt="cant be displayed" className="cp1"></img>
        <img src="cart.png" alt="cant be displayed" className="cp3"></img>
        <a href="/Productscart" className="cp5"><p className="cp4">CART</p></a>
        <button type="submit"  className="cp2" onClick={handleLogout}>Logout</button>
    </div>
    
    <div id="p3">
        {
            feed.map((item,ind)=>{
                return(
                    <>
                    {item.images[1] ?
                   <div id="p4">
                  <img src={item.images[1]} alt="cant be displayed" style={{height:300,width:300,marginTop:50,marginLeft:50}}></img>
                    <h1 style={{marginLeft:530,marginTop:-290,color:"white"}}>{item.title}</h1>
                    <p style={{marginLeft:530,marginTop:-10,color:"white"}}>{item.description}</p>
                    <h3 style={{marginLeft:530,marginTop:0,color:"white"}}>${item.price}</h3>
                    <p style={{marginLeft:530,marginTop:-20,color:"whitesmoke"}}>Free Delivery</p>
                    <p style={{marginLeft:530,marginTop:-15,color:"whitesmoke"}}>No Cost EMI from ₹3,000/month</p>
                    <button type="submit" id="p5" style={{marginLeft:525,marginTop:0}} onClick={()=>{addProduct(item.id)}}>Add to cart</button>
                   </div>:null}
                   </>
                  
                
                  
                )
            })
        }
        </div>
        
    
   </div>
        </>
    )
}