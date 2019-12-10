
import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

const Menu = ({ id, name, deleteMenu }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <div className="center">
        <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      </div>
    </div>
    <Button 
      icon 
      color="red" 
      size="tiny" 
      onClick={() => deleteMenu(id)} 
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Menu;