const quote = document.getElementById('quote');
const index = document.getElementById('index');
const anchor = document.getElementById('anchor');

anchor.addEventListener('click', ()=>{
    data()
})


const data = async ()=>{
    const response = await fetch('https://api.adviceslip.com/advice');
    const json = await response.json();
    console.log(json.slip.id);

    index.innerHTML = `Advice #${json.slip.id}`;
    quote.innerHTML =  `"${json.slip.advice}"`



}

data()