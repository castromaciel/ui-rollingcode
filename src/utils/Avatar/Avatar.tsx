import React, { FC } from 'react'
import './avatar.scss'

type ShapeType = | 'square' | 'circle'
type SizeType = | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface AvatarProps {
  image: string
  label?: string
  shape?: ShapeType
  size?: SizeType
}

const Avatar: FC<AvatarProps> = ({
  image,
  label,
  shape = 'circle',
  size = 'md'
}) => (
  <picture className={`rc-avatar size_${size}`}>
    <img src={image} alt={`${label || 'avatar'}`} className={`${shape}`} />
  </picture>
)

export default Avatar
