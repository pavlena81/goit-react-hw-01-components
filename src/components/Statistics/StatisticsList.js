import PropTypes from 'prop-types';

import { Container, Title, List, ItemList, CellItem} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        
    <Container>
        {title && <Title>{title}</Title>}
    

    <List>
        {stats.map(({ id, label, percentage }) => (  
          
            <ItemList key={id} style= {{backgroundColor: RandomHexColor()}}>
      <CellItem>{label}</CellItem>
      <CellItem>{percentage}%</CellItem>
    </ItemList>
    
     ))}     
  </List>
</Container>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
};

function RandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}