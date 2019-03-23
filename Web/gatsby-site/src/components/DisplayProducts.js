import React from 'react'
import GetJson from '../../../../Common/DataFetchers/GetJson'

const DisplayProducts =()=>
    <div>
        <GetJson>
        {({products})=>(
          products.map((product)=>(
          <div style={{display:"block",margin:"20px"}}>
          <p style={{fontSize:"40px"}}>{product.name} </p>
          <img src={product.avatar} alt="prodiuct" />
        </div>)) )}
       </GetJson>
      </div>



export default DisplayProducts;
