import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('profile');

    const menuItems = [
        { id: 'profile', icon: '👤', label: 'My Profile', path: '/profile' },
        { id: 'sessions', icon: '📱', label: 'My Sessions', path: '/sessions' },
        { id: 'security', icon: '🛡️', label: 'Security', path: '/security' },
        { id: 'privacy', icon: '🔒', label: 'Privacy', path: '/privacy' },
        { id: 'apps', icon: '📦', label: 'Apps', path: '/apps' },
        { id: 'support', icon: '🎧', label: 'Contact Support', path: '/support' },
    ];

    return (
        <div className="w-64 bg-blue-900 text-white flex flex-col px-4 py-6 gap-2">
            {menuItems.map((item) => (
                <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setActiveItem(item.id)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors no-underline ${
                        location.pathname === item.path
                            ? 'bg-white text-black font-semibold'
                            : 'text-white hover:bg-blue-800'
                    }`}
                >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base">{item.label}</span>
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;