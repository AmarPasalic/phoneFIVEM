// src/button/index.tsx
import { cva } from "class-variance-authority";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/button/index.tsx
import { jsx } from "react/jsx-runtime";
var classes = cva(
  "rounded text-white dark:text-white inline-flex items-center justify-center whitespace-nowrap font-medium transition",
  {
    variants: {
      variant: {
        primary: ["bg-blue-500"],
        ghost: ["bg-transparent hover:bg-neutral-200 hover:dark:bg-neutral-800"]
      },
      size: {
        sm: "px-2 py-1.5 text-sm",
        md: "h-10 px-4 py-2 text-base",
        lg: "px-4 py-2",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "primary"
    }
  }
);
var NPWDButton = ({
  children,
  size,
  variant,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx("button", { ...props, className: cn(classes({ size, variant, className })), children });
};

// src/input/index.tsx
import { cva as cva2, cx } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var classes2 = cva2("rounded-md outline-none w-full", {
  variants: {
    size: {
      md: "text-base py-2 px-2"
    },
    variant: {
      primary: "bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});
var Input = ({ className, ...props }) => {
  className = cx(classes2(props), className);
  return /* @__PURE__ */ jsx2("input", { ...props, className });
};

// src/list/index.tsx
import { Check } from "lucide-react";
import { Fragment, jsx as jsx3, jsxs } from "react/jsx-runtime";
var List = ({ children }) => {
  return /* @__PURE__ */ jsx3("ul", { className: "my-4 divide-y divide-neutral-200 overflow-hidden rounded-xl dark:divide-neutral-700 dark:ring-1 dark:ring-gray-900/5 bg-white dark:bg-neutral-900", children });
};
var ListItem = ({
  primaryText,
  secondaryText,
  startElement,
  endElement,
  button = false,
  selected = false,
  onClick,
  children
}) => {
  return /* @__PURE__ */ jsx3("li", { className: "dark:bg-neutral-900", onClick: button ? onClick : void 0, children: /* @__PURE__ */ jsx3(
    "div",
    {
      className: cn(
        "relative flex items-center space-x-3 px-2 py-5",
        "hover:bg-neutral-200/50 dark:bg-neutral-800 hover:dark:bg-neutral-800/50",
        selected && "bg-neutral-200 dark:bg-neutral-700",
        button && "cursor-pointer"
      ),
      children: children ? /* @__PURE__ */ jsx3(Fragment, { children }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        startElement && /* @__PURE__ */ jsx3("div", { className: "flex-none dark:text-white text-neutral-900", children: startElement }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 grow", children: [
          primaryText && /* @__PURE__ */ jsx3("p", { className: "text-sm font-medium text-neutral-900 dark:text-white", children: primaryText }),
          secondaryText && /* @__PURE__ */ jsx3("p", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: secondaryText })
        ] }),
        selected && /* @__PURE__ */ jsx3("div", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-900 dark:text-neutral-50 flex-none", children: /* @__PURE__ */ jsx3(Check, {}) }),
        endElement && /* @__PURE__ */ jsx3("div", { className: "flex-none dark:text-white text-neutral-900", children: endElement })
      ] })
    }
  ) });
};

// src/switch/index.tsx
import * as Switch from "@radix-ui/react-switch";
import { jsx as jsx4 } from "react/jsx-runtime";
var SwitchRoot = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx4(
    Switch.Root,
    {
      className: "relative h-[25px] w-[42px] cursor-default rounded-full outline-none bg-neutral-400 dark:bg-neutral-700 data-[state=checked]:bg-neutral-900 data-[state=checked]:dark:bg-white",
      id: "airplane-mode",
      ...props,
      children
    }
  );
};
var SwitchThumb = ({ ...props }) => {
  return /* @__PURE__ */ jsx4(
    Switch.Thumb,
    {
      className: "block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-black transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:dark:bg-neutral-900",
      ...props
    }
  );
};

// src/slider/index.tsx
import * as Slider from "@radix-ui/react-slider";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var SliderRoot = ({ ...props }) => {
  return /* @__PURE__ */ jsxs2(
    Slider.Root,
    {
      className: "relative flex h-5 w-[120px] touch-none select-none items-center",
      defaultValue: [50],
      max: 100,
      step: 1,
      ...props,
      children: [
        /* @__PURE__ */ jsx5(Slider.Track, { className: "relative h-[3px] grow rounded-full bg-neutral-400 dark:bg-neutral-700", children: /* @__PURE__ */ jsx5(Slider.Range, { className: "absolute h-full rounded-full bg-neutral-900 dark:bg-neutral-50" }) }),
        /* @__PURE__ */ jsx5(
          Slider.Thumb,
          {
            className: "block h-5 w-5 rounded-[10px] bg-neutral-900 dark:bg-white focus:outline-none",
            "aria-label": "Volume"
          }
        )
      ]
    }
  );
};
export {
  Input,
  List,
  ListItem,
  NPWDButton,
  SliderRoot,
  SwitchRoot,
  SwitchThumb,
  classes2 as classes,
  cn
};
