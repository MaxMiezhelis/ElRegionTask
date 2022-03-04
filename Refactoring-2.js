function drawRating(vote) {
  let countStars = Math.ceil(vote / 20);
  let stringStars = "";
  for (let i = 0; i < 5; i++) {
    stringStars += i >= countStars ? "☆" : "★";
  }
  return stringStars;
}
