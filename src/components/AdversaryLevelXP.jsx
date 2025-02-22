import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function AdversaryLevelXP() {
    return (
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold">Adversary Level</TableHead>
                    <TableHead className="font-bold">XP Award</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Party level -4</TableCell>
                    <TableCell>10 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level -3</TableCell>
                    <TableCell>15 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level -2</TableCell>
                    <TableCell>20 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level -1</TableCell>
                    <TableCell>30 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level</TableCell>
                    <TableCell>40 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level +1</TableCell>
                    <TableCell>60 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level +2</TableCell>
                    <TableCell>80 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level +3</TableCell>
                    <TableCell>120 XP</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Party level +4</TableCell>
                    <TableCell>160 XP</TableCell>
                </TableRow>
                
            </TableBody>
        </Table>
        </>
    )
}

export default AdversaryLevelXP;