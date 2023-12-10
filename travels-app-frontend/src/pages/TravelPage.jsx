import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TravelPage = () => {
  const { postlistId } = useParams();
  console.log(postlistId);

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/travel/${postlistId}`, {
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>{post.title}</div>;
};

export default TravelPage;
