import React, { Component,useContext,useState } from 'react'
import{Navbar} from './MainPage'
import{FrontPage} from './MainPage'
import {GlobalContext} from './context/GlobalState'
import { Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import {GlobalContextProvider} from './context/GlobalState'
import ThingsContext from './CONTEXT';


const useStyles = makeStyles({
  root: {
    fontSize:'10px',
      display:'flex',
      margin:'8px',
paddingBottom:'2px',
      width:'400px',
      height:'40px',
    minWidth: 275,
    backgroundColor:'white',
    
           justifyContent: 'space-between',
           borderRight:'5px solid green',
           "&:hover":{
             borderRight:'5px solid darkgreen'
           },},
           root1: {
    fontSize:'10px',
      display:'flex',
      margin:'8px',
paddingBottom:'2px',
      width:'400px',
      height:'40px',
    minWidth: 275,
    backgroundColor:'white',
    
           justifyContent: 'space-between',
           borderRight:'5px solid red',
           "&:hover":{
             borderRight:'5px solid darkred'
           }

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cash:{
      
      fontSize:'17px',
      fontWeight:'600',
      textAlign:'left'
      
  },
  digit:{
      color:'red',
      textAlign:'right',
      fontSize:'30px'
  },
  expense:{
     
      width:'300px'
  },
   expenses:{
       direction:'row',
      display:'flex',
       justifyContent: 'space-between'
      
  },
  ex1:{
    marginLeft:'25px',
     textAlign:'center',
    marginRight:'10px',
    fontFamily:'sen-serif'
  },
  
  span:{
      width:'2px'
      ,height:'10px'
,
  }
});
function Home(props){
      const classes = useStyles();
const [tran,setTrans] = useState({text:'',amount:0,id:0})

  const {transaction} = useContext(GlobalContext)
  const {deleteTransaction} = useContext(GlobalContext)
  const {AddTransaction} = useContext(GlobalContext)

  console.log(transaction)
const amount = transaction.map(trans=> trans.amount)
console.log(amount)
const total = amount.reduce((acc,item)=>acc+=item,0).toFixed(2);
const expense = amount.filter(item => item<0).reduce((acc,item)=>acc+=item,0).toFixed(2)
const income = amount.filter(item => item>0).reduce((acc,item)=>acc+=item,0).toFixed(2)
  const setText=(e)=>{
  setTrans({...tran,
    text:e.target.value
  })
 

  
}
const setAmount=(e)=>{
      setTrans({...tran,
      amount:Number(e.target.value),
    })
    }
const onSubmit=()=>{
  setTrans({...tran,id:Math.floor(Math.random()*100000)})
  AddTransaction(tran);
  
   }
return(
        <div>
 
<Grid container direction='column' style={{alignItems:'center',marginTop:'200px'}}>
 <h3 style={{marginBottom:'5px',fontFamily:'san-serif',fontSize:'20px',width:'400px'}}>Your Balance</h3>
 <h3 style={{margin:'0',marginBottom:'10px',fontFamily:'san-serif',fontSize:'35px',width:'400px'}}>${total}</h3>
  
    <Grid item lg={4} md={4} sm={1} xs={0}/>
<Card className={classes.expense}>
    <CardContent  className={classes.expenses}>
        <Typography variant='body'component='h3' className={classes.ex1}>
    Income<br/><p style={{fontSize:'25px',color:'green'}}>{income}$</p>
        </Typography>
           <Typography variant='body'component='h3' className={classes.ex1}>
 Expense<br/><p style={{fontSize:'25px',color:'red'}}>{Math.abs(expense)}$</p>
        </Typography>
    </CardContent>
</Card>
 <h3 style={{marginBottom:'0px' ,width:'400px',borderBottom:'1px solid black'}}>History</h3>
    {transaction.map((trans,i)=>{
var amountState = trans.amount<0?true:false
console.log(amountState);
return(
  <div>

  <Grid item lg={6} md={6} sm={10} xs={12} >
         <Card className={trans.amount <0? classes.root1:classes.root} >
           <span onClick={()=>deleteTransaction(trans.id)}>delete</span>
     <CardHeader
     
     title={trans.text}
     />
      <CardHeader
     
     title={trans.amount <0?`-$${Math.abs(trans.amount)}`:`+$${Math.abs(trans.amount)}`}
     />  
       
   
    </Card>
    </Grid>

   
    </div>
)

    })}

    <h3 style={{marginBottom:'0px',width:'400px',borderBottom:'1px solid black'}}>Add new transaction</h3>
    <hr/>
    <Grid lg={3} md={3} sm={1} xs={0}/>
<p style={{ margin:'7px',marginLeft:'15px',fontFamily:'sen-serif',width:'400px',fontSize:'18px',fontWeight:'600'}}>Text</p>
<Input placeholder='Text' name="text" onChange={(e)=>setText(e)}style={{padding:'5px',width:'350px'}}/>
    <p style={{ margin:'9px',marginLeft:'15px',fontFamily:'sen-serif',fontSize:'18px',width:'400px',fontWeight:'600'}}>Amount<br/>{`negative-expense,positive-Income`}</p>

<Input placeholder='Amount' name="amount"type='number' onChange={(e)=>setAmount(e)}style={{padding:'5px',width:'350px'}}/>
<Button style={{width:'400px',color:'white',backgroundColor:'purple',fontWeight:'500',fontFamily:'sans-serif',padding:'2px',margin:'8px'}} onClick={()=>onSubmit()}>Enter Amount</Button>
</Grid>
          
        </div>
    )
}

export{
    Home
}