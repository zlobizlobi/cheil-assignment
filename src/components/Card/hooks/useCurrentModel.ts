import { ChipType, Model, Option } from "@/types";
import { useMemo } from "react";

export function useCurrentModel(
  colorOption: Option,
  memoryOption: Option,
  memoryType: ChipType,
  models: Model[]
) {
  return useMemo(() => {
    return models.find((model) => {
      const color = model.fmyChipList.find(
        (chip) => chip.fmyChipType === ChipType.COLOR
      );

      const memory = model.fmyChipList.find(
        (chip) => chip.fmyChipType === memoryType
      );

      return (
        color?.fmyChipCode === colorOption?.optionCode &&
        memory?.fmyChipCode === memoryOption?.optionCode
      );
    });
  }, [colorOption, memoryOption, models]);
}
