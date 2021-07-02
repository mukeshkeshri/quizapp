import React from 'react';
import classes from './plate.module.css';
import Card from '../UI/Card'

const question=[
    {   
        id:1,
        question:"who are you",
        option1:1
    },
    {   
        id:2,
        question:"who are you",
        option1:1

    },
    {   
        id:3,
        question:"who are you",
        option1:1
    },

];

const  Platewrap = () =>{
  
    const plate= question.map((que,index) => 
    <div className={classes.plate}> 
    {index} </div>);
  
    return (<section className={classes.section}>
         
         <Card>{plate}
         </Card>
    </section>
    );
};

export default Platewrap;
