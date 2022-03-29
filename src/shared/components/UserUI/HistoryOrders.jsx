import React, { useState } from "react";
import Map from "./Table/Map";
import Table, { SelectColumnFilter, StatusPill, LocateCell } from "./Table/Table";

import { MapProvider } from "./Table/Map-context";


/*const getData = () => [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: 123,
    department: "Optimization",
    status: "Active",
    role: "Jumia express",
    locate:2,
    posCoords: [260, 900],
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    locate: "Locate",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "delivery",
    role: "Member",
    locate: "Locate",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "onway",
    role: "Member",
    locate: "Locate",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "cancel",
    role: "Admin",
    locate: "Locate",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    locate: "Locate",
    posCoords: [260, 900],
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  }
];*/

const HistoryOrders = (props) => {
  const {orders}=props


 

 
  return (
    <>
    <table className="min-w-full border-collapse block md:table">
  <thead className="block md:table-header-group">
    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Item Name</th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Item Quantity</th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">paymentMethod</th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">shippingAddress</th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Bill</th>
    </tr>
  </thead>
  <tbody>
    {orders.map((order)=>(
      <>
      
      <tr key={order._id} >
      <td>{order.orderItems.map((item)=>(<li key={item.productId.name}>{item.productId.name}</li>))}</td>
      <td>{order.orderItems.map((item)=>(<li key={item._id}>{item.quantity}</li>))}</td>
      <td>{order.paymentMethod}</td>
      <td>{order.shippingAddress.city},{order.shippingAddress.street},{order.shippingAddress.suite}</td>
      <td>{order.bill}</td>
    </tr>
    <br/>
    </>
    ))}
    
   
  </tbody>
</table>
    </>
  );
  
};

export default HistoryOrders;