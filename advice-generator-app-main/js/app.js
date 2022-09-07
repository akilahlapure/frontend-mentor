async function getAdvice(){
    let url = 'https://api.adviceslip.com/advice';

    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderAdvice(){
    let data = await getAdvice();
    let advice_id = data.slip.id;
    let advice_quote = data.slip.advice;
    
    let id = document.getElementById("adviceID");
    let quote = document.getElementById("adviceQuote")

    id.innerHTML = advice_id;
    quote.innerHTML = advice_quote;
}