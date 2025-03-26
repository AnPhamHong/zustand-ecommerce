import "../../styles/pages/CustomerReviews.scss";
import StarRating from "../UI/StarRating";

const reviews = [
  {
    id: 1,
    rating: 5,
    name: "JULIA KEYS",
    text:
      "“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”",
    img:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    rating: 4.3,
    name: "LUIS ADRIAN",
    text:
      "“Non malesuada fringilla non varius odio in id pellentesque aliquam volutpat sapien faucibus ”",
    img:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    rating: 4.9,
    name: "MARIA ANNA",
    text: "“Tortor suspendisse tincidunt accumsan platea pellentesque hac.”",
    img:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function CustomerReviews() {
  return (
    <section className="reviews-container-sub">
      <div className="reviews-container">
        <h2 className="reviews-title">Our Customers speak for us</h2>
        <div className="reviews-grid">
          {reviews.map((review) => {
            return (
              <div className="review-card" key={review.id}>
                <div className="review-stars">
                  <StarRating rating={review.rating} />
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-user">
                  <img src={review.img} alt={review.name} />
                  <span>{review.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="reviews-rating">4.8 average rating from 1814 reviews</p>
      </div>
    </section>
  );
}

export default CustomerReviews;
