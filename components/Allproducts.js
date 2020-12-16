import React, { Component } from "react";
import { Query } from "react-apollo";
import PRODUCTS_QUERY from "./Queries/all-products";
import AUTHORS_QUERY from "./Queries/authors.js";
import Product from "./Product";
import Cart from "./Cart";
import Navbar from "./Navbar";

class Allproducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartitems: [],
      show: false,
    };
  }
  addItem = (item) => {
    this.setState({
      cartitems: this.state.cartitems.concat([item]),
    });
  };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Query query={PRODUCTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            const items = data.productses;
            const itemssent = this.state.cartitems;
            return (
              <div>
                <Navbar cart={itemssent} show={this.showModal} />
                <Cart
                  show={this.state.show}
                  items={itemssent}
                  handleClose={this.hideModal}
                ></Cart>
                <div className="container mt-4">
                  <div className="row">
                    {items.map((item) => (
                      <Product
                        key={item.id}
                        product={item}
                        addItem={this.addItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          }}
        </Query>
        <div className="text-center">
          <h2>Authors</h2>
          <Query query={AUTHORS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>;
              if (error) return <div>Error</div>;
              const items = data.authors;
              return (
                <div>
                  {items.map((item) => (
                    <div>
                      <p>
                        {item.name}:{item.country},{item.age}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }}
          </Query>
          <button
            onClick={() => {
              alert("alert");
            }}
          >
            CLICK ME
          </button>
        </div>
      </>
    );
  }
}
export default Allproducts;
