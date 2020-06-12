import WorkSmarter from "../../components/index/work-smarter";
import FeatureImageOnLeft from "../../components/index/feature-image-on-left";
import FeatureImageOnRight from "../../components/index/feature-image-on-right";
import BeginIntegration from "../../components/index/begin-integration";
import BottomPick from "../../components/Bottom-pick";

import { caseStudy, integrationPoints } from "../../components/index/data";

export default function Slice({ props }) {
  const { slice_type } = props;
  switch (slice_type) {
    case "text_and_links_yellow":
      return <WorkSmarter data={props} />;
    case "card_image_right":
      return <FeatureImageOnRight data={props} />;
    case "card_image_left":
      return <FeatureImageOnLeft data={props} />;
    case "text_and_links_white":
      return (
        <BeginIntegration integrationPoints={integrationPoints} data={props} />
      );
    case "case_study_right":
      return <BottomPick data={props} />;
  }
  return null;
}
