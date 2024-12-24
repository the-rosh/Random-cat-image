picid = document.getElementById('pic')



function newimg(){
let fetchedimg = fetch('https://api.thecatapi.com/v1/images/search')
fetchedimg.then((value)=>{
  console.log(value.ok)
  return value.json()}).then((response)=>{
imageurl = response[0].url
console.log(response, imageurl)
picid.style.background = `url(${imageurl})`+' center center / contain no-repeat rgba(106, 106, 106, 0.208)';

document.querySelector('.activity').setAttribute('hidden','True')
})
document.querySelector('#sourcetxt').innerHTML = 'Developed by Roshan | Images provided by API :- https://thecatapi.com/'

}
