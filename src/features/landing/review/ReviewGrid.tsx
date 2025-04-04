import { SectionLayout } from "../SectionLayout";
import { ReviewItem } from "./ReviewItem";

import type { ReviewItemProps } from "./ReviewItem";

export type ReviewGridProps = {
  reviews: ReviewItemProps[];
};

export const ReviewGrid = (props: ReviewGridProps) => {
  return (
    <SectionLayout className="m-auto max-w-5xl columns-1 gap-4 md:columns-2 xl:columns-3">
      {props.reviews.map((review) => (
        <ReviewItem {...review} className="mb-4 break-inside-avoid-column" key={review.image} />
      ))}
    </SectionLayout>
  );
};
