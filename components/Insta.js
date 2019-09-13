import useAbortableFetch from '../hooks/useAbortableFetch';
import ReactTimeAgo from 'react-time-ago';
import Header from './Header';
import { buildUrl } from 'react-instafeed';
import JavascriptTimeAgo from 'javascript-time-ago';
import cs from 'javascript-time-ago/locale/cs';
import { DataContext } from '../pages';

JavascriptTimeAgo.locale(cs);

const instaOptions = {
  accessToken: '8315964299.5fd0c6c.1385683a65b241b0bb362a26de43c844',
  clientId: '5fd0c6c651664685a05e1accb6b249fa',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: 'typography',
  userId: 8315964299
};

const Insta = () => {
  const { json, loading, error, abort } = useAbortableFetch(
    buildUrl(instaOptions)
  );
  const { instagram } = React.useContext(DataContext);
  if (json === null) return null;
  const data = json.data.splice(0, 3);
  const stripHashtags = string => {
    const regexp = new RegExp('#([^\\s]*)', 'g');
    return string.replace(regexp, '');
  };
  return (
    <React.Fragment>
      <Header header={instagram.header} />
      <div className={`insta rl`}>
        {data.map(({ images, user, created_time, caption, link, id }) => (
          <a className={`insta__item`} href={link} key={id}>
            <img src={images.standard_resolution.url} alt="" />
            <p>
              <b>{`${user.full_name}\u2001`}</b>
              {stripHashtags(caption.text)}
            </p>
            <small>
              <ReactTimeAgo date={created_time * 1000} locale={`cs`} />
            </small>
          </a>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Insta;
