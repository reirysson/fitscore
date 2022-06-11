import classNames from 'classnames';
import { useCaloriasContext } from '../../context/calorias'
import styles from './Barra.module.css'

function Barra() {
    const caloriasState = useCaloriasContext()

  function getVermelhoWidth() {
    const caloria = Math.max(0, caloriasState.caloriaConsumida.caloriaConsumida - caloriasState.metaDiaria.metaCaloria);
    const width = Math.min(caloria / caloriasState.metaDiaria.metaCaloria, 1);

    return width * 100;
  }

  function getVerdeWidth() {
    const width = Math.min(caloriasState.caloriaConsumida.caloriaConsumida / caloriasState.metaDiaria.metaCaloria, 1);

    return width * 100;
  }

  function getAmareloWidth() {
    const caloria = Math.max(0, caloriasState.metaDiaria.metaCaloria - caloriasState.caloriaConsumida.caloriaConsumida);
    const width = Math.min(caloria / caloriasState.metaDiaria.metaCaloria, 1);

    return width * 100;
  }

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.box, styles.red)}
        style={{ width: `${getVermelhoWidth()}%` }}
      ></div>
      <div className={classNames(styles.box, styles.green)} style={{ width: `${getVerdeWidth()}%` }}></div>
      <div
        className={classNames(styles.box, styles.yellow)}
        style={{ width: `${getAmareloWidth()}%` }}
      ></div>
    </div>
  );
}

export default Barra