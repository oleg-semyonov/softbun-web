import type { ButtonHTMLAttributes } from 'react';

import { getButtonClassName } from './lib';
import type { ButtonProps } from './types';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {
    const { className, variation, children, ...rest } = props;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button className={getButtonClassName(variation, className)} {...rest}>
            {children}
        </button>
    );
}
