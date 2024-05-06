import { Header } from "../components/header/Header"
import { Table } from "../components/table/Table"
import { Typography } from "../components/typography/Typography"
import { workers } from "../data/data"

export const Nurses = () => {
    return (
    <>
    <Header/>
    <Typography variant='h2'>Nurses</Typography>
       <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Job</Table.HeadCell>
            <Table.HeadCell>Hospital</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {workers.filter(w => w.job === 'nurse').map((w, index )=> (
            <Table.Row key={index}>
              <Table.Cell>{w.name}</Table.Cell>
              <Table.Cell>{w.job}</Table.Cell>
              <Table.Cell>{w.hospitalDepartment}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
    </Table.Root> 
    </>
    )
}