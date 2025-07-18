const MyButton = ({ children, disabled, className, onClick }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
