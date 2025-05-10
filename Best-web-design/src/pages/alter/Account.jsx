import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { BadgeIcons } from '../../data/badgeIcons';
import defaultAvatar from '../../assets/fa65411d6c03730a8cb16f0cbf713e0e.jpg';


// Helper: Map badge id to icon component from Badge.jsx
// You may need to export the icon components from Badge.jsx for this to work.
// For this example, let's assume Badge.jsx exports an object BadgeIcons with keys matching badge.iconKey

const useScroll = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };
  
function Account() {
    const [user, setUser] = useState({
        username: 'John Doe',
        email: 'john@example.com',
        avatar: defaultAvatar,
        progress: 75,
        badges: [
            {
                id: 'connector',
                title: 'Người kết nối',
                description: 'Kết nối với 10 người bạn'
            },
            { 
                id: '7days',
                title: '7 ngày liên tiếp',
                description: 'Tuần đầu tiên'
            },
            { 
                id: 'first-challenge',
                title: 'Thử thách đầu tiên',
                description: 'Hoàn thành 1 thử thách'
            },
            {
                id: '14days',
                title: '14 ngày liên tiếp',
                description: 'Hai tuần kiên trì'
            },
            {
                id: '30days',
                title: '30 ngày liên tiếp',
                description: 'Thói quen đã hình thành'
            },
            {
                id: 'superstar',
                title: 'Siêu sao',
                description: 'Hoàn thành 5 thử thách'
            },
            { 
                id: 'inspirer',
                title: 'Người truyền cảm hứng',
                description: 'Chia sẻ 5 thành tựu'
            },
            {
                id: 'master',
                title: 'Master',
                description: 'Hoàn thành 10 thử thách'
            }
        ],
    });

    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(user.username);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser(prev => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUsernameUpdate = () => {
        setUser(prev => ({ ...prev, username: newUsername }));
        setIsEditing(false);
    };


    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Profile Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <img 
                                    src={user.avatar} 
                                    alt="Profile" 
                                    className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                                />
                                <label 
                                    htmlFor="avatar-upload" 
                                    className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </label>
                                <input 
                                    id="avatar-upload" 
                                    type="file" 
                                    accept="image/*" 
                                    className="hidden" 
                                    onChange={handleAvatarChange}
                                />
                            </div>
                            <div className="flex-1">
                                {isEditing ? (
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value={newUsername}
                                            onChange={(e) => setNewUsername(e.target.value)}
                                            className="text-2xl font-bold border-b-2 border-primary focus:outline-none"
                                        />
                                        <button 
                                            onClick={handleUsernameUpdate}
                                            className="text-green-500 hover:text-green-600"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <h1 className="text-2xl font-bold">{user.username}</h1>
                                        <button 
                                            onClick={() => setIsEditing(true)}
                                            className="text-gray-500 hover:text-gray-600"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                <p className="text-gray-600">{user.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Progress Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-bold mb-4">Tiến độ của bạn</h2>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-light">
                                        Hoàn thành
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-primary">
                                        {user.progress}%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-light">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${user.progress}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Badges Section */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Huy hiệu của bạn</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {user.badges.map((badge, index) => {
                                const BadgeIcon = BadgeIcons[badge.id];
                                return (
                                    <motion.div
                                        key={badge.id}
                                        className="flex flex-col items-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <motion.div
                                            className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-3 ${
                                                badge.id.includes('day') 
                                                    ? badge.id.includes('7') 
                                                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                                                        : badge.id.includes('14')
                                                            ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                                                            : 'bg-gradient-to-br from-purple-400 to-pink-600 relative overflow-hidden'
                                                : badge.id.includes('challenge')
                                                    ? badge.id.includes('first')
                                                        ? 'bg-gradient-to-br from-green-400 to-green-600'
                                                        : badge.id.includes('star')
                                                            ? 'bg-gradient-to-br from-red-400 to-red-600'
                                                            : 'bg-gradient-to-br from-indigo-400 to-purple-600 relative overflow-hidden'
                                                : badge.id.includes('inspire')
                                                    ? 'bg-gradient-to-br from-pink-400 to-pink-600'
                                                    : badge.id.includes('connect')
                                                        ? 'bg-gradient-to-br from-amber-400 to-amber-600'
                                                        : 'bg-gradient-to-br from-teal-400 to-green-500 relative overflow-hidden'
                                            }`}
                                            whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                            style={
                                                badge.id.includes('30') || badge.id.includes('master') || badge.id.includes('speed')
                                                    ? {
                                                        background: badge.id.includes('30') 
                                                            ? "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
                                                            : badge.id.includes('master')
                                                                ? "linear-gradient(-45deg, #6e48aa, #9d50bb, #6e48aa, #9d50bb)"
                                                                : "linear-gradient(-45deg, #00c9ff, #92fe9d, #00c9ff, #92fe9d)",
                                                        backgroundSize: "400% 400%"
                                                    }
                                                    : {}
                                            }
                                            animate={
                                                badge.id.includes('30') || badge.id.includes('master') || badge.id.includes('speed')
                                                    ? {
                                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                                    }
                                                    : {}
                                            }
                                            transition={
                                                badge.id.includes('30') || badge.id.includes('master') || badge.id.includes('speed')
                                                    ? {
                                                        duration: badge.id.includes('30') ? 10 : badge.id.includes('master') ? 8 : 6,
                                                        ease: "easeInOut",
                                                        repeat: Infinity
                                                    }
                                                    : {}
                                            }
                                        >
                                            {/* Sparkle effect overlay */}
                                            {(badge.id.includes('30') || badge.id.includes('master') || badge.id.includes('speed')) && (
                                                <motion.div 
                                                    className="absolute inset-0"
                                                    style={{
                                                        background: "radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10%)",
                                                        backgroundSize: badge.id.includes('30') ? "15px 15px" : "20px 20px"
                                                    }}
                                                    animate={{
                                                        opacity: [0, 0.5, 0],
                                                        scale: [0.8, 1.2, 0.8],
                                                        backgroundPosition: badge.id.includes('30') ? undefined : ["0% 0%", "100% 100%"]
                                                    }}
                                                    transition={{
                                                        duration: badge.id.includes('30') ? 3 : 4,
                                                        repeat: Infinity,
                                                        repeatType: badge.id.includes('30') ? "reverse" : undefined
                                                    }}
                                                />
                                            )}
                                            <motion.div
                                                initial={{ scale: 0.9, opacity: 0.9 }}
                                                animate={{ 
                                                    scale: 1, 
                                                    opacity: 1,
                                                    filter: badge.id.includes('speed') || badge.id.includes('master') || badge.id.includes('30')
                                                        ? ["drop-shadow(0 0 3px rgba(255,255,255,0.7))", "drop-shadow(0 0 10px rgba(255,255,255,0.9))", "drop-shadow(0 0 3px rgba(255,255,255,0.7))"]
                                                        : undefined
                                                }}
                                                transition={{ 
                                                    duration: 0.3,
                                                    filter: badge.id.includes('speed') || badge.id.includes('master') || badge.id.includes('30')
                                                        ? { duration: 1.5, repeat: Infinity }
                                                        : undefined
                                                }}
                                            >
                                                <BadgeIcon className="w-12 h-12 text-white relative z-10" />
                                            </motion.div>
                                        </motion.div>
                                        <h4 className="font-semibold text-center">{badge.title}</h4>
                                        <p className="text-xs text-gray-500 text-center">{badge.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Account;
