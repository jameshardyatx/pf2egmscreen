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

function Encounters() {
    return (
        <>
        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2716" target="_blank">Encounter Budget</a></CardTitle>
            </CardHeader>
            <CardContent>
                <EncounterBudgetTable />
                <p className="italic">
                    Each creature in the encounter takes XP from the budget. Start with the most important monsters first. Default values are for a 
                    party of 4, add or subtract with character adjustments for larger or smaller parties.
                </p>
            </CardContent>
            <CardFooter>
                <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2716" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2649" target="_blank">Adversary Level XP</a></CardTitle>
            </CardHeader>
            <CardContent>
                <AdversaryLevelXP />
                <p className="italic">
                    Each creature in the encounter takes XP from the budget. Start with the most important monsters first. Default values are for a 
                    party of 4, add or subtract with character adjustments for larger or smaller parties.
                </p>
            </CardContent>
            <CardFooter>
                <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2649" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2375" target="_blank">Flanking</a></CardTitle>
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
                <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2375" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Actions.aspx?ID=2404" target="_blank">Hiding</a></CardTitle>
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
                <p><a href="https://2e.aonprd.com/Actions.aspx?ID=2404" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>

        <Card className="info-card">
            <CardHeader>
                <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Conditions.aspx?ID=86" target="_blank">Persistent Damage</a></CardTitle>
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
                <p><a href="https://2e.aonprd.com/Conditions.aspx?ID=86" className="underline" target="_blank">Rules Reference</a></p>
            </CardFooter>
        </Card>
        </>
    )
};

export default Encounters;