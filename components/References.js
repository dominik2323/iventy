import { DataContext } from '../pages';
import posed, { PoseGroup } from 'react-pose';
import Header from './Header';

const References = () => {
  const [index, setIndex] = React.useState(0);
  const [type, setType] = React.useState('');
  const { references } = React.useContext(DataContext);
  const { header, list } = references;
  const numOfEntries = list.length;

  const handleInc = () => {
    if (index + 1 === numOfEntries) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setType('INC');
  };

  const handleDec = () => {
    if (index === 0) {
      setIndex(numOfEntries - 1);
    } else {
      setIndex(index - 1);
    }
    setType('DEC');
  };

  const PosedReference = posed.div({
    preEnter: {
      x: ({ prop }) => (prop === `DEC` ? '100%' : `-100%`),
      opacity: 0
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 30 }
    },
    exit: {
      x: ({ prop }) => (prop === `DEC` ? '-100%' : `100%`),
      opacity: 0,
      transition: { type: 'spring', stiffness: 80, damping: 30 }
    }
  });

  return (
    <div className={`references rl`} id={`reference`}>
      <Header header={header} />
      <div className={`references__content`}>
        <div
          className={`references__content__arrows references__content__arrows--left`}
          onClick={handleDec}
        />
        <div className={`references__content__reference-container`}>
          <PoseGroup preEnterPose={`preEnter`} prop={type}>
            <PosedReference
              key={index}
              className={`references__content__reference-container__reference`}
            >
              <img src={`/static/img/reference/${list[index].photo}`} alt="" />
              <p
                className={`big references__content__reference-container__reference__quote`}
              >
                {list[index].quote}
              </p>
              <p>
                <b>{list[index].name}</b>
              </p>
              <small>{list[index].service}</small>
            </PosedReference>
          </PoseGroup>
        </div>
        <div
          className={`references__content__arrows references__content__arrows--right`}
          onClick={handleInc}
        />
      </div>
      <div className={`references__dots`}>
        {list.map(({ name }, i) => (
          <div
            key={name}
            className={`references__dots__dot ${
              index === i ? `active` : `inactive`
            }`}
            onClick={() => {
              setType(index > i ? `DEC` : `INC`);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default References;
