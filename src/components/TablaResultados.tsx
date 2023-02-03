import { Table } from "flowbite-react";
import React from "react";

export function TablaResultados() {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Sector</Table.HeadCell>
          <Table.HeadCell>Norma</Table.HeadCell>
          <Table.HeadCell>Sumilla</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>PRODUCE</Table.Cell>
            <Table.Cell>Norma 1</Table.Cell>
            <Table.Cell>Sumilla 1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>PRODUCE</Table.Cell>
            <Table.Cell>Norma 2</Table.Cell>
            <Table.Cell>Sumilla 2</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>PRODUCE</Table.Cell>
            <Table.Cell>Norma 3</Table.Cell>
            <Table.Cell>Sumilla 3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
