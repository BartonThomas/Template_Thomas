

function addQuestion(){
  var line = document.createElement("p");
  line.setAttribute("class", "info");
  line.setAttribute("id", "line");
  line.innerHTML = "- " + document.getElementById("add").value;
  document.getElementById("infos").appendChild(line);
}