import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import DCByLevelsTable from "./DCByLevelsTable";
import DCBySpellRankTable from "./DCBySpellRankTable";
import XPAwardsTables from "./XPAwardsTables";
import SimpleDCTable from "./SimpleDCTable";
import {aonRuleReference} from "./utility/utility.js";
import RecallKnowledgeTable from "./RecallKnowledgeTable.jsx";

function Basics() {
    return (
        <>
            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2343" target="_blank">Basic Actions</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li><strong>Aid</strong> [reaction] DC 15 check to give a +1 circumstance bonus to assisted skill check or attack roll (crit success: +2, +3 if master, +4 if legendary). </li>
                        <li><strong>Crawl</strong> [one-action] (move) Move 5 feet while prone. </li>
                        <li><strong>Delay</strong> [free-action] Select this when your turn begins; take your turn later. </li>
                        <li><strong>Drop</strong> Prone [one-action] (move) Fall prone. </li>
                        <li><strong>Escape</strong> [one-action] (attack) Attempt to get free when grappled, restrained, or immobilized. Use unarmed attack modifier, Acrobatics, or Athletics.</li>
                        <li><strong>Interact</strong> [one-action] (manipulate) Grab an object, open a door, draw an item, or do a similar action.</li>
                        <li><strong>Leap</strong> [one-action] (move) Jump horizontally 10 feet (15 feet if your Speed is 30 feet or more), or vertically 3 feet and horizontally 5 feet.</li>
                        <li><strong>Ready</strong> [two-actions] (concentrate) Prepare to take a single action or free action as a reaction with a trigger you designate.</li>
                        <li><strong>Release</strong> [free-action] (manipulate) Release something you're holding without triggering reactions.</li>
                        <li><strong>Seek</strong> [one-action] (concentrate, secret) Scan an area for signs of creatures or objects using Perception.</li>
                        <li><strong>Sense</strong> Motive [one-action] (concentrate, secret) See if a creature is lying. </li>
                        <li><strong>Stand</strong> [one-action] (move) You stand up from prone.</li>
                        <li><strong>Step</strong> [one-action] (move) Move 5 feet without triggering reactions.</li>
                        <li><strong>Stride</strong> [one-action] (move) Move up to your Speed.</li>
                        <li><strong>Strike</strong> [one-action] (attack) Attack with a weapon or unarmed attack.</li>
                        <li><strong>Take Cover</strong> [one-action] Gain cover, or get greater cover if you have cover.</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2343" className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>

            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=774" target="_blank">Conditions</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li><strong>Blinded</strong> You can't see. All normal terrain is difficult terrain. You can't detect anything using vision. Automatically critically fail Perception checks that require you to see; if vision is your only precise sense, you take a –4 status penalty to Perception checks. You are immune to visual effects. Blinded overrides dazzled.</li>
                        <li><strong>Broken</strong> A broken object can't be used, nor does it grant bonuses. Broken armor grants its item bonus to AC, but gives a status penalty to AC (–1 light, –2 medium,–3 heavy). An effect that makes an item broken reduces the item's HP to its Broken Threshold. </li>
                        <li><strong>Clumsy</strong> Take a status penalty equal to your clumsy value on Dexterity-based checks and DCs, including AC, Reflex saves, ranged attacks, and skill checks using Acrobatics, Stealth, and Thievery. </li>
                        <li><strong>Confused</strong> You are off-guard, don't treat anyone as your ally, and can't Delay, Ready, or use reactions. Use all your actions to Strike or cast offensive cantrips. The GM determines targets randomly. If you have no other option, target yourself, automatically hitting. If it's impossible for you to attack or cast spells, you babble incoherently, wasting your actions. Each time you take damage from an attack or spell, attempt a DC 11 flat check to end the condition. </li>
                        <li><strong>Controlled</strong> Your controller dictates how you act. </li>
                        <li><strong>Dazzled</strong> All creatures and objects are concealed from you. </li>
                        <li><strong>Deafened</strong> Automatically critically fail Perception checks that require hearing. Take a –2 status penalty to Perception checks for initiative and checks that involve sound but also rely on other senses. If you perform an action that has the auditory trait, you must succeed at a DC 5 flat check or the action is lost. You are immune to auditory effects. </li>
                        <li><strong>Drained</strong> Take a status penalty equal to your drained value on Constitution-based checks, such as Fortitude saves. Lose Hit Points equal to your level times the drained value, and your maximum Hit Points are reduced by the same amount. When you regain Hit Points by resting for 8 hours, your drained value is reduced by 1, but you don't immediately recover the lost Hit Points. </li>
                        <li><strong>Encumbered</strong> You're clumsy 1 and take a –10-foot penalty to all your Speeds. </li>
                        <li><strong>Enfeebled</strong> Take a status penalty equal to your enfeebled value to Strength-based rolls and DCs, including Strength-based melee attack rolls, Strength-based damage rolls, and Athletics checks. </li>
                        <li><strong>Fascinated</strong> Take a –2 status penalty to Perception and skill checks, and you can't use actions with the concentrate trait unless they are related to the subject of your fascination. This condition ends if a creature takes hostile actions toward you or any of your allies. </li>
                        <li><strong>Fatigued</strong> Take a –1 status penalty to AC and saving throws. During exploration, you can't choose an exploration activity. Recover from fatigue after a full night's rest. </li>
                        <li><strong>Fleeing</strong> On your turn, spend each action trying to escape the source of the condition as expediently as possible. You can't Delay or Ready. </li>
                        <li><strong>Frightened</strong> Take a status penalty equal to the value to all checks and DCs. At the end of each of your turns, the value decreases by 1. </li>
                        <li><strong>Grabbed</strong> You're immobilized and off-guard. If you attempt a manipulate action, you must succeed at a DC 5 flat check or it is lost. </li>
                        <li><strong>Immobilized</strong> You can't take any action with the move trait. If you're immobilized by something holding you in place and an external force would move you, the force must succeed at a check against the DC of the effect holding you in place you or the relevant defense (usually Fortitude DC) of the creature holding you in place. </li>
                        <li><strong>Off-Guard</strong> Take a –2 circumstance penalty to AC. </li>
                        <li><strong>Paralyzed</strong> You're off-guard and can't take actions except Recall Knowledge and others that require only your mind. You can't Seek. </li>
                        <li><strong>Persistent Damage</strong> Instead of taking persistent damage immediately, take it at the end of each of your turns, rolling any damage dice each time. After you take persistent damage, roll a DC 15 flat check to see if you recover. If you succeed, the condition ends. You or an ally can help you recover, allowing an additional flat check. This usually takes 2 actions, and must be something that would reasonably help against the source of the damage. The GM can reduce the DC to 10, have the damage end automatically, or change the number of actions. </li>
                        <li><strong>Petrified</strong> You can't act, nor can you sense anything. You're an object with double your normal Bulk (typically 12 if Medium or 6 if Small), AC 9, Hardness 8, and the same current HP you had when alive. </li>
                        <li><strong>Prone</strong> You're off-guard with a –2 circumstance penalty to attack rolls. The only move actions you can take are Crawl and Stand. Standing ends the prone condition. You can Take Cover while prone, gaining greater cover against ranged attacks (but remain off-guard). </li>
                        <li><strong>Quickened</strong> You gain 1 additional action at the start of your turn each round. Many effects that make you quickened specify the types of additional actions you can use. Because quickened has its effect at the start of your turn, you don't gain actions immediately if you become quickened during your turn. </li>
                        <li><strong>Restrained</strong> You're tied up and can barely move, or a creature has you pinned. You are immobilized and off-guard, and you can't use any actions with the attack or manipulate traits except to attempt to Escape or Force Open your bonds. Restrained overrides grabbed. </li>
                        <li><strong>Sickened</strong> Take a status penalty equal to the value on all checks and DCs. You can't willingly ingest anything. You can spend an action retching to attempt a Fortitude save against the DC of the sickening effect. On a success, reduce the value by 1 (2 on a critical success). </li>
                        <li><strong>Slowed</strong> When you regain your actions at the start of your turn, reduce the number of actions by your slowed value. You don't lose actions immediately if slowed during your turn. </li>
                        <li><strong>Stunned</strong> You can't act. A stunned value indicates how many total actions you lose. Each time you regain actions, reduce the number by your stunned value, then reduce your stunned value by the number of actions lost. If stunned has a duration, lose all your actions for the listed duration. Stunned overrides slowed. Actions lost to stunned count toward those lost to slowed. </li>
                        <li><strong>Stupefied</strong> Take a status penalty equal to the value to checks and DCs based on Intelligence, Wisdom, or Charisma, including Will saves, spell attack rolls and DCs, and appropriate skill checks. If you Cast a Spell, it's disrupted unless you succeed at a flat check (DC = 5 + value).</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <p><a href="https://2e.aonprd.com/Rules.aspx?ID=774" className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>

            

            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2628" target="_blank">Simple DC</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <SimpleDCTable />
                </CardContent>
                <CardFooter>
                    <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2628" className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>

            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2629" target="_blank">DC by Level</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <DCByLevelsTable/>
                </CardContent>
                <CardFooter>
                    <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2629" className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>

            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2629" target="_blank">DC by Spell Rank</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <DCBySpellRankTable/>
                </CardContent>
                <CardFooter>
                    <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2629" className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>

            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href={aonRuleReference("2638")} target="_blank">Recall Knowledge</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        On most topics use a simple DC. For checks about a specific creature or trap, use it's level DC instead adjusting for
                        rarity if needed. You might adjust the difficulty down if the subject is notorious or famed.
                    </p>
                    <p>
                        A character who successfully identifies a creature learns one of its best-known attributes.
                        On a critical success, the character also learns something subtler, like a weakness that's not obvious or the trigger for one of the creature's reactions.
                    </p>
                    <hr className="dividing-line" />
                    <RecallKnowledgeTable/>
                </CardContent>
                <CardFooter>
                    <p><a href={aonRuleReference("2638")} className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>

            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2649" target="_blank">XP Awards</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <XPAwardsTables/>
                </CardContent>
                <CardFooter>
                    <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2649" className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>

            <Card className="info-card">
                <CardHeader>
                    <CardTitle className="text-3xl"><a href="https://2e.aonprd.com/Rules.aspx?ID=2333" target="_blank">Hero Points</a></CardTitle>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li><strong>Start of session:</strong> Give 1 Hero Point to each PC.</li>
                        <li><strong>Each hour: </strong>Award 1 Hero Point.</li>
                        <li><strong>Moderate or Major accomplishments:</strong> Award 1 Hero Point.</li>
                    </ul>
                    <h2 className="font-bold text-lg">Spending Hero Points</h2>
                    <ul>
                        <li><strong>Spend 1 Hero Point</strong> to reroll a check and use the second result. This is a fortune effect.</li>
                        <li>
                            <strong>Spend all Hero Points </strong> to avoid death. Do this when your dying condition would increase. Lose dying and stabilize with 0 Hit Points. 
                            Don't increase your wounded value from losing dying this way.
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <p><a href="https://2e.aonprd.com/Rules.aspx?ID=2333" className="underline" target="_blank">Rules Reference</a></p>
                </CardFooter>
            </Card>
        </>
    )
}

export default Basics;