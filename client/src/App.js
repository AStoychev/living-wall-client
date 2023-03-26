import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {wallServiceFactory} from './services/wallService'
import { withAuth } from './hoc/withAuth';

// import * as wallService from './services/wallService';
import { AuthProvider } from './contexts/AuthContext';

import { useService } from './hooks/useService';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Section } from './components/section/Section';
import { Login } from './components/login/Login';
import { Logout } from './components/logout/Logout';
import { Register } from './components/register/Register';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Catalog } from './components/catalog/Catalog';
import { CreateWall } from './components/createWall/CreateWall';
import { EditWall } from './components/editWall/EditWall';
import { WallDetails } from './components/wallDetails/WallDetails';

import './App.css';

function App() {
    const navigate = useNavigate();
    const [walls, setWalls] = useState([]);
    const wallService = wallServiceFactory(); //auth.accessToken

    useEffect(() => {
        wallService.getAll()
            .then(result => {
                setWalls(result)
            })
    }, []);

    const onCreateWallSubmit = async (data) => {
        const newWall = await wallService.create(data);

        setWalls(state => [...state, newWall])

        navigate('/catalog')
    };

    const onWallEditSubmit = async (values) => {
        const result = await wallService.edit(values._id, values);

        setWalls(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`)
    }

    // not use
    // const EnchancedLogin = withAuth(Login);

    return (
        <AuthProvider>
            <Header />
            <div style={{ padding: "-1px" }}>
                <main className="main">
                    <Routes>
                        <Route path='/' element={<Section />} />
                        <Route path='/login' element={<Login />} />     {/* We can use EnchancedLogin. This can do the same performance like Login. For sample only.*/}
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/catalog' element={<Catalog walls={walls} />} />

                        <Route path='/createWall' element={<CreateWall onCreateWallSubmit={onCreateWallSubmit} />} />

                        <Route path='/catalog/:wallId' element={<WallDetails />} />
                        <Route path='/catalog/:wallId/edit' element={<EditWall onWallEditSubmit={onWallEditSubmit} />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </AuthProvider>
    );
}

export default App;
