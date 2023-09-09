import React from "react"
import "./Quotes.css"

type quotesProps = {
    quote: string;
    falante: string;
}

const Quotes: React.FC<quotesProps> = props => {
    return (
        <div>
            <div className="quotes">
                <p>{props.quote}</p>
                <p>-{props.falante}</p>
            </div>
        </div>
    )
}

export default Quotes