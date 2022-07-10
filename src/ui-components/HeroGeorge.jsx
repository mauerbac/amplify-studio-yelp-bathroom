/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroGeorge(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="779px"
      height="323px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroGeorge")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="675px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="279.75px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeroMessage")}
      >
        <Text
          fontFamily="Inter"
          fontSize="43px"
          fontWeight="700"
          color="rgba(254,1,22,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="George’s Yelp for Bathrooms"
          {...getOverrideProps(overrides, "George\u2019s Yelp for Bathrooms")}
        ></Text>
        <Flex
          gap="19px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="10px 0px 0px 0px"
          {...getOverrideProps(overrides, "Message")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(0,34,102,1)"
            lineHeight="30px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Anywhere in the city - we will tell you the best public toilet."
            {...getOverrideProps(
              overrides,
              "Anywhere in the city - we will tell you the best public toilet."
            )}
          ></Text>
          <Flex
            padding="0px 0px 0px 0px"
            width="675px"
            height="172.75px"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 28")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(0,34,102,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              width="675px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Jerry: Okay Fifty-fourth and Sixth?&#xA;George: Sperry Rand Building. 14th floor, Morgan Apparel. Mention my name - she'll give you the key."
              {...getOverrideProps(
                overrides,
                "Jerry: Okay Fifty-fourth and Sixth? George: Sperry Rand Building. 14th floor, Morgan Apparel. Mention my name - she'll give you the key."
              )}
            ></Text>
            <Button
              display="flex"
              gap="0"
              position="absolute"
              top="132.75px"
              left="262.5px"
              direction="row"
              justifyContent="center"
              alignItems="center"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Primary Button"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
