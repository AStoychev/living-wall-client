import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatalogItem } from './CatalogItem/CatalogItem';

import { AuthContext } from '../../contexts/AuthContext';

import './Catalog.css';
import { useWallContext } from '../../contexts/WallContext';

export const Catalog = () => {
   const { walls } = useWallContext();
   const { isAuthenticated } = useContext(AuthContext);

   const addNavigate = useNavigate();
   const AddWall = () => {
      addNavigate('/createWall')

   }

   return (
      <div className="service">

         {isAuthenticated && (
            <button className='addButton'><img className='addButtonImage' src="images/addButton.jpg" alt="my" onClick={AddWall} /></button>
         )}

         <div className="container">

            <div className="titlepage">

               <h2>OUR <span className="green">Living Wall</span></h2>
               <p className="ipsum_text">Nature is not a place to visit, it is home. </p>
            </div>
            <div className="row">
               {walls.map(x => <CatalogItem key={x._id} {...x} />)}

               {walls.length === 0 && (
                  <h3 className="no-articles" style={{ padding: ".7em 40%", fontSize: "30px", fontWeight: "bold" }}>No articles yet</h3>
               )}
            </div>
         </div>
      </div>
   )
}