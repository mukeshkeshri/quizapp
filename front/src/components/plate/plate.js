import React, { useState } from 'react';
import classes from './plate.module.css';
import Card from '../UI/Card'

const question=[
    {   
        id:1,
        que:"who are you",
        option1:1
    },
    {   
        id:2,
        que:"who are you",
        option1:1

    },
    {   
        id:3,
        que:"who are you",
        option1:1
    },

];

const  Platewrap = () =>{
  
    const [questionNo, setquestionNo]= useState(1);

    const plate= question.map((que,index) => 
    <div className={classes.plate}> 
    {index} </div>);
  
    return (<section className={classes.section}>
         
          <Card>
          {plate}
          </Card> 
          <Card>
            {question[questionNo].que}
          </Card>
           
         
    </section>
    );
};

export default Platewrap;
