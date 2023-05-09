import Typography from '@mui/material/Typography/Typography';
import styles from './homePage.module.scss';

const HomeScreen = () => {
  return (
    <div id={'home'} className={styles.homeScreen}>
      <Typography variant="h1" component="h2">
        Home Page
      </Typography>
    </div>
  )
}

export default HomeScreen;