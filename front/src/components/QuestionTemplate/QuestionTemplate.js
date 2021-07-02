import classes from './QuestionTemplate.module.css';

const QuestionTemplate = (props) =>{

    return (<div className={classes.template}>
        <h1>{props.CurrQuestion.que}</h1>
        <h4>{props.CurrQuestion.option1}</h4>
        <h4>{props.CurrQuestion.option2}</h4>
    </div>
    );
}



export default QuestionTemplate;