import styles from './CardGrid.module.css';
import SingleCard from './SingleCard'
export default function CardGrid(props){
    const hiraganaArray = [
        
    ]

    const hiraganaCards = hiraganaArray.map((hiragana)=>{
        return <SingleCard kana={hiragana} key={hiragana.toString()}/>
    })
    return(
        <div className="Card_Grid">
            <SingleCard kana={'あ'} romaji={'a'}/>
             {hiraganaCards}
        </div>
       
    )
    
}