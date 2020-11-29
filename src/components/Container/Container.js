import PropTypes from 'prop-types';
import s from './Container.module.css';

function Section({ children }) {
  return <div className={s.container}>{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
