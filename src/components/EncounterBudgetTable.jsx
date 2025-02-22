import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function EncounterBudgetTable() {
    return (
        <>
        <h2 className="font-bold text-lg">Encounter Budget</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Threat</TableHead>
                        <TableHead className="font-bold">XP Budget</TableHead>
                        <TableHead className="font-bold">Character Adjustment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Trivial</TableCell>
                        <TableCell>40 or less</TableCell>
                        <TableCell>10 or less</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Low</TableCell>
                        <TableCell>60</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Moderate</TableCell>
                        <TableCell>80</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Severe</TableCell>
                        <TableCell>120</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Extreme</TableCell>
                        <TableCell>160</TableCell>
                        <TableCell>40</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
};

export default EncounterBudgetTable;