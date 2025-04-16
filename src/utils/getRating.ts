function getRandomRating() {
  return parseFloat((Math.random() * 2 + 3).toFixed(2));  
}
export default getRandomRating;
