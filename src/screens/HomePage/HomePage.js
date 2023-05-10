import Typography from '@mui/material/Typography/Typography';
import styles from './homePage.module.scss';

const HomeScreen = () => {
  return (
    <div id={'home'} className={styles.homeScreen}>
      <div className={styles.overlay} />
      <Typography variant="h2" align={'center'} color={'white'} className={styles.header1}>
        PNW
      </Typography>
      <Typography variant="h2" align={'center'} color={'white'} className={styles.header2}>
        Brazilian Jiu-Jitsu
      </Typography>
    </div>
  )
}

export default HomeScreen;