import React from 'react';
import { Card } from '../../components/card/Card';
import styles from './pricingPage.module.scss';

function Plan(title, dates, times, description) {
  this.title = title;
  this.dates = dates;
  this.times = times;
  this.description = description;
}

const PricingPage = () => {
  const kidsPlan = new Plan('Kids', 'Mon-Thurs', '2pm-4pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');
  const womenPlan = new Plan('Womens', 'Mon-Thurs', '6pm-8pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');
  const adultPlan = new Plan('Adult', 'Mon-Thurs', '4pm-6pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');
  const advancedPlan = new Plan('Advanced', 'Fri-Sat', '2pm-4:30pm', 'This is a great class for beginners at a very young age. Students will build a strong foundation in the basics.');

  const plans = [kidsPlan, womenPlan, adultPlan, advancedPlan];

  return (
    <div id={'pricing'} className={styles.pricingPageContainer}>
      <h2>Plans & Pricing</h2>
      <Card planItems={plans} />
    </div>
  )
}

export default PricingPage;