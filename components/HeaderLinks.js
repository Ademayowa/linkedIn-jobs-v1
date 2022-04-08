import styles from '@/styles/HeaderLinks.module.css';

export default function HeaderLinks({ Icon, text }) {
  return (
    <div className={styles.headLinks}>
      <Icon className='fs-5 mt-3' />
      <p className='ps-4 pe-4'>{text}</p>
    </div>
  );
}
