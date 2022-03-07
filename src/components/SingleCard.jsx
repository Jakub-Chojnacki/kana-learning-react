import styles from './SingleCard.module.css'
import Input from './UI/Input'
import {Fragment,useState,useReducer} from 'react'

export default function SingleCard(props){

    const ACTIONS = {
        CORRECT: 'correct',
        WRONG: 'wrong',
        RESET: 'reset'
    }
    function reducer(state,action){
        switch(action.type){
            case ACTIONS.CORRECT:
                return {answered:true, correct: true }
            case ACTIONS.WRONG:
                return { answered:true, correct: false}
            case ACTIONS.RESET:
                return {answered:false}    
            default:
                return state    
        }
    }
    function blurCardHandler(){
        setFocused(false)
    }
    function focusCardHandler(){
        setFocused(true)
    }

    const [answer,dispatch] = useReducer(reducer, {answered: false})
    const [enteredRomaji, setEnteredRomaji] = useState('')
    const [focused,setFocused] = useState(false)
    const romajiChangeHandler = (event) => {
        
        setEnteredRomaji(event.target.value)
      
    }
    const romajiValidationHandler = (event) => {
        
        if(event.target.value === props.romaji && event.target.value.trim() != ''){
            dispatch({type:ACTIONS.CORRECT})
        }
        else if(event.target.value != props.romaji && event.target.value.trim() !=''){
            dispatch({type:ACTIONS.WRONG})
        }
        else {
            dispatch({type:ACTIONS.RESET})
        }
        
    }
    return(
        <div onFocus={focusCardHandler} onBlur={blurCardHandler} className={`${styles.card} ${answer.correct && answer.answered && styles['card--answered']} ${!answer.correct && answer.answered && styles['card--wrong']} ${focused && styles['card--focused']}`}>
            <div>{props.kana} </div> 
            <input className={styles.input} type="text" value={enteredRomaji} onChange={romajiChangeHandler} onBlur={romajiValidationHandler} disabled={answer.correct} />
        </div>
    )
}