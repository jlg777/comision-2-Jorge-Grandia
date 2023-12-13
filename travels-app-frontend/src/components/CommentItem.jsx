import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CommentItem = ({ post }) => {
  const [usernames, setUsernames] = useState({});

  useEffect(() => {
    const fetchUsernames = async () => {
      if (post && post.comments && post.comments.length > 0) {
        const userIds = post.comments.map((comment) => comment.autor);
        try {
          const responses = await Promise.all(
            userIds.map((userId) =>
              fetch(`http://localhost:3000/api/auth/login/${userId}`, {
                headers: {},
              }).then((res) => res.json())
            )
          );

          const usernamesData = responses.reduce((acc, data, index) => {
            const userId = userIds[index];
            if (data && data.username) {
              acc[userId] = data.username;
            }
            return acc;
          }, {});

          setUsernames(usernamesData);
        } catch (error) {
          console.error("Error al obtener los nombres de usuario:", error);
        }
      }
    };

    fetchUsernames();
  }, [post]);

  return (
    <div>
      <ListGroup className="list-group-flush">
        {post.comments && Array.isArray(post.comments) ? (
          post.comments.map((comment) => (
            <ListGroup.Item key={comment._id}>
              {usernames[comment.autor] && (
                <span>Usuario: {usernames[comment.autor]}</span>
              )}
              <strong> Comentario:</strong> {comment.description}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No hay comentarios disponibles.</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default CommentItem;
