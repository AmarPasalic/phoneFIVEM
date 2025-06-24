"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Input: () => Input,
  List: () => List,
  ListItem: () => ListItem,
  NPWDButton: () => NPWDButton,
  SliderRoot: () => SliderRoot,
  SwitchRoot: () => SwitchRoot,
  SwitchThumb: () => SwitchThumb,
  classes: () => classes2,
  cn: () => cn
});
module.exports = __toCommonJS(src_exports);

// src/button/index.tsx
var import_class_variance_authority = require("class-variance-authority");

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var classes = (0, import_class_variance_authority.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { ...props, className: cn(classes({ size, variant, className })), children });
};

// src/input/index.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var classes2 = (0, import_class_variance_authority2.cva)("rounded-md outline-none w-full", {
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
  className = (0, import_class_variance_authority2.cx)(classes2(props), className);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { ...props, className });
};

// src/list/index.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var List = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "my-4 divide-y divide-neutral-200 overflow-hidden rounded-xl dark:divide-neutral-700 dark:ring-1 dark:ring-gray-900/5 bg-white dark:bg-neutral-900", children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "dark:bg-neutral-900", onClick: button ? onClick : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: cn(
        "relative flex items-center space-x-3 px-2 py-5",
        "hover:bg-neutral-200/50 dark:bg-neutral-800 hover:dark:bg-neutral-800/50",
        selected && "bg-neutral-200 dark:bg-neutral-700",
        button && "cursor-pointer"
      ),
      children: children ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        startElement && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex-none dark:text-white text-neutral-900", children: startElement }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0 grow", children: [
          primaryText && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm font-medium text-neutral-900 dark:text-white", children: primaryText }),
          secondaryText && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: secondaryText })
        ] }),
        selected && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-900 dark:text-neutral-50 flex-none", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Check, {}) }),
        endElement && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex-none dark:text-white text-neutral-900", children: endElement })
      ] })
    }
  ) });
};

// src/switch/index.tsx
var Switch = __toESM(require("@radix-ui/react-switch"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var SwitchRoot = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Switch.Thumb,
    {
      className: "block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-black transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:dark:bg-neutral-900",
      ...props
    }
  );
};

// src/slider/index.tsx
var Slider = __toESM(require("@radix-ui/react-slider"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var SliderRoot = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    Slider.Root,
    {
      className: "relative flex h-5 w-[120px] touch-none select-none items-center",
      defaultValue: [50],
      max: 100,
      step: 1,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Slider.Track, { className: "relative h-[3px] grow rounded-full bg-neutral-400 dark:bg-neutral-700", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Slider.Range, { className: "absolute h-full rounded-full bg-neutral-900 dark:bg-neutral-50" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input,
  List,
  ListItem,
  NPWDButton,
  SliderRoot,
  SwitchRoot,
  SwitchThumb,
  classes,
  cn
});
