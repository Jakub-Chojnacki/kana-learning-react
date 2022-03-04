import styles from './SingleCard.module.css'
import Input from './UI/Input'
import {Fragment} from 'react'
export default function SingleCard(props){
    return(
        <div className={styles.card}>
            <div>あ</div> 
            <Input/>
        </div>
    )
}