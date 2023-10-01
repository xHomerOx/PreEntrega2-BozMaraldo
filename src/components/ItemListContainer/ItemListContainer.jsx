import React from 'react';
import GamesData from '../../hooks/api/Api';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

const ItemListContainer = ({ genre }) => {

    const { games, category } = GamesData({ genre });

    return (
        <>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {games.length > 0 && (
                        category.map(game => (
                            <Col key={game.id}>
                                <Card className='bg-dark'>
                                    <Card.Img variant="top" src={game.thumbnail} alt={game.title} />
                                    <Card.Body>
                                        <Card.Title className='text-white'>Titulo: {game.title}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='bg-dark text-white'>Genero: {game.genre}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Link to={`/game/${game.id}`} className="btn btn-primary">Ver detalles</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}   
                </Row>
            </Container>   
        </>
    );
};

export default ItemListContainer;