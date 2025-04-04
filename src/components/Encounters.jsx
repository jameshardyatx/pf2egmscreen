import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import EncounterBudgetTable from "./EncounterBudgetTable";
import AdversaryLevelXP from "./AdversaryLevelXP";
import CoverTable from "./Cover.jsx";
import TreatWoundsTable from "./TreatWoundsTable.jsx";
import {aonRuleReference} from "./utility/utility.js";


function Encounters() {
    return (
        <>
        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href={aonRuleReference("2716")} target="_blank">Encounter Budget</a></CardTitle>
            </CardHeader>
            <CardContent>
                <EncounterBudgetTable />
                <p className="italic">
                    Each creature in the encounter takes XP from the budget. Start with the most important monsters first. Default values are for a 
                    party of 4, add or subtract with character adjustments for larger or smaller parties.
                </p>
            </CardContent>
            <CardFooter>
                <p><a href={aonRuleReference("2716")} className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href={aonRuleReference("2649")} target="_blank">Adversary Level XP</a></CardTitle>
            </CardHeader>
            <CardContent>
                <AdversaryLevelXP />
                <p className="italic">
                    Each creature in the encounter takes XP from the budget. Start with the most important monsters first. Default values are for a 
                    party of 4, add or subtract with character adjustments for larger or smaller parties.
                </p>
            </CardContent>
            <CardFooter>
                <p><a href={aonRuleReference("2649")} className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href={aonRuleReference("2375")} target="_blank">Flanking</a></CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                When you and an ally are flanking a foe, it has a harder time defending against you. A creature is <strong>off-guard (taking a –2 circumstance penalty to AC) </strong> 
                to melee attacks from creatures that are flanking it.
                </p>
                <p className="italic">
                To flank a foe, you and your ally must be on opposite sides of the creature. A line drawn between the center of your space and the center of your ally's space must 
                pass through opposite sides or opposite corners of the foe's space. Additionally, both you and the ally have to be able to act, you must be wielding melee weapons 
                or be able to make an unarmed attack, you can't be under any effects that prevent you from attacking, and you must both have the enemy within reach. If you are wielding a 
                reach weapon, you use your reach with that weapon for this purpose.
                </p>
            </CardContent>
            <CardFooter>
                <p><a href={aonRuleReference("2375")} className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href={aonRuleReference("2404")} target="_blank">Hiding</a></CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                You huddle behind cover or greater cover or deeper into concealment to become hidden, rather than observed. The GM rolls your <strong>Stealth check</strong> in secret and compares the 
                result to the <strong>Perception DC</strong> of each creature you're observed by but that you have cover or greater cover against or are concealed from. 
                You get a +2 circumstance bonus to your check if you have standard cover (or +4 from greater cover).
                </p>
                <p>
                <strong>Success</strong> If the creature could see you, you're now hidden from it instead of observed. If you were hidden from or undetected by the creature, 
                you retain that condition.
                </p>
                <p >
                If you successfully become hidden to a creature but then cease to have cover or greater cover against it or be concealed from it, you become observed again. 
                You cease being hidden if you do anything except Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains off-guard against that attack, 
                and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. 
                The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check.
                </p>

                <p> If a creature uses Seek to make you observed by it, you must successfully Hide to become hidden from it again. </p>
            </CardContent>
            <CardFooter>
                <p><a href={aonRuleReference("2404")} className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href={aonRuleReference("2372")} target="_blank">Cover</a></CardTitle>
            </CardHeader>
            <CardContent>
                <CoverTable/>
                <p>When you are behind an obstacle that can block weapons, protect against explosions, and make you harder to detect, 
                    you're behind cover. If you are behind Standard Cover you may take the&nbsp;
                    <strong className="underline"><a href={aonRuleReference("2307")} target="_blank">Take Cover</a></strong>  
                    &nbsp;action to make it <strong>Greater Cover</strong>.
                </p>
                <p>
                    Cover is relative, you may have cover against one creature but not another. If you are unsure, draw a line from the center 
                    of your space to the center of your target's space. If the line passes through something that grants cover then you have cover. 
                    If that line passes through another creature you have Lesser Cover.
                </p>
            </CardContent>
            <CardFooter>
                <p><a href={aonRuleReference("2372")}  className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href={aonRuleReference("86")}  target="_blank">Persistent Damage</a></CardTitle>
            </CardHeader>
            <CardContent>
                <p>Appears as "X persistent [type] damage", where "X" is the amount of damage dealt and "[type]" is the damage type. 
                    Like normal damage, it can be doubled or halved based on the results of an attack or saving throw.
                    Instead of taking persistent damage immediately, you <strong>take it at the end of each of your turns</strong> as long as you have the condition, rolling any damage dice anew each time.
                    After you take persistent damage, roll a <strong>DC 15 flat check</strong> to see if you recover from the persistent damage. If you succeed, the condition ends.
                </p>
                <p><strong>Assisted Recovery:</strong> An ally can help you, allowing you to attempt an additional flat check before the end of your turn. This is usually an activity <strong>requiring two actions </strong> 
                that would reasonably improve your chances (as determined by the GM).
                </p>
            </CardContent>
            <CardFooter>
                <p><a href={aonRuleReference("86")}  className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href={aonRuleReference("2399")}  target="_blank">Treat Wounds</a></CardTitle>
            </CardHeader>
            <CardContent>
                <TreatWoundsTable/>
                <p>
                    You spend 10 minutes treating one injured living creature (including yourself if you so choose).
                    The target is then temporarily immune to Treat Wounds for 1 hour.
                </p>
                <p>
                    The Medicine check DC is usually 15, but may be adjusted by the GM. If you're an Expert in Medicine you can attempt the 
                    higher DC check if you so choose, and likewise if you are an Expert or Legendary.
                </p>
            </CardContent>
            <CardFooter>
                <p><a href={aonRuleReference("2399")}  className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>
        

        <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href={aonRuleReference("2319")}  target="_blank">Death and Dying</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li><strong>Knocked Out</strong> When reduced to 0 HP, move your initiative position to directly before the turn in which you were reduced to 0 HP. Gain dying 1, or dying 2 if the damage came from a critical hit or your critical failure on a save. A nonlethal effect makes you unconscious at 0 HP and doesn't give you the dying condition. </li>
                        <li><strong>Dying</strong> You are unconscious. If you ever reach dying 4, you die. Attempt a recovery check at the start of your turn to determine whether you get better or worse. If you ever have 1 HP or more, you lose the dying condition. Any time you lose the dying condition, increase your wounded value by 1. If you take damage while dying, increase the dying value by 1 (or 2 on an enemy's critical success or your critical failure). </li>
                        <li>
                            <strong>Recovery Checks</strong> At the start of your turn when you're dying, attempt a flat check (DC 10 + your dying value). 
                            <ul>
                                <li><strong>Critical Success</strong> Your dying value is reduced by 2.</li>
                                <li><strong>Success</strong> Your dying value is reduced by 1.</li>
                                <li><strong>Failure</strong> Your dying value increases by 1.</li>
                                <li><strong>Critical Failure</strong> Your dying value increases by 2. </li>
                            </ul>
                        </li>
                        <li><strong>Wounded</strong> Any time you gain the dying condition, add your wounded value to the amount you gain or increase your dying value. The wounded condition ends if you receive HP from Treat Wounds, or if you're restored to full HP and rest for 10 minutes. </li>
                        <li><strong>Doomed</strong> The maximum dying value at which you die is reduced by your doomed value. If your maximum dying value is reduced to 0, you instantly die. Your doomed value decreases by 1 each time you get a full night's rest.</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <p><a href={aonRuleReference("2319")}  className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>
        </>
    )
};

export default Encounters;