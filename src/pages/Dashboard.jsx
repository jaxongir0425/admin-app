import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Badge from "../components/badge/Badge";
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";
import ThemeAction from "../redux/actions/ThemeAction";

import status_card from "../data/status-card-data.json";
import chartOptions from "../data/chartOptions.json";
import topCustomers from "../data/topCustomers.json";
import latestOrders from "../data/latestOrders.json";
import orderStatus from "../data/orderStatus.json";

const customerHead = (item, index) => <th key={index}>{item}</th>;

const customerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

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
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ThemeAction.getTheme());
  });

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
                options={
                  themeReducer === "theme-mode-dark"
                    ? { ...chartOptions.options, theme: { mode: "dark" } }
                    : { ...chartOptions.options, theme: { mode: "light" } }
                }
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
