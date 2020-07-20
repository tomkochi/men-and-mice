import PointsWithLink from '../../components/Points-with-link'
import FeatureImageOnLeft from '../../components/feature-image-on-left'
import FeatureImageOnRight from '../../components/feature-image-on-right'
import BottomPick from '../../components/Bottom-pick'
import Paragraph from '../index/black-on-white-para'

export default function Slice({ props }) {
  const { slice_type } = props

  switch (slice_type) {
    case 'text_and_links_yellow':
      return <PointsWithLink data={props} />
    case 'card_image_right':
      return <FeatureImageOnRight data={props} />
    case 'card_image_left':
      return <FeatureImageOnLeft data={props} />
    case 'text_and_links_white':
      return <PointsWithLink data={props} />
    case 'case_study_right':
      return <BottomPick data={props} />
  }
  return null
}
