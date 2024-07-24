import { ChipOption, ChipType } from "@/types";
import { useMemo } from "react";

export function useMemoryOptions(
  chipOptions: ChipOption[],
  memoryOption?: ChipType.MOBILE_MEMORY | ChipType.PC_STORAGE
) {
  return useMemo(
    () =>
      chipOptions.find((chipOption) => chipOption.fmyChipType === memoryOption)
        ?.optionList,
    [chipOptions]
  );
}
