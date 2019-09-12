const Circle = ({ size, side, color, x = 0, y = 0 }) => {
  return (
    <div
      className={`
        circle 
        ${size}
        ${side}
        ${color}
      `}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  );
};

export default Circle;
