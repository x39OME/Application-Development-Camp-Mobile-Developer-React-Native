import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import ArticleTitle from './singleArticleComponent/articleTitle';
import ArticleAuth from './singleArticleComponent/articleAuth';
import ArticleImage from './singleArticleComponent/articleImage';
import ArticleDescription from './singleArticleComponent/articleDescription';
import ArticleContent from './singleArticleComponent/articleContent';
import mainButtonLink from '../../component/sharedComponent/mainButtonLink';
import MainButtonLink from '../../component/sharedComponent/mainButtonLink';

export default function SingleArticle() {
    const params=useParams()
    const [article,setArticle]=useState({})
    const articles=useSelector((state)=>state.articles.articles)
    useEffect(()=>{
      setArticle(articles.find((article)=>article.title===params.title))
      console.log(articles.find((article)=>article.title===params.title))
    },[])
 if(article=={}){
    <Navigate to="/news"/>
 }
 else{
    return (
        <>
        <ArticleImage title={article.title} image={article.urlToImage}/>
        <ArticleTitle title={article.title} />
        <ArticleAuth auth={article.author} />
        {/* <ArticleDescription description={article.description}/> */}
        <ArticleContent content={article.content} />
     <div className='mt-5'><MainButtonLink name={"read more"} link={article.url} /></div>
        </>
    )
 }
  
}
