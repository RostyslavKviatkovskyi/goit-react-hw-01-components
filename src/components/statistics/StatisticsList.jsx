import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { Ul } from './Statistics.styled';

export const StatisticsList = ({ items }) => {
  return (
    <Ul className="stat-list">
      {items.map(item => (
        <StatisticsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </Ul>
  );
};

StatisticsList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
