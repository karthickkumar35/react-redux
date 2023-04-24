import React from 'react'
import { Card } from 'react-bootstrap';
import { CardActions, CardContent, Checkbox, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cardin } from '../../context/stateSlice';
import { favin } from '../../context/stateSlice';
import { productDetails } from '../../context/stateSlice';

const Home = () => {
    
    const state = useSelector(({sample})=> sample);
    console.log(state)
    const dispatch = useDispatch();
    
    let nav = useNavigate();
    const productShow = (value)=>{
      nav("/Product");
      dispatch(productDetails([value]))
    }

    const payFav = (e)=>{
      dispatch(favin({
        
          id:e.id,
          isFav:e.isFav
       
      }))
    }
    const payCard = (e)=>{
      dispatch(cardin({
        
          id:e.id,
          isCard:e.isCard
        
      }))
    }
  return (
    <div className='full container'>
            <div className='row'>
            {state.forms?.filter(e => e.Name.toLowerCase().includes(state.search))?.map((value,index)=>{
              return  <div className='col-lg-3' key={index}>
              <Card className="proCard" sx={{ maxWidth: 345 }} >
      {/* <CardMedia
        component="img"
        height="194"
        image=""
        alt="image"
      /> */}
      <CardContent onClick={()=>productShow(value)}>
        <Typography variant="body2" color="text.secondary">
        <img className='home-img'
          src={require('./../../assets/images/login-bg.jpg')} 
          alt="logo" 
        />
          <h2 className='proName'>{value.Name}</h2>
          <p className="proDetails">{value.Description}</p>
          <p className='proPrice'>Price:<CurrencyRupeeIcon className='rupee'/>{value.Price}</p>
          <p className='proStock'>Available : {value.Stock} Stock</p>
        </Typography>
      </CardContent>
      <CardActions className="home-icons" disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox   onClick={()=>payFav(value)} checked={value.isFav} color="error" icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon style={{color:"red"}}/>} id="checkbox"/>
        </IconButton>
        <IconButton aria-label="share">
        <Checkbox  onClick={()=>payCard(value)} checked={value.isCard} color="error" icon={<ShoppingCartIcon />} checkedIcon={<RemoveShoppingCartIcon style={{color:"red"}}/>} id="checkbox"/>
        </IconButton>
      </CardActions>
    </Card>
            </div>
            })
            }
            </div>
        </div>
  )
}

export default Home
