import PropTypes from 'prop-types';
import {} from './Statistics.styled';

export const Statistics = ({ title, children }) => {
  return (
    <div className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
