function changeQuote(color) {
  var colorOfBody = document.body.style.background;
  const newQuote = document.getElementsByClassName("quote");
  const newAuthor = document.getElementsByClassName("author");
  console.log(colorOfBody )
  document.body.style.background = color; 
  document.body.style.color = color;
  document.getElementById('btn').style.background = color; 
  document.getElementById('twitterbackground').style.background = color;
  newQuote[0].innerHTML = "The purpose of our lives is to be happy.";
  newAuthor[0].innerHTML = "-Dalai Lama-";  
}