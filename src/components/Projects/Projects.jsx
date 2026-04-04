import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'

export default function Projects() {
    const tagFilters = ['JavaScript', 'Python', 'C++', 'React', 'AI', 'Web App', 'Desktop App', 'Game']
    const [activeTag, setActiveTag] = useState(null)

    const filtered = projects.filter(p =>!activeTag || p.tags.some(t => t.label === activeTag))
    const toggleTag = tag => setActiveTag(prev => prev === tag ? null : tag)

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>My Projects</h2>
            <div className={styles.filters}>{tagFilters.map(t => (
                <button
                    key={t}
                    className={`${styles.fbtn} ${activeTag === t ? styles.active : ''}`}
                    onClick={() => toggleTag(t)}
                >{t}</button>
            ))}</div>
            <div className={styles.grid}>
                {filtered.length === 0 && <p className={styles.empty}>No projects match this filter.</p>}
                {filtered.map((p, idx) => (
                    <Link
                        to={`/projects/${p.id}`}
                        key={idx}
                        className={`${styles.card} ${p.featured ? styles.featured : ''}`}
                        style={{ '--project-color': p.color ?? '#818cf8' }}
                    >
                        <div className={styles.cardTop}>
                            <div className={styles.initialWrapper}>
                                <div className={styles.initial}>{p.name.slice(0, 2).toUpperCase()}</div>
                                <p className={styles.title}>{p.name}</p>
                            </div>
                            <span className={styles.year}>{p.year}</span>
                        </div>
                        <p className={styles.desc}>{p.description}</p>
                        <div className={styles.tags}>{p.tags.map(t => (
                            <span key={t.label} className={`${styles.tag} ${styles[t.type]}`}>{t.label}</span>
                        ))}</div>
                    </Link>
                ))}
            </div>
        </section>
    )
}