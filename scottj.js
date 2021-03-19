function colorFunc() {
  var element = document.body;
  var link = document.a;
  trans()
  element.classList.toggle("gray-mode");
  link.classList.toggle("gray-a");

}
 
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}
