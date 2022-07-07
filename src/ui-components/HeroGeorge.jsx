/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroGeorge(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="500px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroGeorge")}
    >
      <Flex
        gap="10px"
        direction="column"
        height="500px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="720px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Text
            fontFamily="Inter"
            fontSize="37px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
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
            children="George’s Yelp for Toliets"
            {...getOverrideProps(overrides, "George\u2019s Yelp for Toliets")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
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
              children="Anywhere in the city - I'll tell you the best public toilet."
              {...getOverrideProps(
                overrides,
                "Anywhere in the city - I'll tell you the best public toilet."
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
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
              direction="row"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Primary Button"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        height="500px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="720px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Right")}
      >
        <Image
          height="500px"
          grow="1"
          basis="500px"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://mauerbac-web-images.s3.us-west-2.amazonaws.com/bathroom-logo-2.png"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
