import React, { FC } from 'react'

export interface ExampleComponentProps {
  label: string
  id?: string
  className?: string
  style?: React.CSSProperties
}

export const ExampleComponent: FC<ExampleComponentProps> = ({
  className = '', style, label, id
}) => (
  <div
    id={id}
    className={`${className}`}
    style={style}
  >
    {label}
  </div>
)
