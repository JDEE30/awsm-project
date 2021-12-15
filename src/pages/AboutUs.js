import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import caduceus from "images/caduceus-2.svg";
window.gtag("js", new Date());
window.gtag("config", "G-7E2C1RJP52");

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About San Staffing</Subheading>}
        heading="We are a modern medical staffing agency"
        buttonRounded={false}
        imageSrc="https://ik.imagekit.io/jpzl8rqva8m/caduceus-2_zDrvyBGheC.png"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the nurse and medical staffing space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://ik.imagekit.io/jpzl8rqva8m/vecteezy_doctors-and-nurses-working-and-fighting-the-coronavirus__oAVCZF95sqT.jpg"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Integrity - Honesty - Fairness"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "We have nurses for all shifts."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Our experienced registerred nurses are here to offer their experience to your business"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "We offer great services, so we only recieve great reviews."
          },
        ]}
        linkText=""
      />
   
      <Footer />
    </AnimationRevealPage>
  );
};
