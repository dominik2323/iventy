import { DataContext } from '../pages';
import { useScrollTo } from '../hooks/useScrollTo';
import ReactSVG from 'react-svg';

const Footer = () => {
  const { globals, footer, navbar, contact } = React.useContext(DataContext);
  const [hovered, setHovered] = React.useState('');
  const { name, email, phone, companyName, address, social, logo } = globals;
  return (
    <div className={`footer rl`}>
      <div className={`footer__brand`}>
        <img src={`static/icons/${logo}`} alt="" />
      </div>
      <div className={`footer__nav`}>
        <ul>
          {navbar.items.map(({ displayName, id }) => (
            <li key={id} onClick={() => useScrollTo(id)}>
              <p>{displayName}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`footer__contact`}>
        <p>{contact.headerForContactInfo}</p>
        <small>{name}</small>
        <small>
          <a href={`mailto: ${email}`}>{email}</a>
          <br />
          <a href={`tel: ${phone}`}>{phone}</a>
        </small>
        {/*<small>
          {companyName}
          <br />
          {address}
        </small>*/}
      </div>
      <div className={`footer__social`}>
        {social.map(({ img, url }) => {
          return (
            <a href={url} key={url} className={`footer__social__link`}>
              <ReactSVG src={`/static/icons/${img}`} />
            </a>
          );
        })}
      </div>
      <div className={`footer__copywrite`}>© Iventy 2019</div>
    </div>
  );
};

export default Footer;
