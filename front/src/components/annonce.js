import React, { useState, useEffect } from "react";

function Display() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/adopt_dont_shop/animals")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.titre} - {post.contenu}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Annonce() {
  return (
    <div class="ensemble">
      <div class="section">
        <div class="encart">
          <div class="animal-name"></div>
          <div class="photo"></div>
          <div class="description-name"></div>
        </div>
      </div>
    </div>
  );
}

export default Annonce;
