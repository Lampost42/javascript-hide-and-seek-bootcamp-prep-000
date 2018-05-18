function getFirstSelector(selector) {
  return (document.querySelector(selector))
}
function nestedTarget() {
  return(document.querySelector('#nested .target'))
}
function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list')
  for(var i = 0; i < list.length; i++){
    list[i] = document.querySelectorAll('li')
  for(var a = 0; a < list[i].length; a++){
    list[i][a].innerText = parseInt(list[i][a].innerText) + n;
  }
  }
}