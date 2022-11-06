import PropTypes from 'prop-types';
import { Box } from '../Box/Box';

export const Statistics = ({ title, children }) => {
  return (
    <Box bg="secondary">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
