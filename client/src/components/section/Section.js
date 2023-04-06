import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Section = () => {
    return (
        <div className="container">
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/moss_wall1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p style={{ marginBottom: "50px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Design</p>
                        <p style={{ marginBottom: "170px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Of Living Wall</p>
                        <div className="mb-2">
                            <Link to='/catalog'>
                                <Button variant="primary" size="lg">
                                    More
                                </Button>{' '}
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/moss_wall2.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p style={{ marginBottom: "50px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Design</p>
                        <p style={{ marginBottom: "170px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Of Living Wall</p>
                        <div className="mb-2">
                            <Link to='/catalog'>
                                <Button variant="primary" size="lg">
                                    More
                                </Button>{' '}
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/moss_wall3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p style={{ marginBottom: "50px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Design</p>
                        <p style={{ marginBottom: "170px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Of Living Wall</p>
                        <div className="mb-2">
                            <Link to='/catalog'>
                                <Button variant="primary" size="lg">
                                    More
                                </Button>{' '}
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Section;