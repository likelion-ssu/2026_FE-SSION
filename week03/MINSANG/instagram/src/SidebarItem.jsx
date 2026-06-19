export default function SidebarItem({ icon, text }) {
    return (
        <div className="flex items-center gap-3 w-full p-3">
            <img
                src={icon}
                alt={text}
                className="w-6 h-6"
            />
            <span className="text-sm font-medium">{text}</span>
        </div>
    );
}