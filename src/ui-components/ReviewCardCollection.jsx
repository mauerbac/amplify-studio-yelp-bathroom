/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import ReviewCard from "./ReviewCard";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function ReviewCardCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ReviewCardCollection")}
    >
      {(item, index) => (
        <ReviewCard
          height="auto"
          width="auto"
          margin="0 0px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ReviewCard>
      )}
    </Collection>
  );
}
