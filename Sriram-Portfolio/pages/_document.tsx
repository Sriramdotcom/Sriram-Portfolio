import { Html, Head, Main, NextScript } from "next/document";

const metadata = {
  charset: "utf-8",
  title: "Sriram Pidugu – Portfolio",
  description:
    "Portfolio of Sriram Pidugu, frontend developer and AI enthusiast.",
  keywords:
    "Sriram Pidugu, Frontend Developer, AI Projects, React, Next.js, Telangana, India",
  author: "Sriram Pidugu",
  githubProfile: "https://github.com/Sriramdotcom",
  instagramProfile: "https://instagram.com/ram_online__", // Replace with your username
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet={metadata.charset} />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* GitHub & Instagram Links for identity (SEO & verification) */}
        <link rel="me" href={metadata.githubProfile} />
        <meta name="github" content={metadata.githubProfile} />

        <link rel="me" href={metadata.instagramProfile} />
        <meta name="instagram" content={metadata.instagramProfile} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
