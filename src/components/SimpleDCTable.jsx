import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  function SimpleDCTable() {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Proficiency Rank</TableHead>
                        <TableHead className="font-bold">DC</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Untrained</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Trained</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Expert</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Master</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Legendary</TableCell>
                        <TableCell>40</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
  };

  export default SimpleDCTable;