const Button = ({ children, handleClick, className, style }) => {
  return (
    <button
      className={`btn rl ${className}`}
      onClick={handleClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
