import React, { Component } from "react";

class CustomersList extends Component {
    state = {
        pageTitle: "Customers",
        customersCount: 0,
        customers: []
    };


    getCustomerColor = (custName) => {
        if (custName.startsWith('S')) return "green-highlight"
        else if (custName.startsWith('J')) return "red-highlight"
        else return ""
    }

    render() {
        return (
            <div>
                <h4 className="m-1 p-1">
                    {this.state.pageTitle}
                    <span className="m-2 bg-secondary badge">
                        {this.state.customersCount}
                    </span>

                    <button className="btn btn-info" onClick={this.onRefreshClick}>
                        <i className="me-1 fa fa-refresh"></i>Refresh
                    </button>
                </h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
        );
    }
    // condition using function
    getPhoneToRender(cust) {
        if (cust.phone) return cust.phone
        else {
            return <div>No Phone</div>;
        }
    }

    // Executes when the user clicks on Refresh button
    onRefreshClick = async () => {
        // setState predefined method
        var response = await fetch("http://localhost:5000/customers", { method: "GET" });
        var custs = await response.json();
        this.setState({ customers: custs, customersCount: custs.length });
    }

    getCustomerRow = () => {
        return (
            this.state.customers.map((cust, index) => {
                return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>
                            <img src={cust.photo} alt="Customer" />
                            <div>
                                <button className="btn btn-sm btn-secondary" onClick={() => { this.onClickChangePicture(cust, index); }}>
                                    Change Picture
                                </button>
                            </div>
                        </td>
                        <td className={this.getCustomerColor(cust.name)}>{cust.name}</td>
                        <td>
                            {/* {cust.phone ? cust.phone : <div>No Phone</div>} */}
                            {this.getPhoneToRender(cust)}
                        </td>
                        <td>{cust.city}</td>
                    </tr>
                );
            })
        );
    }

    // Changed the photo onClick
    onClickChangePicture = (cust, index) => {
        var custArr = this.state.customers;
        custArr[index].photo = "https://picsum.photos/id/1020/60";
        // updates the customer array
        this.setState({ customers: custArr });
    };
}

export default CustomersList;