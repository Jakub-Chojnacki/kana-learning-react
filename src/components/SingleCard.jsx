import styles from './SingleCard.module.css'
import Input from './UI/Input'
import {Fragment,useState} from 'react'

export default function SingleCard(props){

    const [answered,setAnswered] = useState(false)
    const [enteredRomaji, setEnteredRomaji] = useState('')
    const romajiChangeHandler = (event) => {
        setEnteredRomaji(event.target.value)
        if(event.target.value === props.romaji){
            setAnswered(true)
        }
        else{
            setAnswered(false)
        }
        console.log(enteredRomaji)
    }
    return(
        <div className={`${styles.card} ${answered && styles['card--answered']}`}>
            <div>{props.kana} </div> 
            <input type="text" value={enteredRomaji} onChange={romajiChangeHandler} />
        </div>
    )
}