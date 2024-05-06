import { Header } from "../components/header/Header";
import { Table } from "../components/table/Table"
import { Typography } from "../components/typography/Typography";
import { workers } from "../data/data"



export const Doctors = () => {
  return (
    <>
        <Header/>
        <Typography variant='h2'>Doctors</Typography>
        <Table.Root>
            <Table.Head>
              <Table.Row>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Job</Table.HeadCell>
                <Table.HeadCell>Department</Table.HeadCell>
                <Table.HeadCell>Head of department</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {workers.filter(w => w.job === 'doctor').map((w, index )=> (
                <Table.Row key={index}>
                  <Table.Cell>{w.name}</Table.Cell>
                  <Table.Cell>{w.job}</Table.Cell>
                  <Table.Cell>{w.hospitalDepartment}</Table.Cell>
                  <Table.Cell>{w.isHeadOfDepartment ? 'Yes' : 'No'}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
        </Table.Root>
      </>
  )
}