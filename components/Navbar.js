import { DataContext } from '../pages/index';
import Button from './Button';
import posed from 'react-pose';
import { useScrollTo } from '../hooks/useScrollTo';
import ReactSVG from 'react-svg';
import { useShowNav } from '../hooks/useShowNav';

const NavbarContainer = posed.div({
  show: {
    y: 0,
    applyAtStart: {
      position: 'fixed',
      padding: '10px 15px',
      background: 'rgba(255,255,255,0.8)'
    },
    transition: { duration: 500 }
  },
  hide: {
    y: -200,
    applyAtEnd: { position: 'fixed' },
    transition: { duration: 500 }
  }
});

const NavbarMobileContent = posed.div({
  opened: {
    opacity: 1,
    beforeChildren: true,
    applyAtStart: { display: `flex` },
    staggerChildren: 50,
    transition: { duration: 400 }
  },
  closed: {
    opacity: 0,
    applyAtEnd: { display: `none` },
    afterChildren: true,
    staggerChildren: 50,
    transition: { duration: 400 }
  }
});

const NavItem = React.forwardRef(
  ({ id, displayName, className, handleClick }, ref) => {
    return (
      <div key={id} className={className} onClick={handleClick} ref={ref}>
        {displayName}
      </div>
    );
  }
);

const NavbarMobileContentItem = posed(NavItem)({
  opened: { x: 0, opacity: 1 },
  closed: { x: 20, opacity: 0 }
});

const NavbarMobileContentSocial = posed.div({
  opened: { x: 0, opacity: 1 },
  closed: { x: 20, opacity: 0 }
});

const NavbarMobile = ({ globals, navbar }) => {
  const [isNavOpen, toggleNav] = React.useState(false);
  const showNav = useShowNav();
  const { items } = navbar;
  React.useEffect(() => {
    if (!showNav) {
      toggleNav(false);
    }
  }, [showNav]);
  return (
    <div className={`navbar-mobile rl`}>
      <NavbarContainer
        pose={showNav ? `show` : `hide`}
        className={`navbar-mobile__topbar`}
      >
        <img
          className={`navbar-mobile__topbar__brand`}
          src={`/static/icons/${globals.logo}`}
          alt=""
        />
        <img
          className={`navbar-mobile__topbar__burger`}
          src={`/static/icons/${isNavOpen ? `close` : `burger`}.svg`}
          onClick={() => toggleNav(!isNavOpen)}
        />
      </NavbarContainer>
      <NavbarMobileContent
        pose={isNavOpen && showNav ? `opened` : `closed`}
        className={`navbar-mobile__content`}
      >
        <div className={`navbar-mobile__content__items`}>
          {items.map(({ id, displayName }) => (
            <NavbarMobileContentItem
              id={id}
              displayName={displayName}
              className={`navbar-mobile__content__items__item`}
              handleClick={() => {
                toggleNav(false);
                useScrollTo(id);
              }}
            />
          ))}
        </div>
        <NavbarMobileContentSocial className={`navbar-mobile__content__social`}>
          {globals.social.map(({ img, url }) => (
            <a key={url} href={url}>
              <ReactSVG src={`/static/icons/${img}`} />
            </a>
          ))}
        </NavbarMobileContentSocial>
      </NavbarMobileContent>
    </div>
  );
};

const Navbar = () => {
  const { navbar, globals } = React.useContext(DataContext);
  const [width, setWidth] = React.useState(0);
  const { items } = navbar;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width === 0) {
    return null;
  } else if (width <= 992) {
    return <NavbarMobile navbar={navbar} globals={globals} />;
  }

  return (
    <div className={`navbar rl`}>
      <div className={`navbar__brand`}>
        <img src={`/static/icons/${globals.logo}`} alt="" />
      </div>
      <div className={`navbar__items`}>
        {items.map(({ id, displayName }) => {
          if (id === 'contact') {
            return (
              <Button
                key={id}
                handleClick={() => useScrollTo(id)}
                className={`btn--contact`}
              >
                {displayName}
              </Button>
            );
          }
          return (
            <NavItem
              id={id}
              handleClick={() => useScrollTo(id)}
              displayName={displayName}
              className={`navbar__items__item`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
