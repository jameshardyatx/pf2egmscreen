import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import RandomTerrainTypeTable from "./RandomTerrainTypeTable";
import RandomTerrainFeatureTable from "./RandomTerrainFeatureTable";
import HexplorationActivitiesPerDay from './HexplorationActivitesPerDay';
import ReputationTables from "./ReputationTables";
import CommonServices from "./CommonServices";
import TavernNames from "./TavernNames";

function Exploration() {
    return (
        <>
        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2442" target="_blank">Exploration Activities</a></CardTitle>
            </CardHeader>
            <CardContent>
                <p className="italic">You must move at half speed to use any of these activites, except Hustle.</p>
                <ul>
                    <li><strong>Avoid Notice</strong> Use Stealth to avoid being noticed.</li>
                    <li><strong>Defend</strong> Raise a Shield before your first turn begins. </li>
                    <li><strong>Detect Magic</strong> (concentrate) Detect magic at regular intervals. </li>
                    <li><strong>Follow the Expert</strong> (auditory, concentrate, visual) Gain bonus with a skill from an expert ally. Add your level if untrained, and get +2 circumstance bonus (+3 if ally is master, +4 if ally is legendary).</li>
                    <li><strong>Hustle</strong> Move at double Speed for up to Con × 10 minutes (minimum 10 minutes). </li>
                    <li><strong>Investigate</strong> (concentrate) Use Recall Knowledge to discover clues. </li>
                    <li><strong>Repeat a Spell</strong> (concentrate) Repeatedly cast the same spell, or continue Activation or Sustain a Spell. </li>
                    <li><strong>Scout</strong> Party members get +1 circumstance bonus to their initiative rolls. </li>
                    <li><strong>Search</strong> Seek for hidden doors and hazards.</li>
                </ul>
            </CardContent>
            <CardFooter>
                <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2442" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=3103" target="_blank">Hexploration</a></CardTitle>
            </CardHeader>
            <CardContent>
                <HexplorationActivitiesPerDay />
                <RandomTerrainTypeTable />
                <RandomTerrainFeatureTable/>
            </CardContent>
            <CardFooter>
                <p><a href="https://2e.aonprd.com/Rules.aspx?ID=3103" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2365" target="_blank">Terrain and Environmental Damage</a></CardTitle>
            </CardHeader>
            <CardContent>
                <h2 className="font-bold text-lg">Terrain</h2>
                <ul>
                    <li><strong>Difficult Terrain:</strong> Each square costs 5 extra feet of movement.</li>
                    <li><strong>Greater Difficult Terrain:</strong> Each square costs 10 extra feet of movement.</li>
                    <li><strong>Hazardous Terrain:</strong> Moving through hazardous terrain deals damage.</li>
                    <li><strong>Narrow Surface:</strong> Off-guard and must Balance to cross. When you're hit or fail a save, succeed at a Reflex save or fall.</li>
                    <li><strong>Uneven Ground:</strong> Off-guard and might need to Balance or fall prone. When you're hit or fail a save, succeed at a Reflex save or fall. </li>
                    <li><strong>Incline:</strong> You need to Climb to ascend an incline. You're off-guard while Climbing.</li>
                </ul>

                <h2 className="font-bold text-lg">Environmental Damage</h2>
                <ul>
                    <li><strong>Minor</strong> 1d6-2d6</li>
                    <li><strong>Moderate</strong> 4d6-6d6</li>
                    <li><strong>Major</strong> 8d6-12d6</li>
                    <li><strong>Massive</strong> 16d6-24d6</li>
                </ul>
            </CardContent>
            <CardFooter>
                <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2365" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=3072" target="_blank">Reputation</a></CardTitle>
            </CardHeader>
            <CardContent>
                <ReputationTables />
            </CardContent>
            <CardFooter>
                <p><a href="https://2e.aonprd.com/Rules.aspx?ID=3072" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Equipment.aspx?Category=2" target="_blank">Common Services</a></CardTitle>
            </CardHeader>
            <CardContent>
                <CommonServices />
            </CardContent>
            <CardFooter>
                <p><a href="https://2e.aonprd.com/Equipment.aspx?Category=2" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl">Random Tavern Name</CardTitle>
            </CardHeader>
            <CardContent>
                <TavernNames/>
            </CardContent>
            <CardFooter className="flex-col items-start">
                <p><em>Homebrew Content</em></p>
                <p className="w-full"><em>
                    These tavern names are intentionally simple, with the idea that taverns didn't have official names, but instead had a sign to identify them. Their name comes from the sign.
                    A tavern called "The Iron Kobold" would literally have a sign made out of iron depicting a kobold.
                </em></p>
            </CardFooter>
        </Card>
        </>
    );
};

export default Exploration;