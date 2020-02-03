"use strict";

var element = React.createElement("div", {
  className: "intro"
}, React.createElement("h1", null, "Tejas Patil"), React.createElement("img", {
  src: "/images/image.jpg",
  width: "250px"
}), React.createElement("p", null, "Currently pursuing Master Science in Computer Science at San Diego State University.  Experienced in server-side services, object-oriented programming. Quickly learn and master new technologies; can work in both team and self-directed "), React.createElement("a", {
  href: "https://github.com/patiltejas25"
}, React.createElement("button", null, React.createElement("h2", null, "VIEW MY GITHUB REPO"))));
ReactDOM.render(element, document.getElementById('contents'));