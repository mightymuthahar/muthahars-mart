import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import "./totalcart.css"
const cartid=localStorage.getItem("Ecom_cartid");
const token=localStorage.getItem("Ecom_token");
export const Productscart=()=>{
    const [items,setitems]=useState([]);
    const[cart_total,setcart_total]=useState()
    var total=0;
    const Loaditems=()=>{
        axios({
            method:"GET",
            url:`https://webla-api.uc.r.appspot.com/api/v1/carts/${cartid}`,
            headers:{
                " X-Authorization": `Bearer ${token}`
             },
        }).then((res)=>{setitems(res.data);
        console.log(res.data)}).catch((error)=>{console.log(error)})
    }
    useEffect(()=>{
        Loaditems()
        total_cart()
        
    })  
    useEffect(()=>{
        Loaditems()
            },[items])

    const total_cart=()=>
    {
        items.map((item)=>{
        total=total+item.price

    })
    setcart_total(total)}

    const Deleteprod=(product_id)=>{
        axios({
            method:"DELETE",
            url:`https://webla-api.uc.r.appspot.com/api/v1/carts/${cartid}/remove/${product_id}`,
            headers:{
                " X-Authorization": `Bearer ${token}`
             },
        }).then((res)=>{toast.success(res.data.message);}).catch((error)=>{console.log(error)})
        setTimeout(()=>{
            window.location.reload()
        },2000)

    }

return(
    <>
    <div id="m1">
        <div id="m2">
        <table cellSpacing={10} cellPadding={10} id="m7">
    <tr style={{color:"white"}}>
        <th>PRODUCT</th>
        <th>PRICE</th>
        <th>ACTION</th>
    </tr>
    {
items.map((item)=>{
    return(
        <>
  <tr style={{color:"white"}} >
    <td>{item.title}</td>
    <td>${item.price}</td>
    <td><button style={{backgroundColor:"red",borderRadius:3}} id="btn1" onClick={()=>{Deleteprod(item.id)}}>Remove Product</button></td>
  </tr>
        
       </>
    )
})
    }
    </table>
    </div>
    <div id="m3">
    <p className="cm1">Price Details</p>
    <hr></hr>
    <p className="cm2">Total Items:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;{items.length}</p>
    <p className="cm2">Total Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cart_total}</p>
    <p className="cm2">Discount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0</p>
    <hr></hr>
    <p className="cm2" style={{marginTop:10}}>Total Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cart_total}</p>
    
    </div>
    <button id="m5" onClick={()=>{window.location.href="/Productfeed"}}>Add More Products</button>
    </div>
</>
)}