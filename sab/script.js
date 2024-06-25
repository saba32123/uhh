const api_url = "htpps://api.quotable.io/random"
 
async function getQuote(url){
    const response = await fetch(url)
    var data = await response.json()
    quote.innerHTML = data.content
    author.innerHTML = data.author
    console.log(data)
}

getQuote(api_url)

const quote = document.getElementById('quote')
const author = document.getElementById('author')