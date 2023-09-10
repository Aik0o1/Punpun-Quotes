type quoteData = {
    0: string;
    1: string
}

export const getQuote = async ():Promise<quoteData> => {
    const res = await fetch('https://api-punpun-quotes-j7vurtdxg-aik0o1.vercel.app/')
    const dados:quoteData = await res.json()
    return dados 
}