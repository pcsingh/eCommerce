import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
    state = {
        products: []
    };
    render() {
        return (
            <div>
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return (
                            <Product
                                key={prod.id}
                                product={prod}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            >
                                <button className="btn btn-primary">Buy Now</button>
                            </Product>
                        );
                    })}
                </div>
            </div>
        );
    }
    // render ends here

    componentDidMount = async () => {
        //fetch data from data source

        // without async & await
        // var promise = fetch("http://localhost:5000/products", { method: "GET" });
        // promise.then((response) => {
        //     var promise2 = response.json();
        //     promise2.then((prods) => {
        //         this.setState({ products: prods });
        //     });
        // });

        // with async & await
        var response = await fetch("http://localhost:5000/products", { method: "GET" });
        var prods = await response.json();

        this.setState({ products: prods });
    }

    handleIncrement = (product, maxValue) => {
        let index = this.state.products.indexOf(product)
        let allProducts = [...this.state.products]
        if (allProducts[index].quantity < maxValue) {
            allProducts[index].quantity++;
            this.setState({ products: allProducts });
        }

    }

    handleDecrement = (product, minValue) => {
        let index = this.state.products.indexOf(product)
        let allProducts = [...this.state.products]
        if (allProducts[index].quantity > minValue) {
            allProducts[index].quantity--;
            this.setState({ products: allProducts });
        }
    }

    handleDelete = (product) => {
        let index = this.state.products.indexOf(product)
        let allProducts = [...this.state.products]
        if (window.confirm("Are you sure to delete?")) {
            // delete product based on index
            allProducts.splice(index, 1);

            // update the state of current component (parent component)
            this.setState({ products: allProducts });
        }
    }
}

export default ShoppingCart;