(function(){
  const cartbtn = document.querySelectorAll('.cart-add')

  cartbtn.forEach(function(btn){
    btn.addEventListener('click',function(event){
      console.log(event.target)
    })
  })
}
)