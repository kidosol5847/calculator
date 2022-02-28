const btn = document.querySelectorAll('.btn')
const scn = document.querySelector('.scn')
const eb = document.querySelector('.btne')
const cb = document.querySelector('.btnc')

for(let i =0; i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        let n = btn[i].getAttribute('data-null')
        scn.value += n
    })
}

eb.addEventListener('click',function(){
    if(scn.value === ""){
        alert('input is empty')
    } else {
        let value = eval(scn.value);
        scn.value = value
    }
    
})

cb.addEventListener('click',function(){
    scn.value = ''
})
