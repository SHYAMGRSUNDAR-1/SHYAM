import gamestackTexture2Large from 'assets/Homepage-1.png';
import gamestackTexture2Placeholder from 'assets/Homepage-1.png';
import gamestackTexture2 from 'assets/Homepage-1.png';
import gamestackTextureLarge from 'assets/Homepage.png';
import gamestackTexturePlaceholder from 'assets/Homepage.png';
import gamestackTexture from 'assets/Homepage.png';
import gamestackTexture3Large from 'assets/take ride large.jpg';
import gamestackTexture3Placeholder from 'assets/take ride small.jpg';
import gamestackTexture3 from 'assets/take ride small.jpg';
import gamestackTexture4Large from 'assets/Available Ride large.jpg';
import gamestackTexture4Placeholder from 'assets/Available Ride small.jpg';
import gamestackTexture4 from 'assets/Available Ride small.jpg';
import gamestackTexture6Large from 'assets/Flink 2.png';
import gamestackTexture6Placeholder from 'assets/Flink 2.png';
import gamestackTexture6 from 'assets/Flink 2.png';
import gamestackTexture5Large from 'assets/Flink 1.png';
import gamestackTexture5Placeholder from 'assets/Flink 1.png';
import gamestackTexture5 from 'assets/Flink 1.png';
import gamestackTexture7Large from 'assets/CKSS.png';
import gamestackTextur7Placeholder from 'assets/CKSS.png';
import gamestackTexture7 from 'assets/CKSS.png';
import gamestackTexture8Large from 'assets/CKHS.png';
import gamestackTexture8Placeholder from 'assets/CKHS.png';
import gamestackTexture8 from 'assets/CKHS.png';
import gamestackTexture9Large from 'assets/Billbox1.png';
import gamestackTexture9Placeholder from 'assets/Billbox1.png';
import gamestackTexture9 from 'assets/Billbox1.png';
import gamestackTexture10Large from 'assets/Billbox.png';
import gamestackTexture10Placeholder from 'assets/Billbox.png';
import gamestackTexture10 from 'assets/Billbox.png';
import sliceTextureLarge from 'assets/spr-background.jpg';
import sliceTexturePlaceholder from 'assets/spr-background.jpg';
import sliceTexture from 'assets/spr-background.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta'; 
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Product Designer', 'Prototyper', 'Video Editor'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef(null);
  const details = useRef(null);
  // const projectOne = useRef(null);
  const projectTwo = useRef(null);
  const projectThree = useRef(null);
  const projectFour = useRef(null);
  const projectFive = useRef(null);
  const projectSix = useRef(null);
  
  useEffect(() => {
    const sections = [intro, details, projectTwo, projectThree, projectFour, projectFive, projectSix];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="UI/UX"
        description="Design portfolio of shyam sundar — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
     {/* <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Simpl Pay later"
        description=" [Company: Simpl] - The convenience of an online khata connected to 26,000+ merchants. Buy anything on the internet with 1 tap. Pay later. "
        buttonText="View Project"
        buttonLink="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiWmNyRFFwMDg0N05NSjBVd3B2cThRbXZvbDAxekhRcXhQTld5TGpmS1FVaHZTa0dBWis2ZXlSZ0VJaWlleGJlQnovRTB5b2JtdTJ2NFRGcWlucnlZa293b1dHUitTTmZ5MmI1cTc1bVpmcmhjWklaalJ4RzhhSUJHaTZQbGNIRHA3REpVRlVMQnlFSEZXcVBUUHQyS09mZ2RhR0FwWU5vYWsyTFNDOHR0S1lxNE1uWStNQUtpdFJ4SVlXa3N1ZktRZXkxVnR4NzYvT0dNbmlmaDduTi9iRnRRUkxrS212UndWTVFraFgvaGliWjJpcW1ZZ2w5d2pXN1JDNFowK2lqcmFYMDQwd2lGZjRhakl3QUV6R2J1YjZCVzJsVkY1aDQ2WDdncVVzT3dab1pyME9FV0pqZ0U5c0E3V01oMFVZOXhPWHl6emFubm01dz0iLCJoIjoiUGFzc3dvcmQgTWVudGlvbmVkIGluIG15IFJlc3VtZSIsInMiOiJNYmMvZjlDYlBMWldvUjVSM1N4ajlnPT0iLCJpIjoia05wS2tKWThKOSt6SkZNUSJ9"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture6, gamestackTexture6Large],
              placeholder: gamestackTexture6Placeholder,
            },
            {
              srcSet: [gamestackTexture5, gamestackTexture5Large],
              placeholder: gamestackTexture5Placeholder,
            },
          ],
        }}
      />  */}
         <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={1}
        title="CashKira App"
        description="[Company: WhyQ] - CashKira combines bookkeeping and secure payments to simplify finances for MSMEs in SEA, boosting cash flow and business growth."
        buttonText="View project"
        buttonLink="https://www.figma.com/proto/QYD3aBcxlPd2IIEuMuZenR/Cash-kira?page-id=6%3A10&node-id=344-137120&viewport=256%2C3171%2C0.16&t=4m3iW09x0ZghpQtU-8&scaling=scale-down-width&content-scaling=fixed&hotspot-hints=0&hide-ui=1"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture7, gamestackTexture7Large],
              placeholder: gamestackTextur7Placeholder,
            },
            {
              srcSet: [gamestackTexture8, gamestackTexture8Large],
              placeholder: gamestackTexture8Placeholder,
            },
          
          ],
        }}
      />
      <ProjectSummary
       id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={2}
        title="Stryde - A Ride Sharing App"
        description=" [Company: Stryde] - The carpooling app that connects commuters for convenient and eco-friendly ridesharing.]"
        buttonText="View project"
        buttonLink="https://www.figma.com/proto/M0qXl0s5wokzHeCiiwgoD7/Stryde?page-id=1%3A2824&type=design&node-id=179-6470&viewport=3569%2C1569%2C0.03&t=HoUldDJcsypdGive-8&scaling=scale-down-width&hotspot-hints=0&hide-ui=1"
         model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture4, gamestackTexture4Large],
              placeholder: gamestackTexture4Placeholder,
            },
            {
              srcSet: [gamestackTexture3, gamestackTexture3Large],
              placeholder: gamestackTexture3Placeholder,
            },
           
          ],
        }}
      />
     
            <ProjectSummary
       id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={3}
        title="A D2C Super App"
        description="[Company: Juspay] - Your all-in-one solution for seamless shopping, real-time order tracking, and personalized experiences with curated D2C brands."
        buttonText="View project"
        buttonLink="https://www.figma.com/proto/PDCB5XTOe37j02XaTZwqg9/D2C-APP?page-id=101%3A16129&type=design&node-id=105-25204&viewport=178%2C1106%2C0.05&t=OpNJnQ3YJMri7QZZ-8&scaling=scale-down-width&hotspot-hints=0&hide-ui=1"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={4}
        title="Desktop Checkout-Redefined"
        description="[Company: Juspay] - Designed to optimized user experience for desktop users while maintaining a seamless and consistent checkout process across multiple devices. "
        buttonText="View project"
        buttonLink="https://www.figma.com/proto/i1KvE1qacQPid0ffyqY9AH/Desktop-Checkout?page-id=0%3A1&type=design&node-id=101-69338&viewport=-3426%2C1980%2C0.1&t=GU0Qag2kraK1bxqP-8&scaling=scale-down-width&starting-point-node-id=101%3A439&hotspot-hints=0&hide-ui=1"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
       id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={5}
        title="Simpl BillBox"
        description=" [Company: Simpl] - A Strategy to boost shares of bill box feature in the Simpl app. "
        buttonText="Under NDA"
        buttonLink="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiRTNOUC81am41SU1PT1I5a1MvM3JPYnFGMmJwZDR3NlIrajlEazk2T3dncU1CKzJxRmFlVHFJV1g1K0Q3RmtVakxqcE8zai9GQXVtUHpSRVZmQ1ZrWnc5VjdGRkFWdGZzdHQ0cUJrVkowVkhxblJ5VlZDSUN6c3hVbE55TUdmWGZPOTFNTFBrREJoQzR5TlRGditobjhXNHpXZy9hV0pVbGQrRnBUU3JyL1dQSnBUWlQ0MW8zRjhSQ0dXQ25zbVhrUTQvT0NIQWQ3MURGb2xZUEhZa0MxL2RsWDJmSmlna2dXMk1FaHN5dTFhaCtzM1Y2R3NYaldKSzI1RHN0elZxdy9EcmNwMEpLM2wvaUk0a2ZkeDBFNUJpTEpEV3JNcEdVVXdkUFpLcytVUjBmWkFEV09taHJDVER5ZTJvSTZPN0Fxelhwd0xGcitlekRpaWhWSXNTQVlnTVdaNmZ3VVBRMWFsem0iLCJoIjoiUGFzc3dvcmQgTWVudGlvbmVkIGluIG15IFJlc3VtZSAoIGlmIG5vdCBwbGVhc2UgY2FsbCBtZSBAOTM0NDQxNDk0NCApIiwicyI6IlNFY3RRc2pxVkhRK3hFTWJNQjhISHc9PSIsImkiOiI4WFVuaHYxT1MvWG5weGdLIn0="
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture9, gamestackTexture9Large],
              placeholder: gamestackTexture9Placeholder,
            },
            {
              srcSet: [gamestackTexture10, gamestackTexture10Large],
              placeholder: gamestackTexture10Placeholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
