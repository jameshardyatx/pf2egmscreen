import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function RandomTerrainTypeTable() {
    return (
        <>
            <h2 className="font-bold text-lg">Random Terrain Feature</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">1d20</TableHead>
                        <TableHead className="font-bold">Result</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1-3</TableCell>
                        <TableCell><strong>Landmark</strong> A feature of some singificance that distinguishes the hex as noteworthy.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4-6</TableCell>
                        <TableCell><strong>Secret</strong> The hex contains a secret the party uncovers upon exploring the hex.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>6-9</TableCell>
                        <TableCell><strong>Resource</strong> The hex contains some valuable resource appropriate to the terrain.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>10-20</TableCell>
                        <TableCell><strong>Standard</strong> A standard reprsentation of the terrain type.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
};

export default RandomTerrainTypeTable;