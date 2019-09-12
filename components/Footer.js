import { DataContext } from '../pages';
import { useScrollTo } from '../hooks/useScrollTo';

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
          {email}
          <br />
          {phone}
        </small>
        <small>
          {companyName}
          <br />
          {address}
        </small>
      </div>
      <div className={`footer__social`}>
        {social.map(({ img, url }) => {
          const chopImg = img.split('.');
          const imgName = chopImg[0];
          const imgExt = chopImg[1];
          return (
            <a
              href={url}
              key={url}
              style={{
                backgroundImage: `
                url(/static/icons/${imgName}${
                  hovered === url ? `_hover` : ``
                }.${imgExt})`
              }}
              onMouseEnter={() => setHovered(url)}
              onMouseLeave={() => setHovered('')}
            />
          );
        })}
      </div>
      <div className={`footer__copywrite`}>© Iventy 2019</div>
    </div>
  );
};

export default Footer;
