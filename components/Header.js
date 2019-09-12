import reactStringReplace from 'react-string-replace';

const regexp = /\*\*(.*?)\*\*/g;

const Header = ({ header, paragraph, id }) => (
  <div className={`header`} id={id}>
    <h1 className={`qc`}>{header}</h1>
    <p className={`rl big`}>
      {reactStringReplace(paragraph, regexp, (match, i) => (
        <b key={i}>{match}</b>
      ))}
    </p>
  </div>
);

export default Header;
