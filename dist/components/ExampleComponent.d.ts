import React, { FC } from 'react';
export interface ExampleComponentProps {
    label: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare const ExampleComponent: FC<ExampleComponentProps>;
