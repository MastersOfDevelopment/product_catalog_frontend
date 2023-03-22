/* eslint-disable */
import { memo, useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PhoneDetails } from 'types/PhoneDetails'
import { getPhoneDetails, getAllPhones } from 'api/getPhones'
import { useParams } from 'react-router-dom'
import { Phone } from '../../types/Phone'
import styles from './PhoneItem.module.scss'
import { AddToCardButton } from 'components/buttons/AddToCardButton'
import { AddToFavoriteButton } from 'components/buttons/AddToFavoriteButton'
import classNames from 'classnames'

export const PhoneItem: React.FC = () => {
  const { phoneId = '' } = useParams()
  const [phoneItem, setPhoneItem] = useState<PhoneDetails | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [mainPhoto, setMainPhoto] = useState<string | undefined>()
  const [currentPhoneId, setCurrentPhoneId] = useState<string>(phoneId)
  const [favoritePhone, setFavoritePhone] = useState<Phone | undefined>()

  const fetchOnePhone = useCallback(async (phoneId: string) => {
    try {
      const onePhoneData = await getPhoneDetails(phoneId)
      console.log('onePhoneData', onePhoneData)
      const photo = onePhoneData.images[0]
      const firstCapacity = onePhoneData.capacity
      setPhoneItem(onePhoneData)
      setMainPhoto(photo)
      setCurrentPhoneId(onePhoneData.id)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchAllPhones = useCallback(async (phoneId: string) => {
    try {
      const phonesToFavorite = await getAllPhones(phoneId)
      const firstPhone = phonesToFavorite.phones.find((phone) => phone.itemId === phoneId)
      setFavoritePhone(firstPhone)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    console.log('use effect called')
    const loadFunc = async () => {
      await fetchOnePhone(currentPhoneId)
      await fetchAllPhones(currentPhoneId)
    }
    loadFunc()
  }, [fetchOnePhone, fetchAllPhones, currentPhoneId])

  const getPhoneWithColor = useCallback(
    (color: string) => {
      const splittedId = currentPhoneId?.split('-')
      splittedId[splittedId.length - 1] = color.toLowerCase()
      const idWithNewColor = splittedId.join('-')
      setCurrentPhoneId(idWithNewColor)
    },
    [currentPhoneId],
  )

  const getPhoneWithCapacity = useCallback(
    (capacity: string) => {
      const splittedId = currentPhoneId?.split('-')
      splittedId[splittedId.length - 2] = capacity.toLowerCase()
      const idWithNewCapacity = splittedId.join('-')
      setCurrentPhoneId(idWithNewCapacity)
    },
    [currentPhoneId],
  )

  return (
    <>
      <main>
        <h1 className={styles.title}>{`${phoneItem?.name}`}</h1>
        <section className={styles.characteristics}>
          <div className={styles.photos}>
            <div className={styles.mainPhoto}>
              {mainPhoto && <img className={styles.mainImage} src={require(`assets/${mainPhoto}`)} />}
            </div>
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
          <div className={styles.flex2}>
            <div className={styles.form}>
              <p className={styles.formTitle}>Available colors</p>

              <div className={styles.availableColor}>
                {phoneItem &&
                  phoneItem.colorsAvailable.map((currentColor) => (
                    <div
                      key={currentColor}
                      className={classNames(styles.containerForColor, {
                        [styles.selectedColor]: currentColor === phoneItem?.color,
                      })}
                      onClick={() => getPhoneWithColor(currentColor)}
                    >
                      <div className={styles.color} style={{ backgroundColor: currentColor }}></div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.separator} />
            <p className={styles.formTitle}>Select capacity</p>
            <div className={styles.availableCapacity}>
              {phoneItem &&
                phoneItem.capacityAvailable.map((currentCapacity) => (
                  <button
                    key={currentCapacity}
                    className={classNames(styles.capacity, {
                      [styles.selectedCapacity]: currentCapacity === phoneItem.capacity,
                    })}
                    onClick={() => getPhoneWithCapacity(currentCapacity)}
                  >
                    {currentCapacity}
                  </button>
                ))}
            </div>
            <div className={styles.separator} />
            <div className={styles.prices}>
              <p className={styles.priceDiscount}>${phoneItem?.priceDiscount}</p>
              <p className={styles.priceRegular}>${phoneItem?.priceRegular}</p>
            </div>
            <div className={styles.buttonLine}>
              <div className={styles.butToAdd}>
                <AddToCardButton phoneId={phoneId} />
              </div>
              <div className={styles.butToFav}>
              <AddToFavoriteButton phone={favoritePhone} /></div>
            </div>
            <div className={styles.description}>
              <div className={styles.line}>
                <p className={styles.descriptionTitle}>Screen</p>
                <p className={styles.descriptionData}>{phoneItem?.screen}</p>
              </div>

              <div className={styles.line}>
                <p className={styles.descriptionTitle}>Resolution</p>
                <p className={styles.descriptionData}>{phoneItem?.resolution}</p>
              </div>

              <div className={styles.line}>
                <p className={styles.descriptionTitle}>Processor</p>
                <p className={styles.descriptionData}>{phoneItem?.processor}</p>
              </div>

              <div className={styles.line}>
                <p className={styles.descriptionTitle}>RAM</p>
                <p className={styles.descriptionData}>{phoneItem?.ram}</p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div>
            <h2 className={styles.subTitle}>About</h2>
            <div className={styles.separator} />
            <h3 className={styles.subSubTitle}>And then there was Pro</h3>
            <p className={styles.textP}>A transformative triple‑camera system that adds tons of capability without
              complexity.
              <br />
              <br />
              An unprecedented leap in battery life. And a mind‑blowing chip that
              doubles down on machine learning and pushes the boundariesof what a
              smartphone can do. Welcome to the first iPhone powerful enough to be
              called Pro.
            </p>
            <h3 className={styles.subSubTitle}>Camera</h3>
            <p className={styles.textP}>Meet the first triple‑camera system to combine cutting‑edge technology
              with the legendary simplicity of iPhone. Capture up to four times more
              scene. Get beautiful images in drastically lower light. Shoot the
              highest‑quality video in a smartphone — then edit with the same tools you
              love for photos. You’ve never shot with anything like it.</p>
            <h3 className={styles.subSubTitle}>Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h3>
            <p className={styles.textP}>iPhone 11 Pro lets you capture videos that are beautifully true to life,
              with greater detail and smoother motion. Epic processing power means it
              can shoot 4K video with extended dynamic range and cinematic video
              stabilization — all at 60 fps. You get more creative control, too, with
              four times more scene and powerful new editing tools to play with.</p>
          </div>
          <div>
            <h2 className={styles.subTitle}>Tech specs</h2>
            <div className={styles.separator} />
            <div>
              <div className={styles.description}>
                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>Screen</p>
                  <p className={styles.descriptionData}>{phoneItem?.screen}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>Resolution</p>
                  <p className={styles.descriptionData}>{phoneItem?.resolution}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>Processor</p>
                  <p className={styles.descriptionData}>{phoneItem?.processor}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>RAM</p>
                  <p className={styles.descriptionData}>{phoneItem?.ram}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>RAM</p>
                  <p className={styles.descriptionData}>{phoneItem?.ram}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>Built in memory</p>
                  <p className={styles.descriptionData}>{phoneItem?.capacity}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>Camera</p>
                  <p className={styles.descriptionData}>{phoneItem?.camera}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>Zoom</p>
                  <p className={styles.descriptionData}>{phoneItem?.zoom}</p>
                </div>

                <div className={styles.line}>
                  <p className={styles.descriptionTitle}>Cell</p>
                  <p className={styles.descriptionData}>{phoneItem?.cell.join(',')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
