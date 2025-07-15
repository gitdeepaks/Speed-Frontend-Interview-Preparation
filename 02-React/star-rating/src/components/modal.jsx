import MyButton from './Button';

export const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You !</h2>
        <p>
          You rateed us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <MyButton className="close-btn" onClick={onClose}>
          Close
        </MyButton>
      </div>
    </div>
  );
};
