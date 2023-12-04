import React, { useState } from "react";

const posts = [
  {
    posts: [],
    _id: "6564f516aaff161e3ec18cd7",
    avatar:
      "https://media.cnnchile.com/sites/4/2022/05/220414231728-01-giant-panda-call-to-earth-super-169-800x400.jpg",
    email: "test3@test.com",
    username: "tester2",
    password: "$2b$10$00p8SQZQq.H22lNOHgjb7.vc0DxsG3Js37/rgajpNCajtruI1..4C",
    playlists: [],
    createdAt: "2023-11-27T19:59:18.403Z",
    updatedAt: "2023-11-27T19:59:18.403Z",
  },
  {
    posts: [],
    _id: "6566043fdd805a9329bf5589",
    avatar:
      "https://media.cnnchile.com/sites/4/2022/05/220414231728-01-giant-panda-call-to-earth-super-169-800x400.jpg",
    email: "test4@test.com",
    username: "tester4",
    password: "$2b$10$umc/0aLPNiuEXdWdK7dlO.FeilynpUAuyCKtHNuyJ5HeQeKAjF2OO",
    playlists: [],
    createdAt: "2023-11-28T15:16:15.077Z",
    updatedAt: "2023-11-28T15:16:15.077Z",
  },
  {
    posts: [],
    _id: "65661adc00087439f109baaf",
    avatar:
      "https://media.cnnchile.com/sites/4/2022/05/220414231728-01-giant-panda-call-to-earth-super-169-800x400.jpg",
    email: "jorge@test.com",
    username: "jorge",
    password: "$2b$10$YvXLhDRp7ihKSgfxg8htY.g7FKf7XKw/wf1s2LWxMQkvs6zNkdmSy",
    playlists: [],
    createdAt: "2023-11-28T16:52:44.646Z",
    updatedAt: "2023-11-28T16:52:44.646Z",
  },
];

const Post = () => {
  const [post, setpost] = useState(posts);
  return (
    <div>
      {post.map((post) => {
        return (
          <div key={post._id}>
            <p>{post.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
