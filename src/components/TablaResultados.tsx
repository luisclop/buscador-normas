import { Table } from "flowbite-react";
import React from "react";

export interface TablaResultadosProps {
  resultados: any[];
}

export function TablaResultados({ resultados }: TablaResultadosProps) {
  return (
    <div className="h-108 overflow-y-scroll">
      <Table>
        <Table.Head>
          <Table.HeadCell>Sector</Table.HeadCell>
          <Table.HeadCell>Norma</Table.HeadCell>
          <Table.HeadCell>Sumilla</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {resultados.map((resultado) => (
            <Table.Row>
              <Table.Cell>{resultado.sector}</Table.Cell>
              <Table.Cell>{resultado.norma}</Table.Cell>
              <Table.Cell>{resultado.sumilla}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
