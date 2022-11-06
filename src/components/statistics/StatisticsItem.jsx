import PropTypes from 'prop-types';
import { Li } from './Statistics.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Li>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </Li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
