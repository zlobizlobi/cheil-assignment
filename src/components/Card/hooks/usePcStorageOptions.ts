import { ChipOption, ChipType } from "@/types";
import { useMemo } from "react";

export function usePcStorageOptions(chipOptions: ChipOption[]) {
  return useMemo(
    () =>
      chipOptions.find(
        (chipOption) => chipOption.fmyChipType === ChipType.PC_STORAGE
      )?.optionList,
    [chipOptions]
  );
}
