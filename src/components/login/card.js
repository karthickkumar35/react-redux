
import { Card } from 'react-bootstrap';
import { CardActions, CardContent, Checkbox, IconButton, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { cardin } from '../../context/stateSlice';
import { remove } from '../../context/stateSlice';

const CardAdd = () => {
    const state = useSelector(({sample})=> sample);
    const dispatch = useDispatch();
    console.log(state)

    let card = state.forms?.filter(e => e.isCard === true )
    
    const extracard = ()=>{
      let a={}
      for(let i=0;i<card.length;i++){
        a[card[i].id]=1;
      }
      return a;
    }
    const [func,setFanc]= useState(extracard);
    console.log(func)
    let subin=(id)=>{
      if(func[id]>0){
      setFanc(prevcount =>({...prevcount,[id]:prevcount[id]-1}));
      }
    }
    let addin=(id,Stock)=>{
      if(func[id]<Stock){
        setFanc(prevcount =>({...prevcount,[id]:prevcount[id]+1}));
      }
    }

   

    const payCard = (e)=>{
      dispatch(cardin({
      
          id:e.id,
          isCard:e.isCard
        
      }))
    }
    let removeItem = id =>{
      dispatch(remove(id))
    }
  return (
    <div className='full container'>
            <div className='row'>
            {state.forms?.filter(e => e.isCard === true )?.map((value,index)=>{
              return  <div className='col-lg-3' key={index}>
              <Card className="proCard" sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="194"
        image=""
        alt="image"
      /> */}
      <CardContent>
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
        <div className="validStock">
          <button onClick={()=>subin(value.id)} className="validBtn"><RemoveIcon className="validStockBtn"/></button>
          <input type="text" value={func[value.id]>0?func[value.id]: removeItem(value.id)} size={1} id="inp" readonly></input>
          <button onClick={()=>addin(value.id,value.Stock)} className="validBtn"><AddIcon className="validStockBtn"/></button>
        </div>
        <IconButton aria-label="share">
        <Checkbox   checked={value.isCard} onClick={()=>payCard(value)} icon={<ShoppingCartIcon />} checkedIcon={<RemoveShoppingCartIcon style={{color:"red"}}/>} id="checkbox"/>
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

export default CardAdd