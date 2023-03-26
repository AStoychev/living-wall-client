import Iframe from 'react-iframe'

export const Contact = () => {
    return (
        <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2 >We Are Here</h2>
                  </div>
               </div>
            </div>
            <div className="row" style={{paddingLeft:"5%"}}>
               <div className="col-md-6">
                  <div className="map_main" style={{paddingBottom:"5%"}}>
                     <div className="map-responsive" >
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1800.1315802238175!2d24.705548437649817!3d42.50721846376471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1679092995650!5m2!1sen!2sbg" width="1000" height="445" frameBorder="0" style="border:0; width: 100%" allowFullScreen=""></Iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1800.1315802238175!2d24.705548437649817!3d42.50721846376471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1679092995650!5m2!1sen!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}