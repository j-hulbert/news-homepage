import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NewArticles from "../components/NewArticles";
import MainArticle from "../components/MainArticle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const articles = [
        {
            headline: "Hydrogen VS Electric Cars",
            description: "Will hydrogen-fueled cars ever catch up to EVs?",
        },
        {
            headline: "The Downsides of AI Artistry",
            description:
                "What are the possible adverse effects of on-demand AI image generation?",
        },
        {
            headline: "Is VC Funding Drying Up?",
            description:
                "Private funding by VC firms is down 50% YOY. We take a look atwhat that means.",
        },
    ];
    return (
        <>
            <div className={styles.top_section}>
                <MainArticle />
                <NewArticles articles={articles} />
            </div>
        </>
    );
}
