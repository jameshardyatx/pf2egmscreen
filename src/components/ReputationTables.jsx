import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function ReputationTables() {
    return (
        <>
        <h2 className="font-bold text-lg">Reputation</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Type</TableHead>
                        <TableHead className="font-bold">Minor</TableHead>
                        <TableHead className="font-bold">Moderate</TableHead>
                        <TableHead className="font-bold">Major</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Favor</TableCell>
                        <TableCell>+1 RP</TableCell>
                        <TableCell>+2 RP</TableCell>
                        <TableCell>+5 RP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Disservice</TableCell>
                        <TableCell>-1 RP</TableCell>
                        <TableCell>-2 RP</TableCell>
                        <TableCell>-5 RP or more</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <h2 className="font-bold text-lg">Reputation Ranks</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Reputation</TableHead>
                        <TableHead className="font-bold">Reputation Points</TableHead>
                        <TableHead className="font-bold">Raised By</TableHead>
                        <TableHead className="font-bold">Lowered By</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Revered</TableCell>
                        <TableCell>30 - 50</TableCell>
                        <TableCell>Major favor</TableCell>
                        <TableCell>Moderate or Major disservice</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Admired</TableCell>
                        <TableCell>15 - 29</TableCell>
                        <TableCell>Major favor</TableCell>
                        <TableCell>Any disservice</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Liked</TableCell>
                        <TableCell>5 - 14</TableCell>
                        <TableCell>Moderate or major favor</TableCell>
                        <TableCell>Any disservice</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Ignored</TableCell>
                        <TableCell>-4 - 4</TableCell>
                        <TableCell>Any favor</TableCell>
                        <TableCell>Any disservice</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Disliked</TableCell>
                        <TableCell>-5 - 14</TableCell>
                        <TableCell>Any favor</TableCell>
                        <TableCell>Moderate or major disservice</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Hated</TableCell>
                        <TableCell>-15 - -29</TableCell>
                        <TableCell>Any favor</TableCell>
                        <TableCell>Major disservice</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Hunted</TableCell>
                        <TableCell>-30 - -50</TableCell>
                        <TableCell>Moderate to major favor</TableCell>
                        <TableCell>Major disservice</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
};

export default ReputationTables;