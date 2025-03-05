// This file provides type declarations to fix TypeScript errors with cmdk
import 'cmdk';

declare module 'cmdk' {
    export interface CommandProps {
        children?: React.ReactNode;
        className?: string;
        [key: string]: unknown;
    }

    export interface CommandInputProps {
        placeholder?: string;
        className?: string;
        [key: string]: unknown;
    }

    export interface CommandListProps {
        children?: React.ReactNode;
        className?: string;
        [key: string]: unknown;
    }

    export interface CommandEmptyProps {
        children?: React.ReactNode;
        className?: string;
        [key: string]: unknown;
    }

    export interface CommandGroupProps {
        children?: React.ReactNode;
        className?: string;
        heading?: string;
        [key: string]: unknown;
    }

    export interface CommandItemProps {
        children?: React.ReactNode;
        className?: string;
        value?: string;
        onSelect?: (value: string) => void;
        [key: string]: unknown;
    }

    export interface CommandSeparatorProps {
        className?: string;
        [key: string]: unknown;
    }
}
