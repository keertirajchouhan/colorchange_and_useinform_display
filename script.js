const gamechanger=(event)=>{
    event.preventDefault()
    const name=document.getElementById('inputname').value.trim()
    const username=`${name}`
    document.getElementById('input-name').innerText=username


    
    
    
}

// color change

const red=()=>{
    const colorred=document.getElementById('box1')
    colorred.style.backgroundColor="red"
    colorred.style.color='white'

}

const blue=()=>{
    const colorred=document.getElementById('box2')
    colorred.style.backgroundColor="blue"
    colorred.style.color='white'

}

const green=()=>{
    const colorred=document.getElementById('box3')
    colorred.style.backgroundColor="green"
    colorred.style.color='white'

}

const yellow=()=>{
    const colorred=document.getElementById('box4')
    colorred.style.backgroundColor="yellow"
    colorred.style.color='white'

}