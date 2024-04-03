import './App.css';
import RootLayout from './components/RootLayout/RootLayout';
import NavigationButtonBar from './components/NavigationButtonBar/NavigationButtonBar';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/admin/AdminPage';
import UserPage from './pages/user/UserPage';
import AuthPage from './pages/auth/AuthPage'
import RootHeader from './components/RootHeader/RootHeader';

function App() {
    return (
        <RootLayout>
            <RootHeader />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='admin/*' element={<AdminPage />} />
                <Route path='user/*' element={<UserPage />} />
                <Route path='auth/*' element={<AuthPage />} />
            </Routes>
            <NavigationButtonBar />
        </RootLayout>
    );
}

export default App;
