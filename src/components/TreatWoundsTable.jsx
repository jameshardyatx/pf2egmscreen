import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  function TreatWoundsTable() {

    return(
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold">Proficiency</TableHead>
                    <TableHead className="font-bold">DC</TableHead>
                    <TableHead className="font-bold">Success Healing</TableHead>
                    <TableHead className="font-bold">Critical Healing</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Trained</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>2d8</TableCell>
                    <TableCell>4d8</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Expert</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>2d8+10</TableCell>
                    <TableCell>4d8+10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Master</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>2d8+30</TableCell>
                    <TableCell>4d8+50</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Legendary</TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>2d8+50</TableCell>
                    <TableCell>4d8+50</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </>
    )
  }

  export default TreatWoundsTable;