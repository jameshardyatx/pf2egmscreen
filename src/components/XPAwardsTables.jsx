import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  import AdversaryLevelXP from "./AdversaryLevelXP";

function XPAwardsTables() {
    return (
        <>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Accomplishment</TableHead>
                        <TableHead className="font-bold">XP Award</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Minor</TableCell>
                        <TableCell>10 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Moderate</TableCell>
                        <TableCell>30 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Major*</TableCell>
                        <TableCell>80 XP</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <p className="italic">*Major accomplishments typically award a Hero Point as well.</p>

            <AdversaryLevelXP />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Level</TableHead>
                        <TableHead className="font-bold">Simple Hazard</TableHead>
                        <TableHead className="font-bold">Complex Hazard</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Party level -4</TableCell>
                        <TableCell>2 XP</TableCell>
                        <TableCell>10 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level -3</TableCell>
                        <TableCell>3 XP</TableCell>
                        <TableCell>15 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level -2</TableCell>
                        <TableCell>4 XP</TableCell>
                        <TableCell>20 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level -1</TableCell>
                        <TableCell>6 XP</TableCell>
                        <TableCell>30 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level</TableCell>
                        <TableCell>8 XP</TableCell>
                        <TableCell>40 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level +1</TableCell>
                        <TableCell>12 XP</TableCell>
                        <TableCell>60 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level +2</TableCell>
                        <TableCell>16 XP</TableCell>
                        <TableCell>80 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level +3</TableCell>
                        <TableCell>24 XP</TableCell>
                        <TableCell>120 XP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Party level +4</TableCell>
                        <TableCell>32 XP</TableCell>
                        <TableCell>160 XP</TableCell>
                    </TableRow>
                    
                </TableBody>
            </Table>
        </>
    )
};

export default XPAwardsTables;