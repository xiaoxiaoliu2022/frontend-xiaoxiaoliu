import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Movie.css";
import ReplacementImage from "./NoPosterAvailable-crop.jpeg";
// import { Button } from "react-bootstrap";

const Movie = props => {
    let params = useParams();
    const [movie, setMovie] = useState({
        id: null,
        title: "",
        rated: "",
        reviews: []
    });
    useEffect(() => {
        // console.log(movie)
        const getMovie = id => {
            // console.log(movie.id)
      
            MovieDataService.getSingleMovie(id).then(response => {
                // console.log(response.data._id)
                setMovie(response.data);
            })
            .catch(e => {
                console.log(e);
            });
           
            //todo
            //implement get movie
        }
        getMovie(params.id)
    }, [params.id]);
    return (
        <div>
    
            <Container>
                <Row>
                    <Col>
                        <div className="poster">
                            <Image
                                className="bigPicture"
                                src={movie.poster + "/100px250"}
                                // put the stand in poster same with what did in moviesListnihao
                                onError={(e) => {
                                    e.target.src = ReplacementImage
                                }}
                                fluid />
                        </div>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header as="h5">{movie.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {movie.plot}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <h2 >Reviews</h2>
                        <br></br>
                        {movie.reviews.map((review, index) => {
                            return (
                                <div className="d-flex">
                                    <div className="flex-shrink-0 reviewsText">
                                        <h5>{review.name + "reviewed on"}</h5>
                                        <p className="review">{review.review}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            {/* Placeholder text for Movie */}
        </div>
    )
}

export default Movie;