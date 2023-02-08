import React, { FC } from 'react'

interface ExampleComponentProps {
  label: string
  id?: string
  className?: string
  style?: React.CSSProperties
}

const ExampleComponent: FC<ExampleComponentProps> = ({
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

export default ExampleComponent
