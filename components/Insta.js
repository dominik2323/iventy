import useAbortableFetch from '../hooks/useAbortableFetch';
import ReactTimeAgo from 'react-time-ago';
import Header from './Header';
import { buildUrl } from 'react-instafeed';
import JavascriptTimeAgo from 'javascript-time-ago';
import cs from 'javascript-time-ago/locale/cs';
import { DataContext } from '../pages';

JavascriptTimeAgo.locale(cs);

const instaOptions = {
  accessToken: '1274241575.15b9417.fce0c5e98bae4ad6a12f73b2203190fb',
  clientId: '15b9417b7ced47399c653e790b7fe337',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: 'typography',
  userId: 1274241575
};

const Insta = () => {
  const { json, loading, error, abort } = useAbortableFetch(
    buildUrl(instaOptions)
  );
  const { instagram } = React.useContext(DataContext);
  if (json === null) return null;
  const data = json.data.splice(0, 3);
  return (
    <React.Fragment>
      <Header header={instagram.header} />
      <div className={`insta rl`}>
        {data.map(({ images, user, created_time }) => (
          <div className={`insta__item`}>
            <img src={images.standard_resolution.url} alt="" />
            <p>
              <b>{`${user.full_name}\u2001`}</b>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi
            </p>
            <small>
              <ReactTimeAgo date={created_time * 1000} locale={`cs`} />
            </small>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Insta;
