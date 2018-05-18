function getFirstSelector(selector) {
  return (document.querySelector(selector))
}
function nestedTarget() {
  return(document.querySelector('#nested .target'))
}
function increaseRankBy(n) {
  var list = document.querySelector('.ranked-list').querySelectorAll('li')
  for(var i = 0; i < list.length; i++){
    list[i].innerText = parseInt(list[i].innerHTML) + n;
  }
}