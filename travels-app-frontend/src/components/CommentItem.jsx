import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CommentItem = ({ post }) => {
  const [usernames, setUsernames] = useState({});

  const handleDelete = async (commentID) => {
    return await fetch(`http://localhost:3000/travel/${commentID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
            <div key={comment._id}>
              <ListGroup.Item>
                {usernames[comment.autor] && (
                  <span>Usuario: {usernames[comment.autor]}</span>
                )}
                <strong> Comentario:</strong> {comment.description}
              </ListGroup.Item>
              <button onClick={() =>
                    handleDelete(comment._id).then((res) => {
                      if (res.status != 200) alert("No se elimina");
                      else alert("Se elimina");
                      navigate("/");
                    })
                  }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
                
              </button>
            </div>
          ))
        ) : (
          <ListGroup.Item>No hay comentarios disponibles.</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};
export default CommentItem;
