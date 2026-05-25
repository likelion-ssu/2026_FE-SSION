import Story from "./Story";

function StoryTray() {
    return (
        <div className="p-[8px 9px] mb-5">
            <div className="flex flex-row items-center justify-between gap-2 w-147 h-27">
                <Story name = {"HABIN01"} />
                <Story name = {"HABIN02"} />
                <Story name = {"HABIN03"} />
                <Story name = {"HABIN04"} />
                <Story name = {"HABIN05"} />
                <Story name = {"HABIN06"} />
            </div>
        </div>
    );
}

export default StoryTray;