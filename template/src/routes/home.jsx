import HelloWord from "../components/HelloWord";
import { useSelector, useDispatch } from "react-redux";
import { setNumber } from "../features/number";
import { Button } from "@mui/material";

export default function Home(){
    const number = useSelector(state => state.number)
    const dispatch = useDispatch()

    return(
        <div style={{textAlign:'center'}}>
            <HelloWord />
            state: {number.number} 
            <br/>
            <Button variant="contained" style={{marginRight:'10px'}} onClick={() => {dispatch(setNumber(number.number+1))}}>Plus 1</Button>
            <Button variant="contained" onClick={() => {dispatch(setNumber(number.number-1))}}>Minus 1</Button>
        </div>
    )
}