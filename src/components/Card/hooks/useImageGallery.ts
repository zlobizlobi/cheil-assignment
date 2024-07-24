import { Model } from "@/types";
import { useCallback, useState } from "react";

export function useImageGallery(model?: Model) {
  const [showImageGalleryArrows, setShowImageGalleryArrows] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  const handleOnNextImage = useCallback(() => {
    if (!model) {
      return;
    }

    if (imageIndex === model.galleryImage.length - 1) {
      setImageIndex(0);

      return;
    }

    setImageIndex(imageIndex + 1);
  }, [imageIndex, model]);

  const handleOnPreviousImage = useCallback(() => {
    if (!model) {
      return;
    }

    if (imageIndex === 0) {
      setImageIndex(model.galleryImage.length - 1);

      return;
    }

    setImageIndex(imageIndex - 1);
  }, [imageIndex, model]);

  return {
    handleOnPreviousImage,
    handleOnNextImage,
    showImageGalleryArrows,
    onShowImageGalleryArrowsChange: setShowImageGalleryArrows,
    imageIndex,
  };
}
