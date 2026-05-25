import Story from "./Story";

function StoryTray() {
    return (
        <div className="flex flex-row items-center p-[8px 9px] gap-2.5">
            <Story name = {"HABIN01"} />
            <Story name = {"HABIN02"} />
            <Story name = {"HABIN03"} />
            <Story name = {"HABIN04"} />
            <Story name = {"HABIN05"} />
            <Story name = {"HABIN06"} />
        </div>
    );
}

export default StoryTray;