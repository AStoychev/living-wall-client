import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className=" col-md-3 col-sm-6">
                  <p className="variat pad_roght2">
                  You can also find us at
                     </p>
                     <ul className="social_icon">
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
                  <div className=" col-md-3 col-sm-6">
                     <h3>LET US HELP YOU </h3>
                     <p  className="variat pad_roght2">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by 
                     </p>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <h3>INFORMATION</h3>
                     <ul className="link_menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about"> About</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/contact">Find Us</Link></li>
                     </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <h3>OUR Design</h3>
                     <p  className="variat">There are many variat
                        ions of passages of L
                        orem Ipsum available
                        , but the majority h
                        ave suffered altera
                        tion in some form, by 
                     </p>
                  </div>
               </div>
            </div>
            {/* <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <p>© 2019 All Rights Reserved. Design by <Link to="https://html.design/"> Free Html Templates</Link></p>
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
      </footer>
    );
}