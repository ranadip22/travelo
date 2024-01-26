import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Dashboard() {
    const [activeSection, setActiveSection] = useState('profile');

    const showContent = (section) => {
        setActiveSection(section);
    };

    const logout = () => {
        // alert('Logging out...');
    };

    return (
        <>
            <div className="dashboard-bg">
                <Navbar />
                <div className="dashboard-container">
                    <Sidebar showContent={showContent} logout={logout} />
                    <MainContent activeSection={activeSection} />
                </div>
            </div>
        </>
    );
}

export default Dashboard