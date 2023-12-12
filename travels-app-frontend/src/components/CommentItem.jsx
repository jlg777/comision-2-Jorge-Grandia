import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CommentItem = ({post}) => {
    console.log(post);
  return (
    <div>
<ListGroup className="list-group-flush">
              {post.comments.map((comment) => (
                <ListGroup.Item key={comment._id}>
                  <strong>
                    {comment.autor && comment.autor.length > 0
                      ? comment.autor[0].username
                      : "Usuario Desconocido"}
                    :
                  </strong>{" "}
                  {comment.description}
                </ListGroup.Item>
              ))}
            </ListGroup>
    </div>
  )
}

export default CommentItem