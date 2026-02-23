import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Profile() {
  const userName = "BOMA IT BDN";
  const userEmail = "bomaittbdn@gmail.com";

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
            {/* Greeting */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm mb-6">Selamat Datang, [user]</p>
              
              {/* Profile Picture */}
              <div className="flex justify-center mb-6 relative">
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 border-4 border-gray-200 relative overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/128" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute bottom-2 right-2 bg-gray-700 text-white p-2 rounded-full text-lg hover:bg-gray-800 transition">
                    📷
                  </button>
                </div>
              </div>

              {/* User Info */}
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{userName}</h1>
              <p className="text-gray-500 text-sm">{userEmail}</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Nama */}
              <div className="flex items-center bg-gray-50 rounded-lg p-4">
                <span className="text-xl mr-4">👤</span>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-700">Nama</label>
                  <input 
                    type="text" 
                    placeholder="[Name]"
                    className="w-full bg-transparent text-gray-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center bg-gray-50 rounded-lg p-4">
                <span className="text-xl mr-4">✉️</span>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent text-gray-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Telepone */}
              <div className="flex items-center bg-gray-50 rounded-lg p-4">
                <span className="text-xl mr-4">📱</span>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-700">Telepone</label>
                  <input 
                    type="tel" 
                    placeholder="[Phone]"
                    className="w-full bg-transparent text-gray-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Bahasa */}
              <div className="flex items-center bg-gray-50 rounded-lg p-4">
                <span className="text-xl mr-4">🌐</span>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-700">Bahasa</label>
                  <input 
                    type="text" 
                    placeholder="[Language]"
                    className="w-full bg-transparent text-gray-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-center bg-gray-50 rounded-lg p-4">
                <span className="text-xl mr-4">📍</span>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-700">Alamat</label>
                  <input 
                    type="text" 
                    placeholder="[Location]"
                    className="w-full bg-transparent text-gray-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Postcode */}
              <div className="flex items-center bg-gray-50 rounded-lg p-4">
                <span className="text-xl mr-4">📮</span>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-700">Postcode</label>
                  <input 
                    type="text" 
                    placeholder="Taraske Guadon [Eme] lau"
                    className="w-full bg-transparent text-gray-600 focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
