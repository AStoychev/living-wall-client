import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
   const { isAuthenticated, userId, userEmail, userName } = useContext(AuthContext);

   return (
      <>
         <header>
            <div className="header">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-10 offset-md-1">
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarsExample04">
                              <ul className="navbar-nav mr-auto">
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                 </li>
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                 </li>
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/catalog"> Catalog </Link>
                                 </li>

                                 {!isAuthenticated && (
                                    <>
                                       <li className="nav-item">
                                          <Link className="nav-link" to="/login">Login</Link>
                                       </li>
                                       <li className="nav-item">
                                          <Link className="nav-link" to="/register">Register</Link>
                                       </li>
                                    </>
                                 )}

                                 <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Find Us</Link>
                                 </li>



                                 {isAuthenticated && (
                                    <>
                                       <li className="nav-item">
                                          <Link className="nav-link" to="/logout">Logout</Link>
                                       </li>
                                       <Link className="nav-link-span" to={`/profile/${userId}`} >{userName ? userName : userEmail}</Link>
                                    </>
                                 )}

                              </ul>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
}