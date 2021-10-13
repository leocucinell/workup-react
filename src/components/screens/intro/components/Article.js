import React from "react"

import "./Article.css"

const Article = ({image, text}) => {
    return(
        <article>
            <img alt="angry-ikea" src={image} />
            <p>{text}</p>
        </article>
    );
}

export default Article;