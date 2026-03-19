export type PinnedPhoto = {
  src: string;
  alt?: string;
  className: string;
  priority?: boolean;
  bg?: string;
};

export const PINNED_PHOTOS: readonly PinnedPhoto[] = [
  {
    src: "/approach/01.webp",
    alt: "",
    className: "left-[-18px] top-[78px] h-[140px] w-[200px] rotate-[-6deg]",
  },
  {
    src: "/approach/02.webp",
    alt: "",
    className: "left-[140px] top-[5px] h-[170px] w-[250px] rotate-[4deg]",
    priority: true,
  },
  {
    src: "/approach/03.webp",
    alt: "",
    className: "right-[240px] top-[28px] h-[160px] w-[240px] rotate-[-2deg]",
    priority: true,
  },
  {
    src: "/approach/04.webp",
    alt: "",
    className: "right-[76px] z-10 top-[94px] h-[140px] w-[210px] rotate-[7deg]",
  },
  {
    src: "/approach/05.webp",
    alt: "",
    className: "right-[-12px] top-[18px] h-[130px] w-[190px] rotate-[-9deg]",
  },
] as const;
