import React, {useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
    const mealItemForm = (event) => {
        event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return
        }
    props.onAddtoCart(enteredAmountNumber);    
    }

    return <form className={classes.form} onSubmit={mealItemForm}>
        <Input ref={amountInputRef} label="Amount" input={{
            id: 'amount',
            type: 'number',
            step: '1',
            defaultValue: '1',
        }} />
        <button>Add</button>
        {!amountIsValid ? <p>Plese enter valid amount (1-5)</p> : null}
    </form>
}

export default MealItemForm;