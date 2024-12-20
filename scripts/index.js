const buttons = document.querySelectorAll('.list .btn')

buttons.forEach(item => {
  item.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active__btn'))
    item.classList.add('active__btn')
  })
})

