import styles from './About.module.css'
import { useVisibility } from '../VisibilityContext/VisibilityContext'

export default function About() {
    const { isPortfolioUnlocked } = useVisibility();

    return (
        <div className={styles.aboutPage}>
            <h1>About Me</h1>
            <div className={styles.section}>
                <h2>Introduction</h2>
                <p>
                    Hi, {isPortfolioUnlocked ? "I'm Mahaer, " : "I am"} a <strong>self-taught 15 year old software developer</strong> based in New York, USA. 
                    My journey began at the age of 9 from building simple projects to understand the fundamentals of coding. 
                    Now, I have grown my skills to be able to develop real-world projects ranging from simple websites all the way to desktop applications. 
                    I have worked with several different programming languages and frameworks, solving specific problems that I encountered along the way from my projects. 
                    Furthermore, I am starting to explore the applications of my programming repertoire in business rather than only the technical aspects. 
                    This, along with my pursuit to be valedictorian in school, is only the beginning of what's to come.
                </p>
            </div>
            <div className={styles.section}>
                <h2>Why I Code</h2>
                <p>
                    As simple as this question seems, it holds a deep undertone that can only be answered with much introspection. 
                    In reality, the nature of this question assumes that I am capable of composing my ingrained behavior into lexicalized writing, which can be difficult to accomplish. 
                    However, I believe in the pursuit of passion, and as an individual captivated in the pursuit of understanding the world, I find that coding functions as the most direct medium to fuel that research and innate desire to learn. 
                    <strong> It is the primary medium through which I transform creative vision into reality</strong>, linking the separation between theoretical expertise and practical implementation.
                </p>
                <p>
                    Moreover, I enjoy the satisfaction of writing code that is complete and optimized. 
                    I enjoy the level of cohesion found in frameworks like React and Redux. 
                    I enjoy having my theoretical vision of a project come to life through code. 
                    <strong> I enjoy the process of debugging and optimizing code</strong>, as it allows me to further understand the intricacies and nuances of what governs our world today. 
                    I enjoy the fact that coding is a skill that can be applied to a wide range of fields, from web development to artificial intelligence, and that it has the potential to make a real impact on the world.
                    <strong> That I have the ability to make a real impact on the world</strong>.
                    This realization transformed me into someone who is capable of making an impact, since I know the same languages that foster some of the most influential applications of the 21st century. 
                    It is clear to me that <strong>the code I write today can positively affect so many individuals possibly generations in the future.</strong>
                </p>
                <p>
                    I guess that answers the question as to why I code: <strong>it is an innate representation of my ambition to elicit change in a meaningful way. </strong> 
                    Coding appeals to my sense of purpose, as it provides a way for me to combine my creative passion with my curiosity for logical analysis into a tangible outcome. 
                    At this point, <strong>programming is a fundamental part of me, influencing not just my chain of thought but also my vision for the future.</strong>
                </p>
            </div>
            <div className={styles.section}>
                <h2>Other Interests & Hobbies</h2>
                <p>
                    Even though I love to code, I also spend my free time exploring several other hobbies. 
                    In school, I enjoy playing <strong>chess</strong> because I like to learn new techniques and sequences that allow me to see tactical patterns and win the game, which also led me to become school champion. 
                    Additionally, I also like training my mind and fingers by <strong>solving Rubik's Cubes</strong> really fast. 
                    I can solve many of the different varieties, including the standard 3x3, the Megaminx, and the Square-1. 
                    I have traveled to competitions for speedcubing, and have met some pretty reputable celebrities in the cubing world despite not being at their level.
                </p>
                <p>
                    <strong>Content creation on YouTube</strong> has been a huge part of where I dedicate my creative energy. 
                    I was able to grow my largest YouTube channel to over 11,000 subscribers, and it served as another place where I could express my creativity and optimization skills outside of programming. 
                    This skill of content creation also encapsulates 2D design, 3D design, video editing, audio editing, streaming, and more, which are all miscellaneous skills that have been useful to me in many of my newer coding projects.
                </p>
                <p>
                    Athletically, I like to play net sports like tennis, badminton and volleyball with my friends sometimes. 
                    However, my <strong>primary physical discipline that I love to do is run. </strong> 
                    As a distance runner, I enjoy the mental reset and endorphins that the sport provides, along with its given health benefits. 
                    On the other hand, I like to play <strong>Minecraft</strong>, especially Survival Minecraft. I love the thrill of navigating dangerous environments, as well as the ability to express creative ideas by building cool projects in a digital sandbox.
                </p>
                <p>
                    As you may have observed already, there is a striking similarity rooted in my hobbies that illustrate the underlying drive behind what piques my interest. 
                    It stems from enjoying the process of improving at a certain skill, whether it's based on speed, complexity, or creativity. 
                    I enjoy <strong>pushing personal boundaries and using energy towards visible results</strong>, and I believe that this is the same way I approach programming as well.
                </p>
            </div>
            <div className={styles.section}>
                <h2>My Plans for the Future</h2>
                <p>
                    Looking ahead, I hope to <strong>enhance my coding repertoire further as time progresses</strong>, and utilize those skills into greater and larger projects. 
                    My trajectory has two main goals, each of which illustrate my commitment to having a real impact and practical use. 
                    My attitude towards programming is undergoing a recent shift from the technical application of programming concepts towards endeavors that <strong>integrate programming with business and science</strong>, setting the stage to facilitate an amount of impact that I could never dream of in the past.
                </p>
                <p>
                    Firstly, I set my sights on contributing towards <strong>pioneering work at NASA</strong> in fields such as space exploration, engineering, or rocket science. 
                    These fields all synthesize towards one main goal, which is to <strong>expand humanity's influence beyond Earth into the cosmos. </strong> 
                    The concept of outer space piqued my interest even before I became a programmer. 
                    The idea of a dangerous void consisting of floating rocks and plasma encapsulating everywhere I know and love seemed so mysterious to me, and seems like the most impactful duty that a person can uphold. 
                </p>
                <p>
                    Another huge goal of mine is to become an entrepreneur and <strong>develop a successful business using my programming skills</strong>. 
                    I am fascinated by the process of creating a tech startup, from the curation of the winning idea, to developing the app, to marketing the app in order to gain new customers. 
                    Eventually, I want to move beyond simple gimmicks and <strong>create something that people will actually use</strong> and help a certain aspect of their daily life.
                </p>
            </div>
        </div>
    )
} 