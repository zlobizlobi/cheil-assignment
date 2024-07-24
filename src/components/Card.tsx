import { ChipType, Option, Product } from "@/types";
import { useMemo, useState } from "react";

interface CardProps {
  title: string;
  chipOptions: Product["chipOptions"];
  models: Product["modelList"];
}

export function Card({ chipOptions, title, models }: CardProps) {
  const colorOptions = useMemo(
    () =>
      chipOptions.find(
        (chipOption) => chipOption.fmyChipType === ChipType.COLOR
      )?.optionList,
    []
  );

  const memoryOptions = useMemo(
    () =>
      chipOptions.find(
        (chipOption) => chipOption.fmyChipType === ChipType.MOBILE_MEMORY
      )?.optionList,
    []
  );

  const [defaultColorOption] = colorOptions || [];
  const [defaultMemoryOption] = memoryOptions || [];

  const [colorOption, setColorOption] = useState<Option>(defaultColorOption);

  const [memoryOption, setMemoryOption] = useState<Option>(defaultMemoryOption);

  return (
    <div className="p-4 shadow-md rounded-md hover:scale-110 flex flex-col items-center transition-transform bg-white">
      <p className="text-sm inline">{title}</p>
    </div>
  );
}
