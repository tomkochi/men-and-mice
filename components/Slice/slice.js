import { useState } from "react";
import WorkSmarter from "../../components/index/work-smarter";
import FeatureImageOnLeft from "../../components/index/feature-image-on-right";
import FeatureImageOnRight from "../../components/index/feature-image-on-right";
import {
  workSmarterPoints,
  integrationPoints,
} from "../../components/index/data";

export default function Slice({ props }) {
  const { slice_type } = props;
  switch (slice_type) {
    case "text_and_links_yellow":
      return <WorkSmarter workSmarterPoints={workSmarterPoints} />;
    case "card_image_right":
      return <FeatureImageOnLeft />;
  }
  return null;
}
