import PropTypes from 'prop-types';

import { Container, Title, List, ItemList} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        
    <Container>
        {title && <Title>{title}</Title>}
    

    <List>
        {stats.map(({ id, label, percentage }) => (       
     <ItemList key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </ItemList>
    
     ))}     
  </List>
</Container>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
};