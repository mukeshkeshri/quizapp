import React, { useImperativeHandle, useState } from 'react';
import classes from './plate.module.css';
import Card from '../UI/Card'
import QuestionTemplate from '../QuestionTemplate/QuestionTemplate'
import Question from '../question';

const question=Question;
const  Platewrap = () =>{
    
    const [CurrquestionNo,setCurrquestionNo]= useState(0);
    const [PrevquestionNo,setPrevquestionNo]= useState(-1);
    
    const handleQuestionNo=(index)=>{
         setPrevquestionNo(CurrquestionNo);
         setCurrquestionNo(index);
    }

    const plate= question.map((que,index) => 
    <button id={index} className={classes.plate} onClick={()=>handleQuestionNo(index)}> 
    {index} </button>);
    
    return (<section className={classes.section}>
         
          <Card>
              {plate}
          </Card> 
          <Card>
                <QuestionTemplate CurrQuestion={question[CurrquestionNo]}/>
                {PrevquestionNo}
          </Card>   
    </section>
    );
};

export default Platewrap;
