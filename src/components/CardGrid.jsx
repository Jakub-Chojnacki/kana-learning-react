import styles from './CardGrid.module.css';
import SingleCard from './SingleCard'
import {useState} from 'react'
export default function CardGrid(props){
    const [data,setData] =useState({})

   const getData = () => {
       fetch('/public/kana.json')
       .then(res=> {
           return res.json();
       })
       .then(kana => {
           console.log(kana.k.a.Seion.Hiragana)
           setData(kana)
       })
   }

 
    // const hiraganaCards = kana.map((hiragana)=>{
    //     return <SingleCard kana={hiragana.k.a.Seion.Hiragana} key={hiragana.toString()}/>
    // })
    return(
        <div className="Card_Grid">
            <SingleCard kana={'あ'} romaji={'a'}/>
            <SingleCard kana={'す'} romaji={'su'}/>
            {/* {hiraganaCards} */}
             <button onClick={getData}>getkana</button>
        </div>
       
    )
    
}