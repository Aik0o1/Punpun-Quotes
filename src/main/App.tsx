import React, { useState, useEffect } from "react"
import "./App.css"
import Quotes from "../components/quotes/Quotes"
import Button from "../components/button/Button"
import punpunImg from "../assets/punpun2.png"

import { getQuote } from "../services/quotesService/quoteService"

type quoteState = {
    0: string;
    1: string
}

 const App = () => {
    const [quote, setQuote] = useState<quoteState>({0:'', 1:''})

    const onUpdate = async () => {
      const newQuote = await getQuote()
      setQuote(newQuote)
    }

    useEffect(()=>{
        onUpdate()
    },[])

    return (
        <div className="container">
            <div className="main">
                <div className="containerQuotes">
                    <Quotes quote={quote[1]} falante={quote[0]}></Quotes>
                </div>
                <Button onClick={onUpdate}>random quote</Button>
            </div>
            
            <img className="punpun" src={punpunImg} alt="punpun" />
        </div>
        
    )
}
export default App

