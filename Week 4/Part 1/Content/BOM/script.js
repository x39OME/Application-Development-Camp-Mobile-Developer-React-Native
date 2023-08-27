
var childWindow;
function openWin() {
  childWindow = open("./Child.html", "_blank", "width=300px, hieght=300px");
}
function closeWin() {
  childWindow.close()
}