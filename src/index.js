import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

function generateRows(){
  return products.map(el => {
    return <TableRow>
              <TableRowColumn>{el.id}</TableRowColumn>
              <TableRowColumn>{el.name}</TableRowColumn>
              <TableRowColumn>{el.price}</TableRowColumn>
          </TableRow>
    })
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MuiTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {generateRows()}
    </TableBody>
  </Table>
);

const App = () => (
  <MuiThemeProvider>
    <MuiTable />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('index')
);