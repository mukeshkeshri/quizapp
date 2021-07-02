import classes from './Header.module.css'

const username="Mukesh";

const Header =()=>{
   
    return (
        <div className={classes.header}>
             <span className={classes.brand}>QUIZ APP</span>
             <span className={classes.profile}>{username[0]}</span>
        </div>
    );

};

export default Header;