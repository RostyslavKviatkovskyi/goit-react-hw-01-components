import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export const StatisticsList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <StatisticsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
};

StatisticsList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
