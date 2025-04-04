import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function CoverTable() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Type of Cover</TableHead>
            <TableHead className="font-bold">Bonus</TableHead>
            <TableHead className="font-bold">Can Hide</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Lesser</TableCell>
                <TableCell>+1 AC</TableCell>
                <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Standard</TableCell>
                <TableCell>+2 AC, Reflex, Stealh</TableCell>
                <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Greater</TableCell>
                <TableCell>+4 AC, Reflex, Stealth</TableCell>
                <TableCell>Yes</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default CoverTable;
