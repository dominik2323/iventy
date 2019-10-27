import { DataContext } from '../pages';
import { useScrollTo } from '../hooks/useScrollTo';
import posed from 'react-pose';
import Header from './Header';
import Button from './Button';
import ReactSVG from 'react-svg';

const PosedItem = posed.div({
  hovered: {
    y: -10,
    boxShadow: '5px 10px 50px rgba(80, 76, 114, 0.2)',
    scale: 1.01
  },
  default: { y: 0, boxShadow: '5px 10px 8px rgba(80, 76, 114, 0.2)', scale: 1 }
});

const PosedIcon = posed.div({
  hovered: {
    boxShadow: '0px 20px 20px rgba(80, 76, 114, 0.2)',
    scale: 1.1,
    y: -20
  },
  default: {
    boxShadow: '0px 10px 10px rgba(80, 76, 114, 0.2)',
    scale: 1,
    y: 0
  }
});

const Pricing = () => {
  const { pricing } = React.useContext(DataContext);
  const [hover, setHover] = React.useState('');
  const { header, list, paragraph, currency } = pricing;
  return (
    <div className={`pricing`} id={`pricing`}>
      <Header header={header} paragraph={paragraph} />
      <div className={`pricing__items rl`}>
        {list.map(({ img, id, btn, price, name, scale, list }) => (
          <PosedItem
            key={id}
            id={id}
            pose={hover === id ? `hovered` : `default`}
            className={`pricing__items__item`}
            onMouseEnter={e => setHover(e.currentTarget.id)}
            onMouseLeave={() => setHover('')}
          >
            <PosedIcon
              className={`pricing__items__item__icon ${
                hover === id ? `hovered` : `default`
              }`}
              pose={hover === id ? `hovered` : `default`}
            >
              <ReactSVG src={`/static/icons/${img}`} alt="" />
            </PosedIcon>
            <h4>{name}</h4>
            <p>
              <span className={`qc`}>{`${price} ${currency}`}</span>
              {`\u2002/\u2002${scale}`}
            </p>
            <ul>
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Button
              className={`btn--secondary`}
              handleClick={() => useScrollTo('contact')}
            >
              {btn}
            </Button>
          </PosedItem>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
