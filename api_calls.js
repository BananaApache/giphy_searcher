var url = "url_here";

// XMLHttpRequest
var request = new XMLHttpRequest();

request.open("GET", url);
request.send();
request.addEventListener("load", function (e) {
  var data = e;
  console.log(data);
});

// fetch
fetch(url)
.then(res => res.json())
.then(data => );
