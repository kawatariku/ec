import '../css/style.css'

const tab = document.querySelector('.tab')
const tabItems = [...tab.querySelectorAll('.tab-item')]
const tabContents =[...document.querySelectorAll('.tab-content')]

let currentNum = 0

console.log(tab,tabItems,tabContents)

tabItems.forEach((tabItem)=>{
  tabItem.addEventListener('click',(e) =>{

    const index = tabItems.indexOf(e.currentTarget)
    console.log(e.currentTarget, index)

  move(index)
  })
})
move(0)

function move(num){

  currentNum = num
  currentNum = Math.max(num, 0)
  currentNum = Math.min(currentNum, tabItems.length - 1)

  for(let i = 0;i < tabItems.length;i++){
    tabItems[i].classList.remove('on')
    tabContents[i].classList.remove('on')
  }

  tabItems[currentNum].classList.add('on')

  tabContents[currentNum].classList.add('on')
}
