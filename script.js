let toggle= document.querySelector('#toggle')
let price1 = document.querySelector('.price1')
let price2 = document.querySelector('.price2')
let price3 = document.querySelector('.price3')

let checked=1

toggle.addEventListener('click', function(){
    checked++
    if(checked%2 != 0){
        price1.innerText='$19.99'
        price2.innerText='$24.99'
        price3.innerText='$39.99'
    } else {
        price1.innerText='$199.99'
        price2.innerText='$249.99'
        price3.innerText='$399.99'
    }

    console.log(checked)
})

//problems
//how to change styling on one element by hovering another
//how bto change styling on two elements simultaneously (ie. button hover and section hover)