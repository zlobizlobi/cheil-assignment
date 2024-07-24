import { ChipType, Option, Product } from "@/types";
import Image from "next/image";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeftIcon } from "../ChevronLeftIcon";
import { ChevronRightIcon } from "../ChevronRightIcon";
import { CardColorOptions } from "./CardColorOptions";
import { CardMemoryOptions } from "./CardMemoryOptions";
import {
  useColorOptions,
  useHandleOnOptionChange,
  useImageGallery,
  useMemoryOptions,
} from "./hooks";
import { useCurrentModel } from "./hooks/useCurrentModel";

interface CardProps {
  title: string;
  chipOptions: Product["chipOptions"];
  models: Product["modelList"];
}

export function Card({ chipOptions, title, models }: CardProps) {
  const colorOptions = useColorOptions(chipOptions);
  const pcStorageOptions = useMemoryOptions(chipOptions, ChipType.PC_STORAGE);
  const mobileMemoryOptions = useMemoryOptions(
    chipOptions,
    ChipType.MOBILE_MEMORY
  );

  const [defaultColorOption] = colorOptions || [];
  const [defaultMobileMemoryOption] = mobileMemoryOptions || [];
  const [defaultPcStorageOption] = pcStorageOptions || [];

  const [colorOption, setColorOption] = useState<Option>(defaultColorOption);
  const [mobileMemoryOption, setMobileMemoryOption] = useState<Option>(
    defaultMobileMemoryOption
  );
  const [pcStorageOption, setPcStorageOption] = useState<Option>(
    defaultPcStorageOption
  );

  const handleOnColorChange = useHandleOnOptionChange(
    setColorOption,
    colorOptions
  );

  const handleOnMemoryChange = useHandleOnOptionChange(
    setMobileMemoryOption,
    mobileMemoryOptions
  );

  const handleOnPcStorageChange = useHandleOnOptionChange(
    setPcStorageOption,
    pcStorageOptions
  );

  const hasPcStorage = useMemo(
    () =>
      chipOptions.some((option) => option.fmyChipType === ChipType.PC_STORAGE),
    [chipOptions]
  );

  const isTV = useMemo(
    () => chipOptions.some((option) => option.fmyChipType === ChipType.TV_SIZE),
    [chipOptions]
  );

  const currentModel = useCurrentModel(
    colorOption,
    hasPcStorage ? pcStorageOption : mobileMemoryOption,
    hasPcStorage ? ChipType.PC_STORAGE : ChipType.MOBILE_MEMORY,
    models
  );

  const {
    imageIndex,
    handleOnNextImage,
    handleOnPreviousImage,
    onShowImageGalleryArrowsChange,
    showImageGalleryArrows,
  } = useImageGallery(currentModel);

  return (
    <div
      onMouseOver={() => onShowImageGalleryArrowsChange(true)}
      onMouseLeave={() => onShowImageGalleryArrowsChange(false)}
      className="border border-slate-200 py-8 px-5 shadow-md rounded-md flex flex-col items-center transition-transform bg-white relative"
    >
      <p className="text-lg mb-3 font-medium">{title}</p>
      <p className="text-xs mb-6 font-light">
        {currentModel?.modelName}/{currentModel?.modelCode}
      </p>
      <button
        className={twMerge(
          "shadow-md opacity-0 bg-slate-200 absolute -left-3 top-1/2 -translate-y-1/2  h-6 w-6 rounded-full flex justify-center items-center transition-opacity",
          showImageGalleryArrows && "opacity-100"
        )}
        onClick={handleOnPreviousImage}
      >
        <ChevronLeftIcon />
      </button>
      {currentModel?.galleryImage && (
        <Image
          width={400}
          height={400}
          alt={currentModel?.galleryImageAlt[imageIndex] || ""}
          src={`https:${currentModel?.galleryImage[imageIndex]}`}
        />
      )}
      <button
        className={twMerge(
          "shadow-md opacity-0 bg-slate-200 absolute -right-3 top-1/2 -translate-y-1/2  h-6 w-6 rounded-full flex justify-center items-center transition-opacity",
          showImageGalleryArrows && "opacity-100"
        )}
        onClick={handleOnNextImage}
      >
        <ChevronRightIcon />
      </button>
      {colorOption?.optionLocalName && (
        <p className="text-sm mb-4">
          Color:{" "}
          <span className="font-light">{colorOption?.optionLocalName}</span>
        </p>
      )}
      {isTV && (
        <p className="text-sm mb-4">
          Size:{" "}
          <span className="font-light">
            {chipOptions[0].optionList[0].optionName}
          </span>
        </p>
      )}
      {!!colorOptions?.length && (
        <CardColorOptions
          onCheckedChange={handleOnColorChange}
          currentOption={colorOption}
          options={colorOptions}
        />
      )}
      {!!mobileMemoryOptions?.length && (
        <div className="mt-4">
          <CardMemoryOptions
            onCheckedChange={handleOnMemoryChange}
            currentOption={mobileMemoryOption}
            options={mobileMemoryOptions}
          />
        </div>
      )}
      {!!pcStorageOptions?.length && (
        <div className="mt-4">
          <CardMemoryOptions
            onCheckedChange={handleOnPcStorageChange}
            currentOption={pcStorageOption}
            options={pcStorageOptions}
          />
        </div>
      )}
      <p className="mt-5 text-xl">{currentModel?.priceDisplay}</p>
    </div>
  );
}
