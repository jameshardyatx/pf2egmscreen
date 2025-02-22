import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function HexplorationActivitesPerDay() {
    return (
        <>
            <h2 className="font-bold text-lg">Hexploration Activities Per Day</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Speed</TableHead>
                        <TableHead className="font-bold">Activities Per Day</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>10 feet or less</TableCell>
                        <TableCell>1/2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>15-25 feet</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>30-40 feet</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>45-55 feet</TableCell>
                        <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>60 feet or more</TableCell>
                        <TableCell>4</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <p className="italic">
                Party speed is determined by the <strong>slowest</strong> member. The party may choose to split up so that faster members get more activities, with a potential consequence of being 
                vulnerable to random encounters. Exploration Activities other than Hustle reduce speed by half.
            </p>
            <p className="italic">
                At the start of a new hexploration day, the group can take a <strong>forced march</strong> if no one is fatigued. This grants one extra Travel activity (or a full Travel activity for 
                speeds of 10 ft or less) but limits all activities to Travel only. A character can safely march for a number of days equal to their <strong>Constitution modifier</strong> (minimum 1). 
                Additional days cause fatigue, which requires a full day of rest to recover. Forced marches allow extra Travel but prohibit Reconnoitering or other actions.
            </p>

            <h2 className="font-bold text-lg">Group Activites</h2>
            <ul>
                <li>
                    <strong>Travel</strong> You move towards an adjacent hex. Traversing difficult terrain requires 2 Travel activities, and hexes of greater difficulty require 3 Travel 
                    activities to traverse. Traveling along a road uses a terrain type one step better than the surrounding terrain.
                </li>
                <li>
                    <strong>Reconnoiter</strong> You survey and explore the area. Reconnoitering a hex takes a number of activities equal to the number of Travel activities 
                    needed to traverse the hex. Traveling on roads doesn't reduce the time to Reconnoiter. Once the hex has been Reconnoitered, you can Map the Area and automatically find 
                    any special feature that doesn't require a check to find, and you attempt the checks for hidden features.
                </li>
            </ul>

            <h2 className="font-bold text-lg">Individual Activites</h2>
            <ul>
                <li>
                    <strong>Fortify Camp</strong> Make a Crafting check (typically trained or expert DC). Anyone defending the camp gains a +2 circumstance bonus to 
                    iniative and Perception checks to Seek creatures sneaking up on the camp.
                </li>
                <li>
                    <strong>Map the Area</strong> Make a Survival check (typically at trained or expert DC). When you have a map of the hex the DC of any check to navigate is reduced by 2.
                </li>
            </ul>
        </>
    )
};

export default HexplorationActivitesPerDay;