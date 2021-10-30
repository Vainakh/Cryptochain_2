import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

class Block extends Component {
  state = { displayTransaction: false };

  toggleTransaction = () => {
    this.setState({ displayTransaction: !this.state.displayTransaction });
  }

  get displayTransaction() {
    const { data } = this.props.block;

    const stringifiedData = JSON.stringify(data);
    const dataDisplay = stringifiedData.length > 35 ?
          `${stringifiedData.substring(0, 35)}...` :
          stringifiedData;

    if (this.state.displayTransaction) {
      return (
          <div>
              {
                data.map(transaction => (
                  <div key={transaction.id}>
                    <hr />
                    <Transaction transaction={transaction}/>
                  </div>
                ))
              }
              <br />
              <Button
              bsstyle="danger"
              bssize="small"
              onClick={this.toggleTransaction}
            >
              Show Less
            </Button>
          </div>
        )
      }

    return (
      <div>
        <div>Data: {dataDisplay}</div>
        <Button
          className="blockButton"
          bssize="small"
          onClick={this.toggleTransaction}
        >
          Show More
        </Button>
      </div>
    )
  }

  render() {
    console.log('this.displayTransaction', this.displayTransaction)
    const { timestamp, hash, id } = this.props.block;
    const blockNumber = this.props.id === 0 ?
                        "Genesis Block" :
                        this.props.id;
    const hashDisplay = `${hash.substring(0, 15)}...`;

    return (
      <div className='Block'>
        <div>Id: {blockNumber}</div>
        <div>Hash: {hashDisplay} </div>
        <div>Timestamp: {new Date(timestamp).toLocaleDateString()}</div>
        {this.displayTransaction}
      </div>
    )
  }
};

export default Block;