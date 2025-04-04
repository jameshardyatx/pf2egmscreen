import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function RecallKnowledgeTable() {
    return (
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold">Creature Trait</TableHead>
                    <TableHead className="font-bold">Skill</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Aberration</TableCell>
                    <TableCell>Occultism</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Animal</TableCell>
                    <TableCell>Nature</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Astral</TableCell>
                    <TableCell>Occultism</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Beast</TableCell>
                    <TableCell>Arcana, Nature</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Celestial</TableCell>
                    <TableCell>Religion</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Construct</TableCell>
                    <TableCell>Arcana, Crafting</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Dragon</TableCell>
                    <TableCell>Arcana</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Dream</TableCell>
                    <TableCell>Occultism</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Elemental</TableCell>
                    <TableCell>Arcana, Nature</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Etheral</TableCell>
                    <TableCell>Occultism</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Fey</TableCell>
                    <TableCell>Nature</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Fiend</TableCell>
                    <TableCell>Religion</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Fungus</TableCell>
                    <TableCell>Nature</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Humanoid</TableCell>
                    <TableCell>Society</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Monitor</TableCell>
                    <TableCell>Religion</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Ooze</TableCell>
                    <TableCell>Occultism</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Plant</TableCell>
                    <TableCell>Nature</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Shade</TableCell>
                    <TableCell>Religion</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Spirit</TableCell>
                    <TableCell>Occultism</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Occultism</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Undead</TableCell>
                    <TableCell>Religion</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        </>
    )
}

export default RecallKnowledgeTable;