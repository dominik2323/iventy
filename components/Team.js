import { DataContext } from '../pages';
import Header from './Header';

const Team = () => {
  const { team, globals } = React.useContext(DataContext);
  return (
    <div className={`team`} id={`team`}>
      <Header header={globals.teamHeader} />
      {team.map(({ id, name, list, img }) => (
        <div key={id} className={`team__member rl`}>
          <img src={`/static/img/${img}`} alt="" />
          <h3>{name}</h3>
          <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Team;
