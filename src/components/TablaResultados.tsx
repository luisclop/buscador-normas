import { Table } from "flowbite-react";
import React from "react";

export function TablaResultados() {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Head>
      </Table>
    </div>
  );
}
