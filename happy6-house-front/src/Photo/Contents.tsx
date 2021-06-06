import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import CommentArea from "./CommentArea";
import { useQuery } from 'react-query';
import Content from './Content';
import { Comment } from './Comment';

interface Data {
  data: {
    id: string;
    imageSrc: string;
    title: string;
    author:string;
    createdDate: string;
    comments: Comment[];
  }[]
}

const Contents = () => {

  const { isLoading, error, data } = useQuery('posts', () => {
    return fetch('http://localhost:3001/posts').then(res => res.json() as Promise<Data>)
  });

  if (isLoading) return <div>'Loading...'</div>
  if (error) return <div>'An error has occurred: ' + error;</div>
  
  return (
    <>
      {data?.data.map( (value,index) => 
        <Content 
          id = {value.id}
          title={value.title}
          imageSrc={value.imageSrc}
          author={value.author}
          createdDate={value.createdDate}
          comments={value.comments}
          key={index}
        />
      )}
    </>
  )
}

export default Contents;