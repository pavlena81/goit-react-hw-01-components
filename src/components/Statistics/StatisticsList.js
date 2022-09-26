import PropTypes from 'prop-types';

import { List } from './Statistics.styled';
import { data } from 'components/data.json';

export const Statistics = ({stats}) => {
    return (
        
        <section className="statistics">
    <h2 className="title">Upload stats</h2>

    <List>
         {stats.map(( id, label, percentage) => (       
     <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    
     ))}     
  </List>
</section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            percentage: PropTypes.number,
        })).isRequired
};