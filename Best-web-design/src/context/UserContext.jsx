//Quan lý state group challenge của user
// và danh sách challenge toàn cục 
import React, { createContext, useState, useContext } from 'react';
import { challenges } from '../data/challenges.jsx';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userChallenges, setUserChallenges] = useState([]);
    const [globalChallenges, setGlobalChallenges] = useState([...challenges]); // Khởi tạo với danh sách challenges gốc

    const addGroupChallenge = (challenge) => {
        setUserChallenges(prev => [...prev, {
            id: Date.now(),
            title: challenge.name,
            category: "Nhóm",
            progress: 0,
            daysLeft: parseInt(challenge.duration),
            color: "primary",
            bgColor: "primary",
            textColor: "white",
            isGroup: true,
            maxMembers: parseInt(challenge.maxMembers),
            currentMembers: 1,
            privacy: challenge.privacy
        }]);
    };

    const addChallenge = (challenge) => {
        // Thêm vào danh sách thử thách toàn cục
        setGlobalChallenges(prev => [...prev, challenge]);
        
        // Thêm vào danh sách thử thách của user
        setUserChallenges(prev => [...prev, {
            id: challenge.id,
            title: challenge.title,
            category: challenge.category,
            progress: 0,
            daysLeft: parseInt(challenge.duration),
            color: challenge.color,
            bgColor: challenge.bgColor,
            textColor: challenge.textColor,
            isGroup: false,
            description: challenge.description
        }]);
    };

    return (
        <UserContext.Provider value={{ 
            userChallenges, 
            globalChallenges,
            addGroupChallenge, 
            addChallenge 
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
} 
