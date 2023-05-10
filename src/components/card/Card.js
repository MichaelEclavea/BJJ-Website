import Typography from '@mui/material/Typography/Typography';
import styles from './card.module.scss';

export const Card = (props) => {
  const { teamItems, planItems } = props;

  const _renderTeamMembers = () => {
    if (teamItems) {
      return teamItems.map((person, idx) => (
        <div key={`${person.title}-${idx}`} className={styles.cardWrapper}>
          <Typography variant="h6" color={'black'}>{person.name}</Typography>
          <div className={styles.cardRoot}>
            <div className={styles.imgContainer}>
              <img src={person.image} className={styles.image} />
            </div>
            <div className={styles.cardBody}>
              <Typography variant="h6" align='left'>{person.title}</Typography>
              <Typography variant="body2" align='left'>{person.description}</Typography>
            </div>
          </div>
        </div>
      ))
    }
    return;
  }

  const _renderPlanItems = () => {
    if (planItems) {
      return planItems.map((item, idx) => (
        <div key={`${item.title}-${idx}`} className={styles.cardRootPlan}>
          <Typography variant="h6" color={'black'}>{item.title}</Typography>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Typography variant="subtitle1">Dates:</Typography>
            <Typography variant="subtitle2">{item.dates}</Typography>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Typography variant="subtitle1">Times:</Typography>
            <Typography variant="subtitle2">{item.times}</Typography>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Typography variant="body1">Description:</Typography>
            <Typography variant="subtitle2">{item.description}</Typography>
          </div>
        </div>
      ))
    }
    return;
  }

  return (
    <div className={styles.cardContainer}>
      {teamItems ? _renderTeamMembers() : _renderPlanItems()}
    </div>
  )
}
