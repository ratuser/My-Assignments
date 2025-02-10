let url='https://dummyjson.com/quotes'
var data,response,arr_data;
let box=document.getElementById('container')
let btn=document.getElementById('btn')
let quote=document.getElementById('quote')
let author=document.getElementById('author')
async function getData(){
        response =await fetch(url)
        data=await response.json()
        arr_data=data.quotes
        console.log(arr_data)
}
btn.addEventListener('click',()=>{
    const randomindex=Math.floor(Math.random() * arr_data.length)
    const randomquote=arr_data[randomindex]
    quote.innerText=`${randomquote.quote}`
    author.innerText=`${randomquote.author}`
})
getData()