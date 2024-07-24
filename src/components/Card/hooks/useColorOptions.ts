import { ChipOption, ChipType } from "@/types";
import { useMemo } from "react";

export function useColorOptions(chipOptions: ChipOption[]) {
  return useMemo(
    () =>
      chipOptions.find(
        (chipOption) => chipOption.fmyChipType === ChipType.COLOR
      )?.optionList,
    [chipOptions]
  );
}
