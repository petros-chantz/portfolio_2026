export type ArrowDir = "left" | "right" | "up" | "down";

export type VisionCollageItem = {
  id: string;
  src: string;
  alt: string;
  /** Tailwind classes: absolute position, size, rotation */
  desktopClassName: string;
  /** Tailwind classes for the mobile grid cell */
  mobileClassName: string;
  zIndex?: number;
  /** object-fit for images with transparent backgrounds */
  objectFit?: "cover" | "contain";
  /** Soft drop-shadow for opaque photo images */
  hasShadow?: boolean;
  /** Absolute position of the annotation label within the collage container */
  labelClassName: string;
  /** Direction the annotation arrow points — toward the image */
  arrowDir: ArrowDir;
};

export const VISION_COLLAGE_ITEMS: readonly VisionCollageItem[] = [
  {
    id: "bus-stop",
    src: "/vision/ad_banner.png",
    alt: "Bus stop station context in the public environment",
    desktopClassName: "left-4 top-6 h-[180px] w-[250px] rotate-[-4deg]",
    mobileClassName: "col-span-3 row-span-2",
    zIndex: 3,
    hasShadow: true,
    labelClassName: "left-[272px] top-[62px] max-w-[130px]",
    arrowDir: "left",
  },
  {
    id: "train-laptop",
    src: "/vision/train_laptop.png",
    alt: "Laptop use in a train setting",
    desktopClassName:
      "left-[11%] top-[208px] h-[220px] w-[320px] rotate-[2deg]",
    mobileClassName: "col-span-4 row-span-3",
    zIndex: 4,
    hasShadow: true,
    labelClassName: "left-[90px] top-[150px] max-w-[130px]",
    arrowDir: "down",
  },
  {
    id: "train-app",
    src: "/vision/ns_app.png",
    alt: "Train app mobile screen",
    desktopClassName:
      "left-[34%] top-[114px] h-[250px] w-[130px] rotate-[-2deg]",
    mobileClassName: "col-span-2 row-span-3",
    zIndex: 5,
    hasShadow: true,
    labelClassName: "left-[210px] top-[196px] max-w-[130px]",
    arrowDir: "right",
  },
  {
    id: "payment-tap",
    src: "/vision/payment.png",
    alt: "Contactless payment touchpoint",
    desktopClassName: "left-[45%] top-[28px] h-[224px] w-[168px] rotate-[3deg]",
    mobileClassName: "col-span-3 row-span-3",
    zIndex: 4,
    hasShadow: true,
    labelClassName: "left-[486px] top-[278px] max-w-[130px]",
    arrowDir: "up",
  },
  {
    id: "notification-card",
    src: "/vision/notification.png",
    alt: "Service notification card",
    desktopClassName:
      "left-[53%] top-[188px] h-[58px] w-[196px] rotate-[-5deg]",
    mobileClassName: "col-span-3 row-span-1",
    zIndex: 7,
    objectFit: "contain",
    labelClassName: "left-[570px] top-[108px] max-w-[130px]",
    arrowDir: "down",
  },
  {
    id: "coffee",
    src: "/vision/coffee.png",
    alt: "Coffee cup in a real-world context",
    desktopClassName: "left-[46%] top-[306px] h-[92px] w-[92px] rotate-[4deg]",
    mobileClassName: "col-span-2 row-span-2",
    zIndex: 5,
    objectFit: "contain",
    labelClassName: "left-[340px] top-[332px] max-w-[130px]",
    arrowDir: "right",
  },
  {
    id: "spotify",
    src: "/vision/spotify.png",
    alt: "Spotify app mobile screen",
    desktopClassName:
      "left-[54%] top-[276px] h-[198px] w-[146px] rotate-[1deg]",
    mobileClassName: "col-span-2 row-span-3",
    zIndex: 4,
    hasShadow: true,
    labelClassName: "left-[764px] top-[336px] max-w-[130px]",
    arrowDir: "left",
  },
  {
    id: "walkman",
    src: "/vision/walkman.png",
    alt: "Portable music device fragment",
    desktopClassName:
      "left-[62%] top-[210px] h-[146px] w-[146px] rotate-[-3deg]",
    mobileClassName: "col-span-2 row-span-2",
    zIndex: 6,
    objectFit: "contain",
    labelClassName: "left-[650px] top-[130px] max-w-[130px]",
    arrowDir: "down",
  },
  {
    id: "chatbot",
    src: "/vision/whoop_chat.png",
    alt: "Chatbot interface as a digital anchor",
    desktopClassName: "right-4 top-[96px] h-[232px] w-[356px] rotate-[2deg]",
    mobileClassName: "col-span-6 row-span-2",
    zIndex: 3,
    hasShadow: true,
    labelClassName: "left-[598px] top-[188px] max-w-[130px]",
    arrowDir: "right",
  },
  {
    id: "ai-prompt-bar",
    src: "/vision/ai_chat.png",
    alt: "AI prompt bar fragment",
    desktopClassName:
      "right-[108px] top-[24px] h-[54px] w-[206px] rotate-[-2deg]",
    mobileClassName: "col-span-4 row-span-1",
    zIndex: 8,
    objectFit: "contain",
    labelClassName: "right-[54px] top-[92px] max-w-[130px]",
    arrowDir: "up",
  },
] as const;
