import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, ListGroup, ListGroupItem, Image, Card, Row, Col, Button, ProgressBar, InputGroup } from 'react-bootstrap';
import { CardText } from 'react-bootstrap/Card';

let productsImport = require('../resources/products.json');
let factoryImport = require('../resources/factory.json');
let messageImport = require('../resources/message.json');

export const Factory = () => {

    return (
        <Container fluid>

            <p className="text-white">Mekanisk Information and Status Page</p>

    
            <Row>
            {factoryImport.map(product=>

            
                <Col>
                <Card bg="dark" className="shadow-lg mt-4 p-4 text-white">
                <Card.Title>{product.name} </Card.Title>
                <Card.Text className="text-muted">{product.version}</Card.Text>
                
                  
                    <ProgressBar variant={getColor(product.stage)} animated={product.stage===0} now={getStageProgress(product.stage, 0)}/> 
                    <Card.Text className="text-center">Pre order</Card.Text>
                   
                    
                   
                    <ProgressBar variant={getColor(product.stage)} animated={product.stage===1} now={getStageProgress(product.stage, 1)}/>
                    <Card.Text className="text-center">Arranging manufacturing</Card.Text>
           

                
                    <ProgressBar variant={getColor(product.stage)}  animated={product.stage===2} now={getStageProgress(product.stage, 2)}/>
                    <Card.Text className="text-center">In production</Card.Text>
                  

                    
                    <ProgressBar variant={getColor(product.stage)}  animated={product.stage===3} now={getStageProgress(product.stage, 3)}/>
                    <Card.Text className="text-center">Quality control</Card.Text>
                    

                    
                    <ProgressBar variant={getColor(product.stage)} animated={product.stage===4} now={getStageProgress(product.stage, 4)}/>
                    <Card.Text className="text-center">Shipping to customers</Card.Text>
                    
                    
                

                <Row className="mt-4">
             
                </Row>
                <br/>
                <Card.Text>Estimated shipping: {product.estShippingDate}</Card.Text>
                <Card.Text className="text-muted">Extras and future sales will be announced in our Discord.</Card.Text>
                </Card>
                </Col>
                
            )}
            </Row>
        </Container>
    )

    function getStageProgress(stage, progressBarNumber){
        if(stage<progressBarNumber){
            return 0
        } else{
            return 100
        }
    }

    function getColor(stage){
        if(stage===5) return"success"
        return "primary"
    }

    
    

}


