import React, { Component } from 'react';

class Block extends Component {
  render() {
    const { timestamp, hash, data, id } = this.props.block;
    const blockNumber = this.props.id === 0 ?
                        "Genesis Block" :
                        this.props.id;
    const hashDisplay = `${hash.substring(0, 15)}...`;
    const stringifiedData = JSON.stringify(data);
    const dataDisplay = stringifiedData.length > 35 ?
          `${stringifiedData.substring(0, 35)}...` :
          stringifiedData;

    return (
      <div className='Block'>
        <div>Id: {blockNumber}</div>
        <div>Hash: {hashDisplay} </div>
        <div>Timestamp: {new Date(timestamp).toLocaleDateString()}</div>
        <div>Data: {dataDisplay}</div>
      </div>
    )
  }
};

export default Block;