import React, { useEffect, useRef, useState } from 'react';
import ArrowDown from 'assets/arrow-down.svg';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import { Transition } from 'components/Transition';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { AnimatePresence } from 'framer-motion';
import { useInterval, usePrevious, useScrollToHash } from 'hooks';
import RouterLink from 'next/link';
import { Fragment } from 'react';
import styles from './Intro.module.css';
import SpaceVisualization from './SpaceVisualization';
import Lottie from 'react-lottie';
import flyingAnimation from './flying.json'; 
import heroAnimation from './HeroAnimation.json';
export function Intro({ id, sectionRef, disciplines, scrollIndicatorHidden, ...rest }) {
  const theme = useTheme();
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
    ', and '
  );
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme.themeId
  );

  useEffect(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      setDisciplineIndex(0);
    }
  }, [theme.themeId, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  const designerTextRef = useRef(null);
  const [designerTextHeight, setDesignerTextHeight] = useState(0);

  useEffect(() => {
    if (designerTextRef.current) {
      setDesignerTextHeight(designerTextRef.current.offsetHeight);
    }
  }, []);

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme.themeId} timeout={3000}>
        {(visible, status) => (
          <Fragment>
            <SpaceVisualization />

            <div className={styles.content}>
              <header className={styles.text}>
                <Heading level={0} as="h2" className={styles.title}>
                <AnimatePresence>
                  <Lottie
                    options={{
                      animationData: flyingAnimation,
                      loop: true,
                      autoplay: true,
                    }}
                    height={200} // Set the height dynamically
                    width={200} // Set the width dynamically
                    className={styles.lottieContainer}
                  />
                 </AnimatePresence>

                      
                   <div>
                      <Lottie
                        options={{
                       animationData: heroAnimation,
                       loop: true,
                       autoplay: true,
                       }}
                              
                        className={styles.lottieContainer}
                       />
                    </div>
                  <div className={styles.lottieContainer}></div>
                </Heading>
              </header>
            </div>
            <RouterLink href="/#project-1">
              <a
                className={styles.scrollIndicator}
                data-status={status}
                data-hidden={scrollIndicatorHidden}
                onClick={handleScrollClick}
              >
                <VisuallyHidden>Scroll to projects</VisuallyHidden>
              </a>
            </RouterLink>
            <RouterLink href="/#project-1">
              <a
                className={styles.mobileScrollIndicator}
                data-status={status}
                data-hidden={scrollIndicatorHidden}
                onClick={handleScrollClick}
              >
                <VisuallyHidden>Scroll to projects</VisuallyHidden>
                <ArrowDown aria-hidden />
              </a>
            </RouterLink>
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}
