import { useState, useEffect } from 'react';
// import { Switch } from "@/components/ui/switch"


const defaultColors = new Map();
defaultColors.set("--clr-primary-a0", "#8c31f2");
defaultColors.set("--clr-primary-a10", "#9c4cf4");
defaultColors.set("--clr-primary-a20", "#ac64f6");
defaultColors.set("--clr-primary-a30", "#ba7bf8");
defaultColors.set("--clr-primary-a40", "#c791fa");
defaultColors.set("--clr-primary-a50", "#d3a7fc");

defaultColors.set("--clr-surface-a0", "#06010c");
defaultColors.set("--clr-surface-a10", "#211e24");
defaultColors.set("--clr-surface-a20", "#38363b");
defaultColors.set("--clr-surface-a30", "#514f54");
defaultColors.set("--clr-surface-a40", "#6b696e");
defaultColors.set("--clr-surface-a50", "#878589");

defaultColors.set("--clr-surface-tonal-a0", "#180c21");
defaultColors.set("--clr-surface-tonal-a10", "#2d2336");
defaultColors.set("--clr-surface-tonal-a20", "#433b4c");
defaultColors.set("--clr-surface-tonal-a30", "#5b5363");
defaultColors.set("--clr-surface-tonal-a40", "#756e7b");
defaultColors.set("--clr-surface-tonal-a50", "#8f8994");

const greenColors = new Map();
greenColors.set("--clr-primary-a0", "#31f283");
greenColors.set("--clr-primary-a10", "#5bf491");
greenColors.set("--clr-primary-a20", "#78f69f");
greenColors.set("--clr-primary-a30", "#8ff8ad");
greenColors.set("--clr-primary-a40", "#a5faba");
greenColors.set("--clr-primary-a50", "#b8fbc8");

greenColors.set("--clr-surface-a0", "#0c2118");
greenColors.set("--clr-surface-a10", "#23362d");
greenColors.set("--clr-surface-a20", "#3b4c44");
greenColors.set("--clr-surface-a30", "#54635b");
greenColors.set("--clr-surface-a40", "#6e7b75");
greenColors.set("--clr-surface-a50", "#89948f");

greenColors.set("--clr-surface-tonal-a0", "#113322");
greenColors.set("--clr-surface-tonal-a10", "#294737");
greenColors.set("--clr-surface-tonal-a20", "#415c4d");
greenColors.set("--clr-surface-tonal-a30", "#5a7164");
greenColors.set("--clr-surface-tonal-a40", "#74877c");
greenColors.set("--clr-surface-tonal-a50", "#8e9e94");

const redColors = new Map();
redColors.set("--clr-primary-a0", "#f52e33");
redColors.set("--clr-primary-a10", "#fb5147");
redColors.set("--clr-primary-a20", "#ff6b5c");
redColors.set("--clr-primary-a30", "#ff8372");
redColors.set("--clr-primary-a40", "#ff9988");
redColors.set("--clr-primary-a50", "#ffae9f");

redColors.set("--clr-surface-a0", "#1e0b0d");
redColors.set("--clr-surface-a10", "#311f22");
redColors.set("--clr-surface-a20", "#443437");
redColors.set("--clr-surface-a30", "#594b4c");
redColors.set("--clr-surface-a40", "#706264");
redColors.set("--clr-surface-a50", "#877a7b");

redColors.set("--clr-surface-tonal-a0", "#331214");
redColors.set("--clr-surface-tonal-a10", "#482829");
redColors.set("--clr-surface-tonal-a20", "#5e4040");
redColors.set("--clr-surface-tonal-a30", "#735858");
redColors.set("--clr-surface-tonal-a40", "#8a7272");
redColors.set("--clr-surface-tonal-a50", "#a08d8c");

const blueColors = new Map();
blueColors.set("--clr-primary-a0", "#3179f2");
blueColors.set("--clr-primary-a10", "#5787f4");
blueColors.set("--clr-primary-a20", "#7395f6");
blueColors.set("--clr-primary-a30", "#8aa3f8");
blueColors.set("--clr-primary-a40", "#a0b2f9");
blueColors.set("--clr-primary-a50", "#b4c1fb");

blueColors.set("--clr-surface-a0", "#0c1021");
blueColors.set("--clr-surface-a10", "#232636");
blueColors.set("--clr-surface-a20", "#3b3d4c");
blueColors.set("--clr-surface-a30", "#545663");
blueColors.set("--clr-surface-a40", "#6e707b");
blueColors.set("--clr-surface-a50", "#898a94");

blueColors.set("--clr-surface-tonal-a0", "#121a32");
blueColors.set("--clr-surface-tonal-a10", "#292f46");
blueColors.set("--clr-surface-tonal-a20", "#41455b");
blueColors.set("--clr-surface-tonal-a30", "#595d70");
blueColors.set("--clr-surface-tonal-a40", "#737687");
blueColors.set("--clr-surface-tonal-a50", "#8d909e");

const themeNames = new Map();
themeNames.set("default", defaultColors);
themeNames.set("red", redColors);
themeNames.set("green", greenColors);
themeNames.set("blue", blueColors);

function Settings() {

    const [theme, setTheme] = useState(defaultColors);

    const updateTheme = (colorTheme) => {
        const root = document.documentElement;

        colorTheme.forEach((value, key) => {
            root.style.setProperty(key, value);
        });
    };

    const saveColorTheme = (themeName) => {
        localStorage.setItem("selectedTheme", themeName);
    }

    const changeTheme = (colorTheme, themeName) => {
        setTheme(colorTheme);
        updateTheme(colorTheme);
        saveColorTheme(themeName);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("selectedTheme");
        const theme = themeNames.get(savedTheme);
        if (theme != undefined) {
            setTheme(theme);
            updateTheme(theme);
        } else {
            setTheme(defaultColors);
            updateTheme(defaultColors);
            saveColorTheme("default");
        }
    }, []);
    
    return (
        <>
        <div className="flex flex-row justify-center gap-8 flex-wrap sm:flex-no-wrap content-wrapper">
            <div>
                <h2 className="text-2xl font-bold mb-4">Change Color Theme</h2>
                <div className="flex flex-row justify-center gap-4 flex-wrap">
                    <div className="purple-theme theme-button" onClick={() => changeTheme(defaultColors, "default")}> </div>
                    <div className="green-theme theme-button" onClick={() => changeTheme(greenColors, "green")}> </div>
                    <div className="red-theme theme-button" onClick={() => changeTheme(redColors, "red")}> </div>
                    <div className="blue-theme theme-button" onClick={() => changeTheme(blueColors, "blue")}> </div>
                </div>
                
            </div>

            {/* <div>
                <h2 className="text-2xl font-bold mb-4">(Mobile) Scroll Side</h2>
                <div className="flex flex-row justify-center gap-4 flex-wrap">
                    <label htmlFor="handedness">Left</label>
                    <Switch 
                        id="handedness"
                        style={{
                            "--switch-bg": "var(--clr-primary-a0)",
                            "--switch-bg-checked": "var(--clr-primary-a10)"
                        }}
                        className="
                            data-[state=checked]:bg-[var(--switch-bg-checked)] 
                            data-[state=unchecked]:bg-[var(--switch-bg)] 
                            white-thumb
                        "
                    />
                    <label htmlFor="handedness">Right</label>
                </div>
            </div> */}
        </div>
        </>
    )
}

export default Settings;