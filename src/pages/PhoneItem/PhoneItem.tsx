import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PhoneDetails } from 'types/PhoneDetails'
import { getPhoneDetails, getAllPhones } from 'api/getPhones'
import { Phone } from 'types/Phone'
import styles from './PhoneItem.module.scss'
import { AddToCartButton } from 'components/buttons/AddToCartButton'
import { AddToFavoriteButton } from 'components/buttons/AddToFavoriteButton'
import classNames from 'classnames'
import { BreadCrumbs } from 'components/BreadCrumbs'
import { BackButton } from 'components/buttons/BackButton'
import { PhonesSwiper } from 'components/PhonesSwiper'
import { getColorHex } from 'utils/getColorHex'

export const PhoneItem: React.FC = () => {
  const { phoneId = '' } = useParams()
  const [phoneItem, setPhoneItem] = useState<PhoneDetails>()
  const [isError, setIsError] = useState<boolean>(false)
  const [mainPhoto, setMainPhoto] = useState<string>()
  const [currentPhoneId, setCurrentPhoneId] = useState<string>(phoneId)
  const [favoritePhone, setFavoritePhone] = useState<Phone>()

  const fetchOnePhone = async (phoneId: string) => {
    try {
      const onePhoneData = await getPhoneDetails(phoneId)
      const photo = onePhoneData.images[0]
      setPhoneItem(onePhoneData)
      setMainPhoto(photo)
      setCurrentPhoneId(onePhoneData.id)
      setIsError(false)
    } catch (error) {
      setIsError(true)
    }
  }

  const fetchAllPhones = async (phoneId: string) => {
    try {
      const phonesToFavorite = await getAllPhones(phoneId)
      const firstPhone = phonesToFavorite.phones.find((phone) => phone.itemId === phoneId)
      if (firstPhone) {
        setFavoritePhone(firstPhone)
      }
    } catch (error) {
      setIsError(true)
    }
  }

  useEffect(() => {
    const loadFunc = () => {
      fetchOnePhone(phoneId)
      fetchAllPhones(phoneId)
    }
    loadFunc()
  }, [phoneId])

  const getPhoneWithColor = useCallback(
    (color: string) => {
      const splittedId = currentPhoneId?.split('-')
      splittedId[splittedId.length - 1] = color.toLowerCase()
      const idWithNewColor = splittedId.join('-')
      return `../${idWithNewColor}`
    },
    [currentPhoneId],
  )

  const getPhoneWithCapacity = useCallback(
    (capacity: string) => {
      const splittedId = currentPhoneId?.split('-')
      splittedId[splittedId.length - 2] = capacity.toLowerCase()
      const idWithNewCapacity = splittedId.join('-')
      return `../${idWithNewCapacity}`
    },
    [currentPhoneId],
  )

  return (
    <>
      <BreadCrumbs />
      <BackButton />
      <main>
        {isError && <h3 className={styles.title}>There is no phone with such id</h3>}
        {!isError && (
          <>
            <div className={styles.container}>
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
                        phoneItem.colorsAvailable.map((currentColor) => {
                          const preparedColor = getColorHex(currentColor)

                          const isSelected = currentColor === phoneItem?.color
                          return (
                            <Link
                              key={currentColor}
                              to={getPhoneWithColor(currentColor)}
                              className={classNames(styles.containerForColor, {
                                [styles.selectedColor]: isSelected,
                              })}
                            >
                              <div className={styles.color} style={{ backgroundColor: preparedColor }}></div>
                            </Link>
                          )
                        })}
                    </div>
                  </div>
                  <div className={styles.separator} />
                  <p className={styles.formTitle}>Select capacity</p>
                  <div className={styles.availableCapacity}>
                    {phoneItem &&
                      phoneItem.capacityAvailable.map((currentCapacity) => (
                        <Link
                          key={currentCapacity}
                          to={getPhoneWithCapacity(currentCapacity)}
                          className={classNames(styles.capacity, {
                            [styles.selectedCapacity]: currentCapacity === phoneItem.capacity,
                          })}
                        >
                          {currentCapacity}
                        </Link>
                      ))}
                  </div>
                  <div className={styles.separator} />
                  <div className={styles.prices}>
                    <p className={styles.priceDiscount}>${phoneItem?.priceDiscount}</p>
                    <p className={styles.priceRegular}>${phoneItem?.priceRegular}</p>
                  </div>
                  <div className={styles.buttonLine}>
                    <div className={styles.butToAdd}>
                      <AddToCartButton phoneId={phoneId} />
                    </div>
                    <div className={styles.butToFav}>
                      {favoritePhone && <AddToFavoriteButton phone={favoritePhone} />}
                    </div>
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
              <div className={styles.addInfo}>
                <div className={styles.category}>
                  <h2 className={styles.subTitle}>About</h2>
                  <div className={styles.separatorInfo} />
                  <h3 className={styles.subSubTitle}>And then there was Pro</h3>
                  <p className={styles.textP}>
                    A transformative triple‑camera system that adds tons of capability without complexity.
                    <br />
                    <br />
                    An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning
                    and pushes the boundariesof what a smartphone can do. Welcome to the first iPhone powerful enough to
                    be called Pro.
                  </p>
                  <h3 className={styles.subSubTitle}>Camera</h3>
                  <p className={styles.textP}>
                    Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity
                    of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light.
                    Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos.
                    You’ve never shot with anything like it.
                  </p>
                  <h3 className={styles.subSubTitle}>
                    Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
                  </h3>
                  <p className={styles.textP}>
                    iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and
                    smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and
                    cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times
                    more scene and powerful new editing tools to play with.
                  </p>
                </div>
                <div className={styles.category}>
                  <h2 className={styles.subTitle}>Tech specs</h2>
                  <div className={styles.separatorInfo} />
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
                        <p className={styles.descriptionData}>{phoneItem?.cell.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PhonesSwiper title={'You may also like'} sortBy={'new'} isFullPrice={true} />
          </>
        )}
      </main>
    </>
  )
}
