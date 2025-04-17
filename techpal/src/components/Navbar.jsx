import { AiOutlineHome, AiOutlineSetting, AiOutlineLogout, AiOutlineQuestionCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login');
    };

    const onHome = () => {
        navigate('/');
    };

    return (
        <div className="w-full md:w-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white flex flex-col items-center py-6 shadow-lg">
            {/* Logo */}
            <div className="mb-8">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                    TP
                </div>
            </div>

            {/* Navegación */}
            <nav className="flex-1 space-y-8">
                <button
                    className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-md"
                    onClick={onHome}
                >
                    <AiOutlineHome className="text-2xl" />
                </button>
                <button
                    className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-md"
                >
                    <AiOutlineSetting className="text-2xl" />
                </button>
                <button
                    className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-md"
                    onClick={onLogout}
                >
                    <AiOutlineLogout className="text-2xl" />
                </button>
            </nav>

            {/* Ayuda */}
            <div className="mt-8">
                <button
                    className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-md"
                >
                    <AiOutlineQuestionCircle className="text-2xl" />
                </button>
            </div>
        </div>
    );
}