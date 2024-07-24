export interface Option {
  multiColorList: boolean | null;
  multiColorYN: string;
  optionCode: string;
  optionLocalName: string;
  optionName: string;
}

export enum ChipType {
  COLOR = "COLOR",
  MOBILE_MEMORY = "MOBILE MEMORY",
  PC_STORAGE = "PC STORAGE",
  TV_SIZE = "TV SIZE",
}

export interface ChipOption {
  fmyChipType: ChipType;
  optionList: Option[];
}

export interface FmyChip {
  fmyChipType: ChipType;
  fmyChipCode: string;
  fmyChipName: string;
  fmyChipLocalName: string;
  multiColorYN: string;
  multiColorList: boolean | null;
}

export interface Model {
  configuratorUrl: string;
  fmyChipList: FmyChip[];
  galleryImage: string[];
  galleryImageAlt: string[];
  galleryImageLarge: string[];
  modelCode: string;
  modelName: string;
  originPdpUrl: string;
  priceDisplay: string;
  usp: string[];
  ratings: string;
  reviewUrl: string;
  reviewCount: string;
}

export interface Product {
  familyId: string;
  chipOptions: ChipOption[];
  fmyMarketingName: string;
  modelList: Model[];
}
