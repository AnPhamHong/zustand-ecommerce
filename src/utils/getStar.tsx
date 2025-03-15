import { AiFillStar } from "react-icons/ai";

function renderStar(rating: number) {
  return (
    <>
      {Array.from({ length: rating }).map((_, i) => (
        <AiFillStar key={i} className="rating-star" />
      ))}
    </>
  );
}

export default renderStar;
