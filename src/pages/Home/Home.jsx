import picture from '../../assets/picture.png';
import css from './Home.module.css';
import cssC from '../../components/UserCard/UserCard.module.css';

export default function Home() {
  return (
    <div className={css.homeContainer}>
      <div>
        <h1 className={css.title}>Following Net</h1>
        <img src={picture} alt="pictures" className={cssC.picture} />
      </div>
    </div>
  );
}
