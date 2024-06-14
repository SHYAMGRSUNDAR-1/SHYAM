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
  const projectThree = useRef(null);
  const projectTwo = useRef(null);
  const projectFive = useRef(null);
  const projectOne = useRef(null);
  const projectFour = useRef(null);
  
  useEffect(() => {
    const sections = [intro, details, projectOne, projectTwo,projectThree, projectFour, projectFive];

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
       <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectTwo.current)}
        index={1}
        title="Simpl Pay later"
        description=" [Company: Simpl] - A Strategy to boost shares of Simpl Checkout’s  biggest product differentiators Pay later and Pay in 3. "
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
      />
         <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectThree.current)}
        index={2}
        title="CashKira App"
        description="[Company: WhyQ (Freelanced) ] - CashKira combines bookkeeping and secure payments to simplify finances for MSMEs in SEA, boosting cash flow and business growth."
        buttonText="View project"
        buttonLink="https://www.figma.com/proto/R1sIoE1A3nhuXI2Z2xRQaj/CashKira?page-id=4%3A6331&type=design&node-id=202-58152&viewport=510%2C834%2C0.1&t=zwvDq1YOdwlWqW7G-8&scaling=scale-down-width&starting-point-node-id=202%3A58152&hotspot-hints=0&hide-ui=1"
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
        visible={visibleSections.includes(projectTwo.current)}
        index={3}
        title="Stryde - A Ride Sharing App"
        description="The carpooling app that connects commuters for convenient and eco-friendly ridesharing. [Company: Stryde(Freelanced)]"
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
       id="project-3"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={4}
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
        id="project-4"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={5}
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
       id="project-5"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={6}
        title="Simpl BillBox"
        description=" [Company: Simpl] - Case stusy under progress meanwhile enjoy the prototype. "
        buttonText="Under Progress"
        buttonLink="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiT05xQjFWWjdDeENDTXR6RU5sNTQ5bjRvSzNhUGZ6MG8vNEpkY1JzU0o3aWVKSnRwR2ZFRGpEWHVOdlhDbkovVDNkTnRVbFFRSVRuZkQ3elMvdUtKYWNnYTY2N0Iza0s1SzFPeElSdExsSXZmd1U1R1ZReVprbUI3UGtyQ2RkcUpmbVlBbjhzN1ZsTllPSTg5V3g2OTVhcFRwVWxuc2VTeTJpR05mckRiUjlIeUxhUEUzUDNoVGNBV2kzT0NIbUY3dC9SN0o2NW4xZVJyM1RydXRJdk1tcGVJYTZYWkhUSlA5SDhtWVcxNkFYSjRBZDZCcVhUYzYzRUVoZHBGMGRsTjFta0YyQ0JrNThhZnpnbmxUaHViQWpOL3V6Vk5aeEZkQ3FkUVZXaz0iLCJoIjoiUGFzc3dvcmQgTWVudGlvbmVkIGluIG15IFJlc3VtZSIsInMiOiJkOFlWQVp3bUs5RDd0N08vV1BlbFp3PT0iLCJpIjoibkVLbEdyVWZackVsV2kxMiJ9"
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
