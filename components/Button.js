const Button = ({ children, handleClick, className, style }) => {
  return (
    <button className={`btn ${className}`} onClick={handleClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
