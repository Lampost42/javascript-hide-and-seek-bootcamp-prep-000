function getFirstSelector(selector) {
  return (document.querySelector(selector))
}
function nestedTarget() {
  return(document.querySelector('#nested .target'))
}
function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list le')
  for(var i = 0; i < list.length; i++){
    list[i][a].innerHTML = parseInt(list[i][a].innerHTML) + n;
  }
}