import {render, screen} from "@testing-library/react"
import Button from "./Button"

test("Renderiza o botão com texto", ()=>{
    render(<Button onClick={()=>console.log('')}>legal</Button>)

    const buttonEl = screen.getByText(/legal/i)

    expect(buttonEl).toBeInTheDocument
})
