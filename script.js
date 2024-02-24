const inputEl=document.querySelector('.inpur')
const buEl=document.getElementsByTagName('button')[0]
const spanEl=document.getElementsByTagName('span')[0]
const h4El=document.getElementsByTagName('h5')[0]
const todayDate=new Date().getFullYear()

let year;
const regex=/\d{4}/g
buEl.onclick=(e)=>{
    e.preventDefault()
    console.log(inputEl.value)
    const userAge=inputEl.value
    if(userAge===""){
        callfun()
    
    }
    let yre=userAge.match(regex)
    yre=+yre[0]
year=todayDate-yre
    console.log(spanEl)
    spanEl.innerText=year
    inputEl.value=''
}
function callfun(){
    h4El.innerText='Please Enter A valid Date with month, day and year'
    setTimeout(()=>{
        h4El.innerText='Enter your date of birth:'
    },4500)
}