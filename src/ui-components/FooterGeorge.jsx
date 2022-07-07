/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MarketingFooter from "./MarketingFooter";
import { View } from "@aws-amplify/ui-react";
export default function FooterGeorge(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="106px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FooterGeorge")}
    >
      <MarketingFooter
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Footer")}
      ></MarketingFooter>
    </View>
  );
}
