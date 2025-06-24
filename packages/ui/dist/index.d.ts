import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as Switch from '@radix-ui/react-switch';
import * as Slider from '@radix-ui/react-slider';
import { ClassValue } from 'clsx';

declare const classes$1: (props?: ({
    variant?: "primary" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof classes$1>;
declare const NPWDButton: React.FC<ButtonProps>;

declare const classes: (props?: ({
    size?: "md" | null | undefined;
    variant?: "primary" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof classes>;
declare const Input: React.FC<InputProps>;

interface ListProps {
    children: React.ReactNode;
}
interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
    children?: React.ReactNode;
    primaryText?: React.ReactNode;
    secondaryText?: React.ReactNode;
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    button?: boolean;
    selected?: boolean;
}
declare const List: React.FC<ListProps>;
declare const ListItem: ({ primaryText, secondaryText, startElement, endElement, button, selected, onClick, children, }: ListItemProps) => react_jsx_runtime.JSX.Element;

declare const SwitchRoot: React.FC<Switch.SwitchProps>;
declare const SwitchThumb: React.FC<Switch.SwitchThumbProps>;

declare const SliderRoot: React.FC<Slider.SliderProps>;

declare function cn(...inputs: ClassValue[]): string;

export { ButtonProps, Input, InputProps, List, ListItem, ListItemProps, ListProps, NPWDButton, SliderRoot, SwitchRoot, SwitchThumb, classes, cn };
