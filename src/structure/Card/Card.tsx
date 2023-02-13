import React, { FC, MouseEventHandler } from 'react'
import cardStyles from './card.module.scss'

export type CardModes = | 'classic' | 'product'

export interface CardProps {
  buttonRight: string
  description: string
  image: string
  title: string
  onClickRight: MouseEventHandler<HTMLButtonElement>
  
  altImage?: string
  buttonLeft?: string
  className?: string
  id?: string
  mode?: CardModes
  onClickLeft?: MouseEventHandler<HTMLButtonElement>
  style?: React.CSSProperties
  price?: string | number
  symbol?: string
}

const Card: FC<CardProps> = ({
  altImage,
  buttonLeft,
  buttonRight,
  className = '',
  description,
  id,
  image,
  mode = 'classic',
  onClickLeft,
  onClickRight,
  style,
  symbol = '$',
  price = 100,
  title
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
                ? <button type="button" className={`${cardStyles.button_left}`} onClick={onClickLeft}>{buttonLeft}</button>
                : null }
              <button type="button" onClick={onClickRight}>{buttonRight}</button>
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
                <button type="button" onClick={onClickRight}>{buttonRight}</button>
              </div>
            </>
          )
      }

    </section>
  </article>
)

export default Card
