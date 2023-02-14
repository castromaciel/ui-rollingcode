import React, { FC, MouseEventHandler } from 'react'
import cardStyles from './card.module.scss'

export type CardModes = | 'classic' | 'product'

export type CardButtonProps = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export interface CardProps {
  buttonRight: CardButtonProps
  description: string
  image: string
  title: string

  altImage?: string
  buttonLeft?: CardButtonProps
  className?: string
  id?: string
  mode?: CardModes
  style?: React.CSSProperties
  price?: string | number
  symbol?: string
}

const defaultProps: CardProps = {
  buttonRight: {
    label: 'Show me more',
    onClick: () => {}
  },
  description: 'Lorem ipsum dolor sit amet, consectetur.',
  image: 'https://picsum.photos/id/231/300/300',
  title: 'Card example',

  altImage: 'Random image',
  buttonLeft: {
    label: 'Show me more',
    onClick: () => {}
  },
  className: '',
  id: '',
  mode: 'classic',
  price: '100',
  style: {},
  symbol: '$'
}

const Card: FC<CardProps> = ({
  buttonRight,
  description,
  image,
  title,
  altImage,
  buttonLeft,
  className,
  id,
  mode,
  price,
  style,
  symbol
}) => (
  <article id={id} className={`${className} ${cardStyles.card}`} style={style}>
    <header className={`${cardStyles.img_container}`}>
      <img src={image} alt={altImage} />
    </header>

    <section className={`${cardStyles.card_body}`}>

      <h2>{title}</h2>

      <p className={`${cardStyles.description}`}>{description}</p>

      {
        mode === 'classic'
          ? (
            <div className={`${cardStyles.buttons_container}`}>
              { buttonLeft
               && <button type="button" className={`${cardStyles.button_left}`} onClick={buttonLeft.onClick}>{buttonLeft.label}</button>}
              <button type="button" onClick={buttonRight.onClick}>{buttonRight.label}</button>
            </div>
          )
          : (
            <>
              <hr />
              <div className={`${cardStyles.buttons_price_container}`}>
                <p className={`${cardStyles.price}`}>
                  {symbol} 
                  {price}
                </p>
                <button type="button" onClick={buttonRight.onClick}>{buttonRight.label}</button>
              </div>
            </>
          )
      }

    </section>
  </article>
)

Card.defaultProps = defaultProps

export default Card
