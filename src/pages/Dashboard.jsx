import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import Badge from "../components/badge/Badge";
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";
import status_card from "../data/status-card-data.json";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "CR7",
      order: "4",
      price: "$19.50",
    },
    {
      username: "Leo Messi",
      order: "12",
      price: "$40.95",
    },
    {
      username: "david luiz",
      order: "32",
      price: "$22.80",
    },
    {
      username: "tiago silva",
      order: "15",
      price: "$83.80",
    },
    {
      username: "bruno",
      order: "7",
      price: "$54.10",
    },
  ],
};

const customerHead = (item, index) => <th key={index}>{item}</th>;

const customerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const orderHead = (item, index) => <th key={index}>{item}</th>;

const orderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <>
      <div>
        <h2 className="page-header">Dashboard</h2>
        <div className="row">
          <div className="col-6">
            <div className="row">
              {status_card.map((item, index) => (
                <div className="col-6" key={index}>
                  <StatusCard
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="card full-height">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="line"
                height="100%"
              />
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-header">
                <h3>top customers</h3>
              </div>
              <div className="card-body">
                <Table
                  headData={topCustomers.head}
                  renderHead={(item, index) => customerHead(item, index)}
                  bodyData={topCustomers.body}
                  renderBody={(item, index) => customerBody(item, index)}
                />
              </div>
              <div className="card-footer">
                <Link to="/">View All</Link>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="card">
              <div className="card-header">
                <h3>latest orders</h3>
              </div>
              <div className="card-body">
                <Table
                  headData={latestOrders.header}
                  renderHead={(item, index) => orderHead(item, index)}
                  bodyData={latestOrders.body}
                  renderBody={(item, index) => orderBody(item, index)}
                />
              </div>
              <div className="card-footer">
                <Link to="/">View All</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
