import React, { useEffect, useState } from 'react'
import axiosNewsInstance from '../../network/axiosConfig/axiosNews'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import articlesAction from '../../store/actions/articalsAcion';
import { Link } from 'react-router-dom';

export default function News() {
   const isLoad= useSelector((state)=>state.load.load)
   const articles= useSelector((state)=>state.articles.articles)
   const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(articlesAction())
    },[])
  return (<>{isLoad && <div className='d-flex justify-content-center'>
    <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
    </div>}
    <Row xs={1} md={2} className="g-4">
    {articles.map((article,index) => (
      <Col key={index}>
        <Card>
          <Card.Img variant="top" src={article.urlToImage} />
          <Card.Body>
            <Link to={`${article.title}`}> <Card.Title>{article.title}</Card.Title></Link>
            <Card.Text>
             {article.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</>
  )
}
