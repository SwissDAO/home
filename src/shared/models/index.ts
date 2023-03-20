export type Feature = {
  heading: string;
  body: string;
  reversed?: boolean;
  image?: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
};
