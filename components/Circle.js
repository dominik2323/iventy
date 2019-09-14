// smth
const Circle = ({ size, side, color, x = 0, y = 0, forMobile }) => {
  return (
    <div
      className={`
        circle 
        ${size}
        ${side}
        ${color}
        ${forMobile ? `for-mobile` : ``}
      `}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  );
};

export default Circle;
