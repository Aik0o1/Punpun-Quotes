type quoteData = {
    0: string;
    1: string
}

export const getQuote = async ():Promise<quoteData> => {
    const res = await fetch('http://localhost:5000')
    const dados:quoteData = await res.json()
    return dados 
}