import React, { useContext } from 'react'
import { useSelector } from 'react-redux';

const Product = () => {
  
    const state = useSelector(({sample})=> sample);
  return (
    <div>
        <div className='productAll container'>
            
                {state.productDetails.map((value,index)=>{
                    return<div className='row' key={index}>
                        <div className='col-lg-6'>
                        <img className='product-img'
                        src={require('./../../assets/images/login-bg.jpg')} 
                        alt="logo" 
                        />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className="Product-name">{value.Name}</h2>
                            <p className="Product-des">{value.Description}</p>
                            <ul>
                                <li>Menu: A list of food and drink items that a restaurant offers.</li>
                                <li>About Us: A page on a restaurant's website that provides information about the restaurant's history, mission, and values.</li>
                                <li>Location: Information about the restaurant's physical location, including the address, hours of operation, and contact information.</li>
                                <li>Reviews: User-generated content, such as Yelp or Google reviews, that customers leave after dining at the restaurant.</li>
                            </ul>
                            <p className="Product-price" >Price : {value.Price}</p>
                            <p className="Product-stock">Available : {value.Stock} Stock</p>
                        </div>
                    </div>
                })}

        </div>
    </div>
  )
}

export default Product