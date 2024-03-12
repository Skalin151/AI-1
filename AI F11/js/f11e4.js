//Array de notícias

import React from "react";

const news = [
  {
    title: "Título da notícia 1",
    lead: "Lead da notícia 1",
    body: "Corpo da notícia 1",
  },
  {
    title: "Título da notícia 2",
    lead: "Lead da notícia 2",
    body: "Corpo da notícia 2",
  },
  {
    title: "Título da notícia 3",
    lead: "Lead da notícia 3",
    body: "Corpo da notícia 3",
  },
];

const App = () => {
  return (
    <div>
      {news.map((n) => (
        <article key={n.title}>
          <h1>{n.title}</h1>
          <p>{n.lead}</p>
          <p>{n.body}</p>
        </article>
      ))}
    </div>
  );
};

export default App;