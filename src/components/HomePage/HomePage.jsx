import styles from './HomePage.module.css'
import {
  SiCss, SiElectron, SiGit, SiGithub, SiHtml5,
  SiJavascript, SiKeras, SiNodedotjs, SiOpenai,
  SiOnnx, SiPython, SiReact, SiRedux, SiJupyter,
  SiTensorflow, SiTypescript, SiVite, SiScratch
} from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import Projects from '../Projects/Projects'
import milestones from '../../data/milestones'
import stack from '../../data/stack'
import { useVisibility } from '../VisibilityContext/VisibilityContext'

export default function HomePage() {
  const { isPortfolioUnlocked } = useVisibility();

  const iconMap = {
    'HTML':       <SiHtml5 />,
    'CSS':        <SiCss />,
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'Python':     <SiPython />,
    'C++':        <TbBrandCpp />,
    'React':      <SiReact />,
    'Redux':      <SiRedux />,
    'Electron':   <SiElectron />,
    'TensorFlow': <SiTensorflow />,
    'Keras':      <SiKeras />,
    'Node.js':    <SiNodedotjs />,
    'Vite':       <SiVite />,
    'Git':        <SiGit />,
    'Jupyter':    <SiJupyter />,
    'ONNX':       <SiOnnx />,
    'Whisper AI': <SiOpenai />,
    'GitHub':     <SiGithub />,
    'Scratch':    <SiScratch />,
  }

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.kicker}>
          <span className={styles.kickerLine}></span>
          <span className={styles.kickerText}>Passionate · Creative · Determined</span>
        </div>
        <h1 className={styles.heroTitle}>
          15 Year Old&nbsp;
          <span className={styles.dim}>Self-Taught</span>&nbsp;
          <span className={styles.accent}>Developer</span>
        </h1>
        <p className={styles.heroBio}>
          Hi, I'm {isPortfolioUnlocked && "Mahaer, "} a high school sophomore and self-taught software developer based in New York, USA. 
          I started coding at the age of 9 and have been learning more ever since. 
          Check out some of my work below.
        </p>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.stack}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        {Object.entries(stack).map(([category, items], id) => (
          <div key={id} className={styles.group}>
            <p className={styles.groupLabel}>{category}</p>
            <div className={styles.grid}>
              {items.map((item, index) => (
                <div key={index} className={styles.card} style={{ '--icon-color': item.color }}>
                  <div className={styles.icon}>{iconMap[item.name]}</div>
                  <span className={styles.name}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className={styles.divider}></div>
      <section className={styles.section}>
        <div className={styles.secHead}>
          <span className={styles.sectionTitle}>My Journey</span>
        </div>
        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.left}>
                <span className={styles.age}>{m.age}<em>y/o</em></span>
                <span className={styles.year}>{m.year}</span>
              </div>
              <div className={styles.middle}>
                <div className={styles.dot} />
                {i < milestones.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.right}>
                <p className={styles.title}>{m.title}</p>
                <p className={styles.desc}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.divider}></div>
      <Projects />
    </div>
  )
}