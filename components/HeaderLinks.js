import styles from '@/styles/HeaderLinks.module.css';

export default function HeaderLinks({ Icon, text }) {
  return (
    <div className={styles.headLinks}>
      <Icon className='fs-5 mt-3' />
      <p className='ps-2 pe-2'>{text}</p>
    </div>
  );
}
