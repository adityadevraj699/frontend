/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Hello, I am Aditya Kumar, a passionate B.Tech student specializing in Computer Science and Engineering from Meerut Institute of Technology. Throughout my academic journey, I have developed a strong interest in emerging technologies and their impact on various industries. My curiosity and love for learning have led me to dive deep into the world of software development, artificial intelligence, blockchain, cybersecurity, and other cutting-edge fields in technology.
        </p>
        <p>
        As I progress in my studies, I find it essential not only to learn but also to share my knowledge with others. This is what inspired me to create this blogging website. It serves as a platform for me to document my learning experiences, explore current trends, and provide valuable insights into the dynamic field of technology. Whether you are a student like me, a tech enthusiast, or a professional looking to stay updated, this blog will offer you fresh perspectives on the latest technological advancements.
        </p>
        <p>
        This website features a range of topics such as programming tutorials, software development tips, AI applications, blockchain technology, and much more. I aim to create content that simplifies complex concepts, making them accessible to beginners while also providing in-depth analysis for more advanced readers. The blog also delves into the importance of coding best practices, cybersecurity tips, and the future impact of technologies like machine learning and quantum computing.
        </p>
        <p>
        In addition to the technical aspects, this website also emphasizes the broader implications of technology on society, business, and education. I believe that understanding technology’s role in shaping the world is crucial for every individual in this digital age. Through this platform, I hope to inspire others to explore technology’s potential and equip them with the tools and knowledge they need to succeed in the fast-evolving world of computer science and engineering.
        </p>
        <p>
        Thank you for visiting, and I hope you find my blogs informative and engaging!
        For more about me, visit my website here: adityadevraj699.online
        </p>
      </div>
    </article>
  );
};

export default About;
