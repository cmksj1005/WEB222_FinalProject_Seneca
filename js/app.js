const { reviewData } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ reviewData }, "Review Data");

/*Submit event handler*/
var submit = document.getElementById("review_input");
submit.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("review_name");
  var date = document.getElementById("review_date");
  var rate = document.getElementById("review_rate");
  var comment = document.getElementById("review_comment");

  var review = {};

  review.name = name.value;
  review.date = date.value;
  review.rate = rate.value;
  review.comment = comment.value;

  var i = window.reviewData.length;
  window.reviewData[i] = review;

  /*Erase the original cards*/
  cards.innerHTML = "";

  /*Load the undated cards*/
  var i = 0;
  for (i = 0; i < window.reviewData.length; i++) {
    const card_no = document.createTextNode("No." + (i + 1));
    cards.appendChild(card_no);
    cards.appendChild(createReviewCard(window.reviewData[i]));
  }

  const review_date = document.querySelector("#review_date");
  review_date.value = todayDate();
});

/*Loading event handler*/
window.reviewData = addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelector("#cards");
  var i = 0;
  for (i = 0; i < window.reviewData.length; i++) {
    const card_no = document.createTextNode("No." + (i + 1));
    cards.appendChild(card_no);
    cards.appendChild(createReviewCard(window.reviewData[i]));
  }

  const review_date = document.querySelector("#review_date");
  review_date.value = todayDate();
});

/*Create card function*/
function createReviewCard(reviews) {
  const card = document.createElement("div");
  const card_name = document.createElement("div");
  card_name.classList.add("card_detail");
  const card_date = document.createElement("div");
  card_date.classList.add("card_detail");
  const card_rate = document.createElement("div");
  card_rate.classList.add("card_detail");
  const card_comment = document.createElement("div");
  card_comment.classList.add("card_detail");
  card.appendChild(card_name);
  card.appendChild(card_date);
  card.appendChild(card_rate);
  card.appendChild(card_comment);
  card.classList.add("card");

  const name_title = document.createTextNode("Name: ");
  const date_title = document.createTextNode("Date: ");
  const rate_title = document.createTextNode("Rate: ");
  const comment_title = document.createTextNode("Comment: ");

  var rate_star = "";
  for (var i = 0; i < reviews.rate; i++) {
    rate_star += "★";
  }

  if (reviews.rate < 5) {
    for (var i = 0; i < 5 - reviews.rate; i++) {
      rate_star += "☆";
    }
  }

  const name_content = document.createTextNode(reviews.name);
  const date_content = document.createTextNode(reviews.date);
  const rate_content = document.createTextNode(rate_star);
  const comment_content = document.createTextNode(reviews.comment);

  const h3_name = document.createElement("h3").cloneNode(true);
  const p_name = document.createElement("p").cloneNode(true);
  card_name.appendChild(h3_name);
  h3_name.appendChild(name_title);
  card_name.appendChild(p_name);
  p_name.appendChild(name_content);

  const h3_date = document.createElement("h3").cloneNode(true);
  const p_date = document.createElement("p").cloneNode(true);
  card_date.appendChild(h3_date);
  h3_date.appendChild(date_title);
  card_date.appendChild(p_date);
  p_date.appendChild(date_content);

  const h3_rate = document.createElement("h3").cloneNode(true);
  const p_rate = document.createElement("p").cloneNode(true);

  card_rate.appendChild(h3_rate);
  h3_rate.appendChild(rate_title);
  card_rate.appendChild(p_rate);
  p_rate.appendChild(rate_content);

  const h3_comment = document.createElement("h3").cloneNode(true);
  const p_comment = document.createElement("p").cloneNode(true);
  card_comment.appendChild(h3_comment);
  h3_comment.appendChild(comment_title);
  card_comment.appendChild(p_comment);
  p_comment.appendChild(comment_content);

  return card;
}

/*Today's date function*/
function todayDate() {
  var today = new Date();
  var dd = today.getDate();
  if (dd < 10) {
    dd = "0" + today.getDate();
  }
  var mm = today.getMonth() + 1;
  if (mm < 10) {
    mm = "0" + (today.getMonth() + 1);
  }
  var yyyy = today.getFullYear();
  today = yyyy + "/" + mm + "/" + dd;

  return today;
}
