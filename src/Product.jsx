import React, { Component } from "react";


class Product extends Component {
    state = {
        product: this.props.product
    };

    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {this.state.product.id}
                            <span
                                className="float-end hand-icon"
                                onClick={() => { this.props.onDelete(this.state.product) }}
                            >
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                        <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
                        <div>${this.state.product.price}</div>
                    </div>
                    {/* card body ends here */}

                    <div className="card-footer">
                        <div className="float-start">
                            <span className="me-2 bg">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => { this.props.onIncrement(this.props.product, 10) }}
                                >
                                    +
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => { this.props.onDecrement(this.props.product, 0) }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                        {/* float-left ends here */}

                        <div className="float-end">{this.props.children}</div>
                    </div>
                    {/* card footer ends here */}
                </div>
            </div>
        );
    }
}

export default Product;