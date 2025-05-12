import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { BadgeIcons } from '../../data/badgeIcons';
import defaultAvatar from '../../assets/fa65411d6c03730a8cb16f0cbf713e0e.jpg';
import { Link } from 'react-router-dom';

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
        progress: {
            completed: 15,
            total: 20,
            streak: 7,
            level: 3
        },
        activeChallenges: [
            {
                id: 1,
                title: "30 ngày chạy bộ",
                category: "Sức khỏe",
                progress: 60,
                daysLeft: 12,
                color: "primary",
                bgColor: "primary",
                textColor: "white"
            },
            {
                id: 2,
                title: "Học tiếng Anh mỗi ngày",
                category: "Học tập",
                progress: 30,
                daysLeft: 21,
                color: "accent",
                bgColor: "accent",
                textColor: "white"
            }
        ],
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
                    {/* Combined Cover and Profile Section */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        {/* Gradient Cover */}
                        <div className="relative h-48 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                        </div>

                        {/* Profile Info */}
                        <div className="px-6 pb-6">
                            <div className="flex items-end -mt-16 mb-4">
                                <div className="relative">
                                    <img 
                                        src={user.avatar} 
                                        alt="Profile" 
                                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
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
                                <div className="ml-6 flex-1">
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
                    </div>

                    {/* Progress Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            Tiến độ của bạn
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Main Progress */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Hoàn thành thử thách</span>
                                    <span className="font-bold text-primary text-lg">{user.progress.completed}/{user.progress.total}</span>
                                </div>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-orange-100 border-2 border-orange-200">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(user.progress.completed / user.progress.total) * 100}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 relative"
                                        >
                                            <div className="absolute inset-0 bg-white/20"></div>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-white/40 rounded-full"></div>
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Bắt đầu</span>
                                        <span>Hoàn thành</span>
                                    </div>
                                </div>
                            </div>

                            {/* Streak and Level */}
                            <div className="grid grid-cols-2 gap-6">
                                <motion.div 
                                    className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="text-3xl font-bold text-orange-500 mb-2">{user.progress.streak}</div>
                                    <div className="text-sm text-orange-600 font-medium">Ngày liên tiếp</div>
                                    <div className="mt-2 text-xs text-orange-500/70">🔥 Giữ vững phong độ!</div>
                                </motion.div>
                                <motion.div 
                                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="text-3xl font-bold text-blue-500 mb-2">Cấp {user.progress.level}</div>
                                    <div className="text-sm text-blue-600 font-medium">Trình độ hiện tại</div>
                                    <div className="mt-2 text-xs text-blue-500/70">⭐ Tiếp tục phát triển!</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Active Challenges Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Thử thách đang tham gia
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {user.activeChallenges.map((challenge) => (
                                <motion.div
                                    key={challenge.id}
                                    className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{challenge.title}</h3>
                                            <span className={`text-sm px-3 py-1 rounded-full bg-${challenge.bgColor} bg-opacity-10 text-${challenge.color}`}>
                                                {challenge.category}
                                            </span>
                                        </div>
                                        <span className={`text-sm font-medium text-${challenge.color}`}>Còn {challenge.daysLeft} ngày</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Tiến độ</span>
                                            <span>{challenge.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${challenge.progress}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full bg-${challenge.color}`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <motion.button
                                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/challenges')}
                            >
                                <Link to="/challenges">Xem tất cả thử thách</Link>
                            </motion.button>
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
