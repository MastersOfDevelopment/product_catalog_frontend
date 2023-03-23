import { Grid } from '@mui/material'
import { BreadCrumbs } from 'components/BreadCrumbs'
import React from 'react'
import styles from './Contacts.module.scss'
import { TeamPlayer } from 'types/TeamPlayer'
import { Link } from 'react-router-dom'
import git from '../../assets/icons/github.svg'
import telegram from '../../assets/icons/telegram.svg'
import linkedin from '../../assets/icons/linkedin.svg'

export const Contacts: React.FC = () => {
  const team = [
    {
      id: 1,
      name: 'Iryna Pysanko',
      position: 'full-stack developer',
      gitHub: 'https://github.com/Malva37',
      telegram: 'https://t.me/Iryna_Pysanko',
      linkedin: 'https://www.linkedin.com/in/irynapysanko',
      image: 'team/iryna_pysanko.jpg',
    },
    {
      id: 2,
      name: 'Vladyslav Horovyi',
      position: 'full-stack developer',
      gitHub: 'https://github.com/vladyslav78292',
      telegram: 'https://t.me/Vladyslav_Horovyi',
      linkedin: 'https://www.linkedin.com/in/vladyslav-horovyi-56080b265/?locale=en_US',
      image: 'team/vladyslav-horovyi.jpg',
    },
    {
      id: 3,
      name: 'Marharyta Frolova',
      position: 'full-stack developer',
      gitHub: 'https://github.com/MFrolova-art',
      telegram: 'http://t.me/MarharytaFrolova',
      linkedin: 'https://www.linkedin.com/in/marharyta-frolova-8939251b4/',
      image: 'team/marharyta_frolova.jpg',
    },
    {
      id: 4,
      name: 'Yurii Demkiv',
      position: 'full-stack developer',
      gitHub: 'https://github.com/Coyoote',
      telegram: 'https://t.me/YDemkiv',
      linkedin: 'https://www.linkedin.com/in/yurii-demkiv-469884265',
      image: 'team/yurii_demkiv.jpg',
    },
    {
      id: 5,
      name: 'Ihor Mariash',
      position: 'full-stack developer',
      gitHub: 'https://github.com/imariash86',
      telegram: 'https://t.me/imariash86',
      linkedin: 'https://www.linkedin.com/in/imariash86',
      image: 'team/ihor_mariash.jpg',
    },
  ]

  return (
    <div className={styles.main}>
      <BreadCrumbs />
      <h1 className={styles.title}>Let's develop together</h1>

      <Grid container justifyContent="center" rowSpacing={5} columnSpacing={3} className={styles.gridMui}>
        {team.map((player: TeamPlayer) => (
          <Grid key={player.id} justifyContent="center" item>
            <div className={styles.container}>
              <img src={require(`assets/${player.image}`)} alt={player.name} className={styles.image} />
              <p className={styles.name}>{player.name}</p>
              <p className={styles.position}>{player.position}</p>

              <div className={styles.people_links}>
                <Link to={player.gitHub} target={'_blank'}>
                  {' '}
                  <img className={styles.logo} src={git} alt="Github" />
                </Link>
                <Link to={player.linkedin} target={'_blank'}>
                  {' '}
                  <img className={styles.logo} src={linkedin} alt="Linkedin" />
                </Link>
                <Link to={player.telegram} target={'_blank'}>
                  {' '}
                  <img className={styles.logo} src={telegram} alt="Telegram" />
                </Link>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
