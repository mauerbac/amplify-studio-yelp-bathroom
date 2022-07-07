/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TestFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="112px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(6,47,99,1)"
      {...rest}
      {...getOverrideProps(overrides, "TestFooter")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        position="absolute"
        top="39.29%"
        bottom="39.29%"
        left="2.29%"
        right="68.61%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Built by Matt Auerbach for the AWS NYC Summit 2022"
        {...getOverrideProps(
          overrides,
          "Built by Matt Auerbach for the AWS NYC Summit 2022"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        letterSpacing="0.01px"
        position="absolute"
        top="39.29%"
        bottom="39.29%"
        left="90.21%"
        right="2.92%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="AWS Amplify"
        {...getOverrideProps(overrides, "AWS Amplify")}
      ></Text>
    </View>
  );
}
