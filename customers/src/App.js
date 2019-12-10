import React from 'react';
import axios from "axios";
import {Container, }from "semantic-ui-react";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";

class App extends React.Component {
  state = { menus: [], };

componentDidMount() {
  axios.get("/api/menus")
    .then(res => {
       this.setState({menus: res.data, });
  })
  .catch( err => {
    console.log(err);
  })
};

addMenu = (name) => {
  axios.post(`/api/menus`, { name })
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: [...menus, res.data], });
    })
  }

updateMenu = (id) => {
  axios.put(`/api/menus/${id}`)
  .then( res => {
    const menus = this.state.menus.map( m => {
    if (m.id === id)
      return res.data;
    return m;
  });
  this.setState({ menus, });
})
}

deleteMenu = (id) => {
  axios.delete(`/api/menus/${id}`)
  .then( res => {
    const { menus, } = this.state;
    this.setState({ menus: menus.filter(m => m.id !== id), })
  })
}

render() {
  return(
    <Container style={{ padding: "30px 0" }}>
        <h1>Menu List</h1>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          deleteMenu={this.deleteMenu}
          updateMenu={this.updateMenu}
        />
      </Container>
    );
  };
};

export default App;
