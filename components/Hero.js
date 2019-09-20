import { DataContext } from '../pages/index';
import Button from './Button';
import reactStringReplace from 'react-string-replace';
import { useScrollTo } from '../hooks/useScrollTo';

const Hero = () => {
  const { hero } = React.useContext(DataContext);
  const { header, btns, img } = hero;
  const regexp = /\*\*(.*?)\*\*/g;
  return (
    <div className={`hero`}>
      <div className={`hero__header`}>
        <h1 className={`qc`}>
          {reactStringReplace(header, regexp, (match, i) => (
            <b key={i}>{match}</b>
          ))}
        </h1>
        <Button
          key={btns[0].target}
          handleClick={() => useScrollTo(btns[0].target)}
          className={`btn--red`}
        >
          {btns[0].displayName}
        </Button>
        <Button
          key={btns[1].target}
          handleClick={() => useScrollTo(btns[1].target)}
          className={`btn--ghost`}
        >
          {btns[1].displayName}
        </Button>
      </div>
      <div className={`hero__bg`}>
        <img src={`/static/img/${img}`} alt="" />
      </div>
      <div className={`hero__scroll`}>
        <img
          src={`/static/icons/scrollDown.svg`}
          alt=""
          onClick={() => useScrollTo(btns[1].target)}
        />
      </div>
    </div>
  );
};

export default Hero;
