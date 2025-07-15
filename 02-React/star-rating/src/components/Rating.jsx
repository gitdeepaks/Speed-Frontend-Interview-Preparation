import { useState } from 'react';
import { Star } from './Star';
import { Modal } from './modal';
import MyButton from './Button';

export const Rating = ({ heading, color = 'gold', feedbackMessages }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 7 }, (_, i) => i + 1);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className="">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      <MyButton
        className="submit-btn"
        disabled={rating === 0}
        onClick={handleSubmit}
      >
        Submit
      </MyButton>
      {/* Modal */}
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};
