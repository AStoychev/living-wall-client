import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    title,
    category,
    price,
    imageUrl,
    description,
}) => {
    return (
        <div className="col-md-6">
            <div className="container_main">
                <img src={imageUrl} alt="Avatar" className="image" />
                <div className="overlay">
                    <Link to={`/catalog/${_id}`} className="icon" title="See" role="details">
                        <i className="fa fa-search"></i>
                    </Link>
                </div>
            </div>
            <h3 className="temper_text">{title}</h3>
            <p className="dololr_text">{description} </p>
        </div>
    )
}