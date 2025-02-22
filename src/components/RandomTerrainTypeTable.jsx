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
            <h2 className="font-bold text-lg">Random Terrain Type</h2>
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
                        <TableCell>Plains</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4-5</TableCell>
                        <TableCell>Desert</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>6-7</TableCell>
                        <TableCell>Aquatic (lake, sea, or ocean)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>8-9</TableCell>
                        <TableCell>Mountain</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>10-11</TableCell>
                        <TableCell>Forest</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>12</TableCell>
                        <TableCell>Swamp</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>13</TableCell>
                        <TableCell>Arctic</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>14-20</TableCell>
                        <TableCell>Match the previous hex</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
};

export default RandomTerrainTypeTable;