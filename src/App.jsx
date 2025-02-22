import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basics from "./components/Basics.jsx";
import Exploration from "./components/Exploration.jsx";
import Encounters from "./components/Encounters.jsx";
import Settings from "./components/Settings.jsx";

function App() {
  return (
    <>
      <Tabs defaultValue="basic">
        <TabsList className="tab-button horizontal-scroll">
            <TabsTrigger value="basic" className="tab-button">Basic</TabsTrigger>
            <TabsTrigger value="exploration" className="tab-button">Exploration</TabsTrigger>
            <TabsTrigger value="encounters" className="tab-button">Encounters</TabsTrigger>
            <TabsTrigger value="settings" className="tab-button">Settings</TabsTrigger>
        </TabsList>
        <TabsContent
          value="basic"
          className="flex flex-row justify-center gap-4 flex-wrap sm:flex-no-wrap content-wrapper"
        >
          <Basics />
        </TabsContent>

        <TabsContent
          value="exploration"
          className="flex flex-row justify-center gap-4 flex-wrap sm:flex-no-wrap content-wrapper mt-[0px]"
        >
          <Exploration />
        </TabsContent>

        <TabsContent
          value="encounters"
          className="flex flex-row justify-center gap-4 flex-wrap sm:flex-no-wrap content-wrapper mt-[0px]"
        >
          <Encounters />
        </TabsContent>
        <TabsContent
          value="settings"
          className="flex flex-row justify-center gap-4 flex-wrap sm:flex-no-wrap content-wrapper"
        >
            <Settings />
        </TabsContent>
      </Tabs>
      {/* <ColorChanger /> */}
    </>
  );
}

export default App;
