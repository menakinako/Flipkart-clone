import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles({
    component:{
        marginTop:30
    },
    button:{
        borderRadius: "50%"
    }
})


const CartButton =()=>{
    const classes = useStyle();
    const [counter, setCounter] = useState(1);

    const decrement=()=>{
        setCounter(counter=> counter - 1)
    }

    const increment =()=>{
        setCounter(counter => counter + 1)
    }

    return(
          <ButtonGroup className={classes.component}>
              <Button className={classes.buttom} onClick={()=> decrement()} disabled={counter==1}>-</Button>
              <Button>{counter}</Button>
              <Button className={classes.buttom} onClick={()=> increment()}>+</Button>
          </ButtonGroup>
    )
}

export default CartButton;