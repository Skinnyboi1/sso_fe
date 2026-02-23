export default function Navbar() {
    return (
        <nav className="h-16 bg-blue-900 text-white flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold">BO•MA</span>
                <span className="text-lg font-normal">Account</span>
            </div>
            <div className="flex items-center gap-8">
                <button className="hover:text-gray-200 cursor-pointer transition-colors">
                    <span className="text-2xl">🔔</span>
                </button>
                <button className="hover:text-gray-200 cursor-pointer transition-colors">
                    <span className="text-2xl">👤</span>
                </button>
                <button className="hover:text-gray-200 cursor-pointer transition-colors">
                    <span className="text-2xl">⚙️</span>
                </button>
            </div>
        </nav>
    );
}