import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TravelPage = () => {
  const { travelID } = useParams();
  console.log(travelID);

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/post/${travelID}`, {
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>{post.title}</div>;
};

export default TravelPage;
