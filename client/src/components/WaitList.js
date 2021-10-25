import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getWaitListQuery = gql`
  {
    customers {
      name
      hp
      timestamp
    }
  }
`;

class WaitList extends Component {
  // displayCustomers(){
  //     var data = this.props.data
  //     if (data.loading){
  //         return (<div>Loading Wait List</div>)
  //     } else {
  //         return data.books.map()
  //     }
  // }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="wait-list">
          <li>Customer Name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getWaitListQuery)(WaitList);
