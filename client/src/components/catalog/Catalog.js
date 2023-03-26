import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CatalogItem } from './CatalogItem/CatalogItem';

import { AuthContext } from '../../contexts/AuthContext';

import './Catalog.css';

export const Catalog = ({
   walls
}) => {
   const { isAuthenticated } = useContext(AuthContext);

   const addNavigate = useNavigate();
   const AddWall = () => {
      addNavigate('/createWall')

   }
   return (
      <div className="service">

         {isAuthenticated && (
            <button className='addButton'><img className='addButtonImage' src="images/addButton.jpg" alt="my image" onClick={AddWall} /></button>
         )}

         <div className="container">

            <div className="titlepage">

               <h2>OUR <span className="green">Living Wall</span></h2>
               {/* <h1 className="our_text" style={{fontsSize: "50px", marginTop: -"30px", color: "#090808"}}>OUR Living Wall</h1> */}
               <p className="ipsum_text">Nature is not a place to visit, it is home. </p>
            </div>
            <div className="row">
               {walls.map(x => <CatalogItem key={x._id} {...x} />)}


               {/* <div className="col-md-6">
                  <div className="container_main">
                     <img src="images/square.webp" alt="Avatar" className="image" />
                     <div className="overlay">
                        <Link to="#" className="icon" title="See">
                           <i className="fa fa-search"></i>
                        </Link>
                     </div>
                  </div>
                  <h3 className="temper_text">Tempor incididunt ut labore et dolore</h3>
                  <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
               </div>
               <div className="col-md-6">
                  <div className="container_main">
                     <img src="images/round.jpg" alt="Avatar" className="image" />
                     <div className="overlay">
                        <Link to="#" className="icon" title="See">
                           <i className="fa fa-search"></i>
                        </Link>
                     </div>
                  </div>
                  <h3 className="temper_text">Tempor incididunt ut labore et dolore</h3>
                  <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
               </div>
               <div className="col-md-6">
                  <div className="container_main">
                     <img src="images/triangle.jpg" alt="Avatar" className="image" />
                     <div className="overlay">
                        <Link to="#" className="icon" title="See">
                           <i className="fa fa-search"></i>
                        </Link>
                     </div>
                  </div>
                  <h3 className="temper_text">Tempor incididunt ut labore et dolore</h3>
                  <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
               </div> */}

               {/* Add New Button */}
               {/* <div className="col-md-6">
                  <div className="container_main">
                     <img src="images/addButton.jpg" alt="Avatar" className="image" />
                     <div className="overlay">
                        <Link to="/createWall" className="icon" title="Add">
                           <i className="fa fa-search"></i>
                        </Link>
                     </div>
                  </div>
                  <h3 className="temper_text">Add New Item</h3>
                  <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
               </div> */}

               {walls.length === 0 && (
                  <h3 className="no-articles" style={{ padding: ".7em 40%", fontSize: "30px", fontWeight: "bold" }}>No articles yet</h3>
               )}
            </div>
         </div>
      </div>
   )
}