import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import NurseVectorImage from "images/nurses-at-work.jpg";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import AboutUsPage from "pages/AboutUs.js";

window.gtag("js", new Date());
window.gtag("config", "G-7E2C1RJP52");

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Job opportunities</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={NurseVectorImage}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            Integrity driven  <HighlightedText>Staffing Agency.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "Our professional team of Nurses are here to help you land your next nursing role. We cater to all types of businesses in need of help in filling their healthcare roles.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
    
      <Testimonial
        subheading={<Subheading>What? + Who?</Subheading>}
        heading={
          <>
            We connect companies <HighlightedText> with nurses </HighlightedText>
          </>
        }
        testimonials={[
          {

            heading: "Doctors offices!",
            quote:
              "Our expert level Registered Nurses, Nurse practitioners, licensed practical nuruses, Certified Nursing Assistants, Vocational Nurses and, labor/delivery Nurses are here to help your business succeed. ",
                  },
          {
          
            heading: "Hospitals!",
            quote:
              "We have Nurses with many different backgrounds ready to start work at your facilities.",
                    },
                    {

                      heading: "Home Healthcare!",
                      quote:
                        "Registered home health care nurses, Certified Nursing assistants, and liscenced vocational nurses ready to work. ",
                            },
{
                            heading: "Private companies!",
                            quote:
                              "We curate highly qualified nurses to work for your private company on a consistent basis, per diem basis, short term basis or whatever you need.",
                                  },
                                  {
                                  heading: "Schools!",
                                  quote:
                                    "Are you hiring for a local college, high school, middle school etc? No worries, we have registered qualified nurses for the public and private education sector as well.",
                                        },

        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "How do we hire nurses for our company?",
            answer:
              "It's very simple. Just fill out the form in our employer section, the link to this page is located at the top of this page. Once you get there just fill out the form and someone will get back to you ASAP."
          },
          {
            question: "Is there a minumum or maxiumum amount of days / hours we can staff nurses?",
            answer:
              "There is no minumum or maximum per day, week, month, year unless indicated by your state or local laws."
          },
          {
            question: "What kind of payment methods do you accept ?",
            answer:
              "We are currently accepting checks and debit, credit cards for the time being."
          },
          {
            question: "Does San Staffing drug test and perform background checks?",
            answer:
              "Yes, every applicant is drug tested, background checked, and fully vetted prior to their first day of work."
          },
          {
            question: "How do we protect user data",
            answer:
              "Form submissions are secured with industry standard SSL protection, and stored in a secure server with secure network protocol transfers to comply with industry standards, hippa and various applicable laws. Your user data is not shared with anyone with out your direct permission."
          },
          {
            question: "How do I hire San Staffing Nurses?",
            answer:
              "Click on the employer tab at the top of this web page. Fill out the form and someone will get back to you ASAP."
          }
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
