import { DataContext } from '../pages';
import Header from './Header';

const Contact = () => {
  const { contact, globals } = React.useContext(DataContext);
  const { header, paragraph } = contact;
  return (
    <div id={`contact`}>
      <Header header={header} paragraph={paragraph} />
      <div className={`contact qc`}>
        <div className={`contact__email`}>
          <a href={`mailto: ${globals.email}`}>{globals.email}</a>
        </div>
        <div className={`contact__phone`}>{globals.phone}</div>
      </div>
    </div>
  );
};

export default Contact;
