import React from "react";
import styles from "../styles/MainArticle.module.css";
import Image from "next/image";
import main_article from "../public/main_article.jpg";

export default function MainArticle() {
    return (
        <section className={styles.container}>
            <Image
                alt="Vercel logo"
                src={main_article}
                className={styles.img}
            />
            <h1 className={styles.headline}>The Bright Future of Web 3.0?</h1>
            <div className={styles.subheadline}>
                <p>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                </p>
                <button className={styles.button_readmore}>Read more</button>
            </div>
        </section>
    );
}
