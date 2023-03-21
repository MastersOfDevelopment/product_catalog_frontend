/* eslint-disable */
import { memo, useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PhoneDetails } from 'types/PhoneDetails'
import { getPhoneDetails } from 'api/getPhones'
import { useParams } from 'react-router-dom'
import { Phone } from '../../types/Phone'
import styles from './PhoneItem.module.scss'
import { AddToCardButton } from 'components/buttons/AddToCardButton'
import { AddToFavoriteButton } from 'components/buttons/AddToFavoriteButton'
import classNames from 'classnames'

// type Props = {
//   phone: PhoneDetails
// }

export const PhoneItem: React.FC = () => {
  const [phoneItem, setPhoneItem] = useState<PhoneDetails | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [mainPhoto, setMainPhoto] = useState<string | undefined>()

  const { phoneId = '' } = useParams()

  const fetchOnePhone = useCallback(async (phoneId: string) => {
    try {
      const onePhoneData = await getPhoneDetails(phoneId)
      console.log('onePhoneData', onePhoneData)
      const photo = onePhoneData.images[0]
      setPhoneItem(onePhoneData)
      setMainPhoto(photo)
  
    } catch (error) {
      console.log(error)
      // setPhoneItem(null)
      // setIsError(true)
    } finally {
      // setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    console.log('use effect called')
    const loadFunc = async () => {
      await fetchOnePhone(phoneId)
    }
    loadFunc()
  }, [phoneId, fetchOnePhone])

  return (
    <>
      <main>
        <h1 className={styles.title}>{`${phoneItem?.name}`}</h1>
        <div className={styles.container}>
          <div className={styles.mainPhoto}> {mainPhoto && <img className={styles.mainImage} src={require(`assets/${mainPhoto}`)} />} </div>
          <div className={styles.flex_container}>
            <div className={styles.flex_boxes}>
              {phoneItem?.images.map((img) => (
                <div className={styles.li} key={img} onClick={() => setMainPhoto(img)}>
                  <img className={styles.flex_img} src={require(`assets/${img}`)} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className={styles.characteristics}>
        <div className={styles.form}>
          <p className={styles.formTitle}>Available colors</p>

          <div className={styles.availableColor}>
            {phoneItem && phoneItem.colorsAvailable.map(currentColor => (
              <div
                key={currentColor}
                className={classNames(styles.containerForColor, {
                  [styles.selectedColor]: currentColor === phoneItem?.color,
                })}
              >
                <div
                  className={styles.color}
                  style={ { backgroundColor: currentColor }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.separator} />
        <p className={styles.formTitle}>Select capacity</p>
        <div className={styles.availableCapacity}>
          {phoneItem && phoneItem.capacityAvailable.map(currentCapacity => (
          <button
            key={currentCapacity}
            className={classNames(styles.capacity, {
              [styles.selectedCapacity]: currentCapacity === phoneItem.capacity,
            })}
          >{currentCapacity}</button>
          ))}
        </div>
        <div className={styles.separator} />
          <div className={styles.prices}>
            <p className={styles.priceDiscount}>${phoneItem?.priceDiscount}</p>
            <p className={styles.priceRegular}>${phoneItem?.priceRegular}</p>
          </div>
          <div className={styles.buttonLine}>
            <AddToCardButton />
            {/* <AddToFavoriteButton phoneItem={phoneItem}/> */}
          </div>
        </section>
        <section className={styles.description}>
          <div className={styles.description}>
            <div className={styles.line}>
              <p className={styles.descriptionTitle}>Screen</p>
              <p className={styles.descriptionData}>screen</p>
            </div>

            <div className={styles.line}>
              <p className={styles.descriptionTitle}>Capacity</p>
              <p className={styles.descriptionData}>capacity</p>
            </div>

            <div className={styles.line}>
              <p className={styles.descriptionTitle}>RAM</p>
              <p className={styles.descriptionData}>ram</p>
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <h2>About</h2>
          <div className={styles.separator} />
          <div>
            <h3>And then there was Pro</h3>
            <p>
              A transformative triple‑camera system that adds tons of capability without complexity.
              {/* An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro. */}
            </p>
          </div>
          <div>
            <h3>Camera</h3>
            <p>
              {/* Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it. */}
            </p>
          </div>
          <div>
            <h3>Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h3>
            <p>
              {/* iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with. */}
            </p>
          </div>
        </section>
        <section className={styles.tech}>
          <h2>Tech specs</h2>
          <div className={styles.separator} />
        </section>
        <section className={styles.featered}>
          <h1>You may also like</h1>
        </section>
      </main>
    </>
  )
}
