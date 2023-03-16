import './homepage.css';

export const Homepage=()=>{
    return(
     <>
     <div id="parent-1">
        <div id="id1">
            <img src="slogo.png" alt="can't display image" id="id2"></img>
            <h3 id="id3">MUTHAHAR'S<br></br>MART</h3>
            <form>
                <input type="text" placeholder=" &nbsp; &nbsp; Search for products,brands and more" id="id4"></input>
            </form>
            <button type="submit" className="c35" onClick={()=>{window.location.href="/login"}}>Login</button>
            <button type="submit" className="c35" onClick={()=>{window.location.href="/signup"}}>Signup</button>
            <button type="submit" className="c36" onClick={()=>{window.location.href="/login"}}>Products</button>
          

        </div>
        <div id="id5">
           <div className="c30">
            <img className="c31" src="grocery.png"></img>
            <p className="c32">GROCERY</p>
           </div>
           <div className="c30">
            <img src="mobiles.png" className="c33"></img>
            <p className="c34">MOBILES</p>
           </div>
           <div className="c30">
            <img src="fashion.png" className="c33"></img>
            <p className="c34">FASHION</p>
           </div>
           <div className="c30">
            <img src="elec.png" className="c33"></img>
            <p className="c34">ELECTRONICS</p>
           </div>
           <div className="c30">
           <img src="hap.png" className="c33" ></img>
           <p className="c34">APPLIANCES </p>
           </div>
           <div className="c30">
           <img src="two.png" className="c33" ></img>
           <p className="c34">BIKES</p>
           </div>
        </div>
        <br></br>
        <div id="id6">
<h1 className="c1">Under ₹2,999</h1>
<h2 className="c2">Bestselling<br></br>smartwatches</h2>
<img src="watches.png" alt="cant be displayed" className="c3"></img>
<p className="c9">Extra 10% Off</p>
<div className="c10"><p className="c11">Use code: MUT10</p></div>
<img src="return.png" alt="cant be displayed" className="c4"></img>
<p className="c5">EASY<br></br>RETURNS</p>
<div className="c6"></div>
<img src="cod.png" alt="cant be displayed" className="c7"></img>
<p className="c8" alt="cant be displayed">PAY ON <br></br> DELIVERY</p>
<button type="submit" className="c12" onClick={()=>{window.location.href="/login"}}>Shop Now</button>
<h3 className="c13">HURRY UP!! LIMITED STOCK ONLY</h3>
        </div>
        <div id="id7">
            <div className="c14"><img src="ff.png" className="c22"></img>
            <p className="c23">SLIPPERS & FLIPFLOPS</p>
            <p className="c24">Min 70% OFF</p>
            <button className="c25" type="submit" onClick={()=>{window.location.href="/login"}}>Shop Now</button></div>
            <div className="c15">
               <img src="hb.png" className="c26"></img> 
               <p className="c27">HANDBAGS</p>
               <p className="c28">Min 40% OFF</p>
               <button className="c29" type="submit" onClick={()=>{window.location.href="/login"}}>Shop Now</button>
            </div>
            <div className="c16">
                <img src="per.png" className="c26" ></img>
                <p className="c27">DEODRANTS & PERFUMES</p>
                <p className="c28">Min 60% OFF</p>
                <button className="c29" type="submit" onClick={()=>{window.location.href="/login"}}>Shop Now</button>
            </div>
            <div className="c17">
            <img src="ww.png" className="c26" ></img>
            <p className="c27">WRIST WATCHES</p>
            <p className="c28">Min 90% OFF</p>
            <button className="c29" type="submit" onClick={()=>{window.location.href="/login"}}>Shop Now</button>
            </div>
            <div className="c18">
            <img src="cam.png" className="c26" ></img> 
            <p className="c27">TOP MIRRORLESS CAMERAS</p>
            <p className="c28">FROM ₹72,299</p>
            <button className="c29" type="submit" onClick={()=>{window.location.href="/login"}}>Shop Now</button>
            </div>
            <div className="c19">
            <img src="mon.png" className="c26" ></img>  
            <p className="c27">MONITORS</p> 
            <p className="c28">FROM ₹8,279</p>
            <button className="c29" type="submit"onClick={()=>{window.location.href="/login"}} >Shop Now</button>
            </div>
            <div className="c20">
            <img src="shav.png" className="c26" ></img>  
            <p className="c27">BEST OF SHAVERS</p>
            <p className="c28">FROM ₹2,279</p> 
            <button className="c29" type="submit" onClick={()=>{window.location.href="/login"}}>Shop Now</button>
            </div>
            <div className="c21">
            <img src="pb.png" className="c26" ></img> 
            <p className="c27">PREMIMUM POWER BANKS</p>
            <p className="c28">FROM ₹1,679</p> 
            <button className="c29" type="submit" onClick={()=>{window.location.href="/login"}}>Shop Now</button>
            </div>
        </div>
        </div></>
    )
}
