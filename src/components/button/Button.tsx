import React from "react"
import "./Button.css"

type buttonProps = {
    children: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button:React.FC<buttonProps> = props => {
    return (
        <button onClick={props.onClick} className="gerar">{props.children}</button>            
    )
}

export default Button