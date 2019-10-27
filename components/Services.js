import { DataContext } from '../pages/index';
import { useScrollTo } from '../hooks/useScrollTo';
import Header from './Header';
import Button from './Button';

const Services = () => {
  const { services } = React.useContext(DataContext);
  const { header, list } = services;

  return (
    <div className={`services`} id={`services`}>
      <Header header={header} />
      {list.map(({ header, id, img, btn, paragraph }) => (
        <div key={id} className={`services__service`}>
          <div className={`services__service__content`}>
            <h2 className={`qc`}>{header}</h2>
            <p className={`rl`}>{paragraph}</p>
            <Button
              className={`btn--secondary`}
              handleClick={() => useScrollTo('contact')}
            >
              {btn}
            </Button>
          </div>
          <div className={`services__service__img`}>
            <img src={`/static/img/${img}`} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
