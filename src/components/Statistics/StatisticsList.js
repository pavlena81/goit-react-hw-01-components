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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,   
    }))
};

function RandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}