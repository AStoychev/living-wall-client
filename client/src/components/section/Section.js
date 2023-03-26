import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

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
                        <p style={{ marginBottom: "50px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px"}}>Design</p>
                        <p style={{ marginBottom: "170px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px"}}>Of Living Wall</p>
                        <div className="mb-2">
                            <Button variant="primary" size="lg">
                                More
                            </Button>{' '}
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
                            <Button variant="primary" size="lg">
                                More
                            </Button>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/moss_wall3.jpg"
                        //   src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p style={{ marginBottom: "50px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Design</p>
                        <p style={{ marginBottom: "170px", fontSize: 50, fontFamily: "Georgia", letterSpacing: "1px", fontWeight: "900px" }}>Of Living Wall</p>
                        {/* <p style={{ fontSize: 50 }}>Design</p>
                        <p style={{ padding: "86px", fontSize: 50 }}>Of Living Wall</p> */}
                        <div className="mb-2">
                            <Button variant="primary" size="lg">
                                More
                            </Button>{' '}
                        </div>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Section;