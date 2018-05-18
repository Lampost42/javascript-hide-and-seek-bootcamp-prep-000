function getFirstSelector(selector) {
  return (document.querySelector(selector))
}
function nestedTarget() {
  return(document.querySelector('#nested .target'))
}
function increaseRankBy(n) {
  var list = document.getElementByClassName('.ranked-list').querySelectorAll('li')
  for(i = 0; i < list.length; i++){
    list[i].innerHTML
  }
}