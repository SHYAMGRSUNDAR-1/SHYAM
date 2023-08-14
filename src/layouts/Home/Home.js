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
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={1}
        title="Stryde - A Ride Sharing App"
        description="The carpooling app that connects commuters for convenient and eco-friendly ridesharing"
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
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="CashKira App"
        description="CashKira combines bookkeeping and secure payments to simplify finances for MSMEs in SEA, boosting cash flow and business growth."
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
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={3}
        title="A D2C Super App"
        description="Your all-in-one solution for seamless shopping, real-time order tracking, and personalized experiences with curated D2C brands."
        buttonText="View project"
        buttonLink="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoib1N6ZzV2aTVReTdub29IZlZtd3JZUDgvQS9yUEZtdHUxMGRGeUkyVysxUC9GZ3NHL2M1SnhtSHVHaHd4RnkyYXZKYnpyakFRTXBxSmdkbVY4WVNCVy9CSENQTGdTWFVia0JvZldDbDJEMks0TVZsdDMvTzVIdjcvNXRFZ3Urcnc1NjR2cDc2WkJBMENnSFZxVDFYOU1oRis5ajlGQ05sajBqZkd3eUlGWWVDM1hoN1AxSWxobG1JbWUzS3gxdmVxYVBiUjQvZFZnV2Q5RXFVRnpqWnhkU3lRMkJiUDc4TDFWVEs3KytvTmxUTDFnemJqQ3JUdS9ML0ZMOTdhUEZuVVVxTitlYXM3ekFVZEhuS2U5Y2l2L1dPRUZFK1FPYkhtSkxkL3owcUJmRDdnOHJHc0ZRR2ZvVGlEVXozeTlBNlJ2d0IycEI2ZERZNkJ3ci9XYXZBK1pwdz0iLCJoIjoiQ29udGFjdCBtZSIsInMiOiJzZnQ3WG9FMHZQNXdkbGFzNlRwbEV3PT0iLCJpIjoiaG01dmNqVFJyb3pYcnB3aSJ9"
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
        index={4}
        title="Desktop Checkout-Redefined"
        description="Designed to optimized user experience for desktop users while maintaining a seamless and consistent checkout process across multiple devices."
        buttonText="View project"
        buttonLink="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiV2htTG01aUo5U3I0aFZZUHdOSGRVZHVJUUY1L3ZiMnltK2V6enROSmlha283SldVZmh3K0lLZDZ1N2xNM1dQYmZ0RFNRaFdqTEVTK1Z1bXFCSGkvb2pKTk5mSVlrbnNsUitiT3RPYTlwV2hSUVUyZ3QxQjh1QWM4Z1VUWkllV2gvODVlTFBEM3BOSVVteTNvekdSZ1NYSEp6Wmx6UzY3SnhLKzVZTEhodW5LUFE5RlBRN0hsbDkwT1kvSG8yMURkYnFramtDN29IcVcwWSt1MzNUQjZhMThFVXhtWlBPQ1BpZEtuWWwyZ3lNdkJGUzBWZTBRcDNIQzN6bjdUWmNmK0Y3MlZ3SU1FbkhFMWl0QlRqNHlLMTVDT1hDb1g0dVc3UFN2SVpkVTQvaHRQbW04YVpRMk9Ra2svTnpUM0NtOEliM2EvbGVMVU10akNnc2gxRm5TT28yYjIvaUE9IiwiaCI6IkNvbnRhY3QgbWUiLCJzIjoiNklCTithZWNybUtTWFdDR3JoUFFKZz09IiwiaSI6IkJzclpobzVxTElrcmpPSG4ifQ=="
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
        index={5}
        title="Flink- A payment App"
        description="Streamline payments with our intuitive app for easy payment form and link creation."
        buttonText="Under Progress"
        buttonLink="https://www.figma.com/proto/QYD3aBcxlPd2IIEuMuZenR/Payment-App?page-id=0%3A1&type=design&node-id=141-7893&viewport=-1380%2C-4689%2C0.47&t=WVhArR4R4vcEOo08-8&scaling=scale-down-width&hotspot-hints=0&hide-ui=1"
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
      <Footer />
    </div>
  );
};
