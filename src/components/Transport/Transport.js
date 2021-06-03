import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Transport.css';

const Transport = (props) => {
    const { picture, name, id } = props.transport;

    const history = useHistory();
    const handleClick = (id) => {
        const url = `/transport/${id}`;
        history.push(url);
    }

    return (
        <div style={{ float: 'left', justifyContent: 'space-between' }}>
            <Card onClick={() => handleClick(id)} className="card">
                <Card.Img variant="top" src={picture} style={{ width: '200px', height: '200px' }} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Transport;


