import { useParams, Link } from "react-router-dom"
import { useVisibility } from "../VisibilityContext/VisibilityContext"
import projects from "../../data/projects.json"
import styles from "./ProjectPage.module.css"
import TodoWithAuth from "../../assets/demos/public/TodoWithAuth.mp4"
import TodoWithAuthHidden from "../../assets/demos/hidden/TodoWithAuth.mp4"
import Glyph1Public from "../../assets/demos/public/Glyph_1.mp4"
import Glyph2Public from "../../assets/demos/public/Glyph_2.mp4"
import Glyph1Hidden from "../../assets/demos/hidden/Glyph_1.mp4"
import Glyph2Hidden from "../../assets/demos/hidden/Glyph_2.mp4"
import AiCaptionatorPublic from "../../assets/demos/public/AICaptionator.mp4"
import AiCaptionatorHidden from "../../assets/demos/hidden/AICaptionator.mp4"
import BrowserClonePublic from "../../assets/demos/public/BrowserClone.mp4"
import BrowserCloneHidden from "../../assets/demos/hidden/BrowserClone.mp4"
import Jammming from "../../assets/demos/public/Jammming.jpg"

export default function ProjectPage() {
    const { id } = useParams()
    const { isPortfolioUnlocked } = useVisibility()

    const project = projects.find(p => p.id === id)

    const videoMap = { 
        TodoWithAuth: isPortfolioUnlocked ? TodoWithAuthHidden : TodoWithAuth,
        Glyph1: isPortfolioUnlocked ? Glyph1Hidden : Glyph1Public,
        Glyph2: isPortfolioUnlocked ? Glyph2Hidden : Glyph2Public,
        AiCaptionator: isPortfolioUnlocked ? AiCaptionatorHidden : AiCaptionatorPublic,
        BrowserClone: isPortfolioUnlocked ? BrowserCloneHidden : BrowserClonePublic,    
    }
    const pictureMap = { Jammming }

    if (!project) {
        return (
            <div className="notFound">
                <div className="notFoundCode">404</div>
                <p className="notFoundTitle">Project not found</p>
                <p className="notFoundDesc">This project doesn't exist or may have been removed.</p>
                <Link to="/" className="back">← Go Back home</Link>
            </div>
        )
    }

    return (
        <div className={styles.page} style={{ '--project-color': project.color ?? '#818cf8' }}>
            <Link to="/" className="back">← Back</Link>
            <div className={styles.header}>
                <div className={styles.initial}>{project.name.slice(0, 2).toUpperCase()}</div>
                <div className={styles.headerText}>
                    <h1 className={styles.name}>{project.name}</h1>
                    <div className={styles.headerMeta}>
                        <span className={styles.year}>{project.year}</span>
                        {(project.github && isPortfolioUnlocked) && (
                            <a href={project.github} target="_blank" rel="noreferrer" className={styles.githubLink}>GitHub →</a>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.tags}>{project.tags.map(t => (
                <span key={t.label} className={`${styles.tag} ${styles[t.type]}`}>{t.label}</span>
            ))}</div>
            {project.longDesc && (
                <div className={styles.section}>
                    <h2 className={styles.secTitle}>About</h2>
                    <p className={styles.longDesc}>{project.longDesc}</p>
                </div>
            )}
            {project.recordings?.length > 0 && (
                <div className={styles.section}>
                    <h2 className={styles.secTitle}>Demo</h2>
                    <div className={styles.recordings}>{project.recordings.map((r, i) => (
                        <div key={i} className={styles.recordingCard}>
                            <video
                                className={styles.video}
                                src={videoMap[r.videoKey] || r.videoKey}
                                controls
                                playsInline
                            />
                            <p className={styles.recordingCaption}>{r.caption}</p>
                        </div>
                    ))}</div>
                </div>
            )}
            {project.pictures?.length > 0 && (
                <div className={styles.section}>
                    <h2 className={styles.secTitle}>Picture</h2>
                    <div className={styles.recordings}>{project.pictures.map((p, i) => (
                        <div key={i} className={styles.recordingCard}>
                            <img src={pictureMap[p.pictureKey] || p.pictureKey} alt={`Screenshot ${i + 1}`} className={styles.picture} />
                            <p className={styles.recordingCaption}>{p.caption}</p>
                        </div>
                    ))}</div>
                </div>
            )}
            {project.scratchId && (
                <div className={styles.section}>
                    <h2 className={styles.secTitle}>Play it</h2>
                    <div className={styles.scratchWrapper}>
                        <iframe
                            src={`https://scratch.mit.edu/projects/${project.scratchId}/embed`}
                            width="485"
                            height="402"
                            allowTransparency={true}
                            allowFullScreen
                            className={styles.scratch}
                            style={{transform: 'scale(1.6)'}}
                        />
                    </div>
                </div>
            )}
            {project.techBreakdown?.length > 0 && (
                <div className={styles.section}>
                    <h2 className={styles.secTitle}>Tech Breakdown</h2>
                    <div className={styles.breakdown}>{project.techBreakdown.map(t => (
                        <div key={t.tech} className={styles.breakdownCard}>
                            <p className={styles.breakdownTech}>{t.tech}</p>
                            <p className={styles.breakdownReason}>{t.reason}</p>
                        </div>
                    ))}</div>
                </div>
            )}
        </div>
    )
}