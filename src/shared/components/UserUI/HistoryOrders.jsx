import React, { useState } from "react";
import Map from "./Table/Map";
import Table, { SelectColumnFilter, StatusPill, LocateCell } from "./Table/Table";

import { MapProvider } from "./Table/Map-context";


const getData = () => [
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
];

const HistoryOrders = ( ) => {
    
  const [mapFly, setMapFly] = useState(null);

  const columns = React.useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "name"
      },
      {
        Header: "price",
        accessor: "title"
      },
      {
        Header: "Quantity",
        accessor: "locate",
        Cell: LocateCell,
        posAccessor: "posCoords"
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill
      },
      {
        Header: "Delivery",
        accessor: "role",
        Filter: SelectColumnFilter,
        filter: "includes"
      }
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="App" style={{ height: "100%" }}>
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="">
              <h1 className="text-xl font-semibold">Find Transmitters</h1>
            </div>
            <div className="mt-4">
              <Table columns={columns} data={data} />
             
            </div>
          </main>
        </div>
      </div>
    </>
  );
  
};

export default HistoryOrders;