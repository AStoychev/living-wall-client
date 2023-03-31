import { Routes, Route, useNavigate } from 'react-router-dom';

import { withAuth } from './hoc/withAuth';

// import CustomErrorBoundary from './components/CustomErrorBoundary/customErrorBoundary';

// import * as wallService from './services/wallService';
import { AuthProvider } from './contexts/AuthContext';
import { WallProvider } from './contexts/WallContext';

import { useService } from './hooks/useService';

import { Profile } from './components/profile/Profile';
import { EditProfile } from './components/profile/EditProfile';

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
import { DeleteModal } from './components/wallDetails/DeleteModal';
import { WallDetails } from './components/wallDetails/WallDetails';

import './App.css';
import { RouteGuard, PublicRouteGuard } from './components/common/RouteGuard';
import { WallOwner } from './components/common/WallOwner';

function App() {

    // not use
    // const EnchancedLogin = withAuth(Login);

    return (
        <AuthProvider>
            <WallProvider>
                <Header />

                {/* <CustomErrorBoundary> */}

                    <div style={{ padding: "-1px" }}>
                        <main className="main">
                            <Routes>
                                <Route path='/' element={<Section />} />

                                <Route element={<PublicRouteGuard />}>
                                    <Route path='/login' element={<Login />} />     {/* We can use EnchancedLogin. This can do the same performance like Login. For sample only.*/}
                                    <Route path='/register' element={<Register />} />
                                </Route>

                                <Route path='/about' element={<About />} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='/catalog' element={<Catalog />} />

                                <Route element={<RouteGuard />}>
                                    <Route path='/profile/:userId' element={<Profile />} />
                                    <Route path='/profile/editProfile' element={<EditProfile />} />

                                    <Route path='/createWall' element={<CreateWall />} />
                                    <Route path='/logout' element={<Logout />} />

                                    <Route path='/catalog/:wallId/edit' element={
                                        <WallOwner>
                                            <EditWall />
                                            {/* <DeleteModal /> */}
                                        </WallOwner>
                                    } />
                                </Route>

                                <Route path='/catalog/:wallId' element={<WallDetails />} />
                                {/* <Route element={<RouteGuard />}>
                            <Route path='/catalog/:wallId/edit' element={<EditWall onWallEditSubmit={onWallEditSubmit} />} />
                        </Route> */}

                            </Routes>
                        </main>
                    </div>

                {/* </CustomErrorBoundary> */}

                <Footer />
            </WallProvider>
        </AuthProvider>
    );
}

export default App;



// Variant one
// <Route path='/createWall' element={<RouteGuard>
//     <CreateWall onCreateWallSubmit={onCreateWallSubmit} />
// </RouteGuard>}
// />