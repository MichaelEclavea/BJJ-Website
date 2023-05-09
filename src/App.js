import { useRef } from 'react';
import HomeScreen from './screens/HomePage/HomePage';
import NavBar from './components/navigation/NavBar';
import PricingPage from './screens/Pricing/PricingPage';
import TeamPage from './screens/TeamPage/TeamPage';
import styles from './app.module.scss';
import ContactPage from './screens/ContactPage/ContactPage';

function App() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    console.log('yes')
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.root}>
      <NavBar />
      <div className={styles.pageContainer}>
        <div ref={scrollRef} className={styles.pageWrapper}><HomeScreen /></div>
        <div className={styles.pageWrapper}><PricingPage /></div>
        <div className={styles.pageWrapper}><TeamPage /></div>
        <div className={styles.pageWrapper}><ContactPage scrollToTop={handleScroll} /></div>
      </div>
    </div>
  );
}

export default App;
