import React from "react";
import Table from "../components/table/Table";
import customerList from "../data/customers-list.json";

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const tableHead = (item, index) => <th key={index}>{item}</th>;

const tableBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  return (
    <>
      <h2 className="page-header">customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <Table
                limit="20"
                headData={customerTableHead}
                renderHead={(item, index) => tableHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => tableBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
