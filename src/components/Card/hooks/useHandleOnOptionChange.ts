import { Option } from "@/types";
import { useCallback } from "react";

export function useHandleOnOptionChange(
  onOptionChange: (option: Option) => void,
  options?: Option[]
) {
  return useCallback(
    (value: string) => {
      const option = options?.find((option) => option.optionName === value);

      if (!option) {
        return;
      }

      onOptionChange(option);
    },
    [onOptionChange, options]
  );
}
