import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function CommonServices() {
    return(
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Service</TableHead>
                        <TableHead className="font-bold">Cost</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Meal (Poor)</TableCell>
                        <TableCell>1 cp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Meal (Square)</TableCell>
                        <TableCell>3 cp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Meal (Fine Dining)</TableCell>
                        <TableCell>1 gp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Lodging (Floor Space)</TableCell>
                        <TableCell>3 cp per day</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Lodging (Private Room for 2)</TableCell>
                        <TableCell>8 sp per day</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Lodging (Extravagant Suite for 6)</TableCell>
                        <TableCell>10 gp per day</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Pot of Coffee or Tea</TableCell>
                        <TableCell>2 cp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Mug of Ale</TableCell>
                        <TableCell>1 cp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Keg of Ale</TableCell>
                        <TableCell>2 sp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bottle of Wine</TableCell>
                        <TableCell>1 sp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bottle of Fine Wine</TableCell>
                        <TableCell>1 gp</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default CommonServices;