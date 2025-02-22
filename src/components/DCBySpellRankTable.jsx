import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function DCBySpellRankTable() {
    return (
        <>
            <Table>
                        <TableHeader >
                            <TableRow>
                                <TableHead className="font-bold">Spell Rank*</TableHead>
                                <TableHead className="font-bold">DC</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>1st</TableCell>
                                <TableCell>15</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2nd</TableCell>
                                <TableCell>18</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3rd</TableCell>
                                <TableCell>20</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4th</TableCell>
                                <TableCell>23</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>5th</TableCell>
                                <TableCell>26</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>6th</TableCell>
                                <TableCell>28</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7th</TableCell>
                                <TableCell>31</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>8th</TableCell>
                                <TableCell>34</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>9th</TableCell>
                                <TableCell>36</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>10th</TableCell>
                                <TableCell>39</TableCell>
                            </TableRow>
                        </TableBody>
            </Table>
                    <p className="italic">*If the spell is uncommon or rare, its difficulty should be adjusted accordingly</p>
        </>
    )
};

export default DCBySpellRankTable;