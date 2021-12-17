import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import NurseJobForm from "components/forms/NurseJobForm";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;
window.gtag("js", new Date());
window.gtag("config", "G-7E2C1RJP52");

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <NurseJobForm />
     
      <Footer />
    </AnimationRevealPage>
  );
};
