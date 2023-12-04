import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostItem from "../components/PostItem";

const PostPage = () => {
  const [posts, setPosts] = useState([null]);

  useEffect(() => {
    fetch(`http://localhost:3000/post`, {
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  console.log("Posts:", posts);

  return (
    <>
      <div>PostPage</div>
      <Form className="container-fluid d-flex  flex-column justify-content-center align-items-center">
        <Row>
          <Col xs="auto">
            <Button variant="outline-success" href="NewPostPage">
              Create
            </Button>{" "}
          </Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="outline-primary">
              Primary
            </Button>{" "}
          </Col>
        </Row>
      </Form>
        <PostItem
        posts={posts}
        
          /*           title="post.title" 
          description="post.description"
          username="{posts.username}"
          comments="post.comments"
          image="{post.image}"
          createdAt="{post.createdAt}" */
        

        />
    </>
  );
};

export default PostPage;
