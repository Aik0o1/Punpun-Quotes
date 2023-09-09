import {render, screen} from "@testing-library/react"
import Quotes from "./Quotes"

test("renderiza as frases", () =>{
    render(<Quotes quote="legal" falante="victor"/>)
    
    const quoteEl = screen.getByText(/legal/i)
    const falanteEl = screen.getByText(/victor/i)
    
    expect(quoteEl).toBeInTheDocument
    expect(falanteEl).toBeInTheDocument

})
