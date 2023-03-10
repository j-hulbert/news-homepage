import React from "react";
import styles from "../styles/NewArticles.module.css";

export default function NewArticles({ articles }) {
    const newsItems = articles.map((article, i, { length }) => (
        <>
            <h3 key={article.headline + "headline"} className={styles.headline}>
                {article.headline}
            </h3>
            <p key={article.headline} className={styles.description}>
                {article.description}
            </p>
            {i + 1 < length && <hr />}
        </>
    ));
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>New</h2>
            {newsItems}
        </div>
    );
}
