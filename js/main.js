/*

//initial popup window
window.addEventListener("load", function () {
  this.setTimeout(
      function open(event) {
          document.querySelector(".popup").style.display = "block";
      },
      0
  )
});

//popup window interactions
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document.querySelector("#letsGo").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

*/

// add popup that displays web page information
var popup = d3.select("body")
.append("div")
.attr("class", "popup")
.html("<h3> Welcome to Polaris Lab UK !</h3> <ul align = 'left'> <li> <b> Attention user :</b> The site only designed to work on desktop and would <b>not</b> work on <b>mobile phones</b>.</li> <li>The UK interactive map displayed here does <b>not</b> contain information related to <b> Northern Ireland </b> and <b> Isle of Man</b>. Therefore, removed.</li> <li> Information displayed is calculated data from British Household Panel Survey (<b>BHPS</b>) via UK data service portal. Therefore prone to <b>errors</b>.</li> <li>Interact with map by <b>selecting</b> a <b>polarization method and statement</b> and an attribute. It has <b>three</b> methods - <b> Lindqvist Ã–stling </b>, <b> Abramowitz Saunders </b>, <b> Duca Saving </b>. <li> Where each polarization method is calculated using <b> three statements</b> (encoding each opinion as following - Strongly agree: 2, Agree: 1, Neither agree nor disagree: 0, Disagree: -1, Strongly disagree: -2) as follows: <ul> <li> Statement 1 (<b>S1</b>): 'Private enterprise is the best way to solve Britain economic problems'</li> <li> Statement 2 (<b>S2</b>): 'Major public services and industries ought to be in state ownership.'</li> <li> Statement 3 (<b>S3</b>): 'It is the government responsibility to provide a job for everyone who wants one'</li></li></ul> </li> <li><b>Select</b> a <b>year</b> from dropdown of available years: <b> 1995, 2000, 2004. </b> </li></ul> <p>By clicking 'OK' to continue, you accept that there errors in the calculations and map display, and they are acceptable.</p> </li> <button class='okBtn'><b>OK</b></button>");

// show popup when page loads
window.onload = function() {
    popup.style("display", "block");
}

// hide popup when user clicks "OK"
d3.select(".okBtn").on("click", closePopup);

// close popup function
function closePopup() {
  popup.style("display", "none");
}