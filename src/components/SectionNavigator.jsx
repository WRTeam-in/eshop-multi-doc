import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import styles from './SectionNavigator.module.css';

export default function SectionNavigator() {
    const location = useLocation();
    const { activeDoc } = useActiveDocContext();

    if (!activeDoc) {
        return null;
    }

    const sidebar = activeDoc.sidebar;
    if (!sidebar || !Array.isArray(sidebar)) {
        return null;
    }

    // Flatten the sidebar items to handle nested structure
    const flattenedItems = sidebar.reduce((acc, item) => {
        if (item.type === 'category' && item.items) {
            return [...acc, ...item.items];
        }
        return [...acc, item];
    }, []);

    const currentIndex = flattenedItems.findIndex(
        (item) => item.href === location.pathname
    );

    const prevItem = currentIndex > 0 ? flattenedItems[currentIndex - 1] : null;
    const nextItem = currentIndex < flattenedItems.length - 1 ? flattenedItems[currentIndex + 1] : null;

    return (
        <nav className={styles.sectionNavigator} aria-label="Section navigation">
            <div className={styles.navButtonsRow}>
                {prevItem ? (
                    <a href={prevItem.href} className={`${styles.navButtonCard} ${styles.prevButton}`}>
                        <span className={styles.arrow}>&laquo; Previous</span>
                        <span className={styles.sectionName}>{prevItem.label}</span>
                    </a>
                ) : <div />}
                {nextItem ? (
                    <a href={nextItem.href} className={`${styles.navButtonCard} ${styles.nextButton}`}>
                        <span className={styles.sectionName}>{nextItem.label}</span>
                        <span className={styles.arrow}>Next &raquo;</span>
                    </a>
                ) : <div />}
            </div>
        </nav>
    );
} 