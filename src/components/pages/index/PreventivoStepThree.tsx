import type { StepOneType, StepTwoType } from "../../../types/types";
import styles from "../../../assets/css/modules/preventivo.module.css";

export default function PreventivoStepThree({
  formDataStepOne,
  formDataStepTwo,
  handlePreviouStep,
}: {
  formDataStepOne: StepOneType;
  formDataStepTwo: StepTwoType;
  handlePreviouStep: () => void;
}) {


  return (
    <div className={styles.preventivo__formThird}>
      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='nome'>Nome</label>
          <input
            type='text'
            name='nome'
            id='nome'
            value={formDataStepOne.nome}
            readOnly
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='cognome'>Cognome</label>
          <input
            type='text'
            name='cognome'
            id='cognome'
            value={formDataStepOne.cognome}
            readOnly
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='azienda'>Azienda</label>
          <input
            type='text'
            name='azienda'
            id='azienda'
            value={formDataStepOne.azienda}
            readOnly
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='piva'>P.IVA</label>
          <input
            type='text'
            name='piva'
            id='piva'
            maxLength={11}
            value={formDataStepOne.piva}
            readOnly
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formDataStepOne.email}
            readOnly
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='telefono'>Telefono</label>
          <input
            type='tel'
            name='telefono'
            id='telefono'
            value={formDataStepOne.telefono}
            readOnly
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='indirizzoDiCarico'>Indirizzo di carico</label>
          <input
            type='text'
            name='indirizzoDiCarico'
            id='indirizzoDiCarico'
            value={formDataStepTwo.indirizzoDiCarico}
            readOnly
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='indirizzoDiScarico'>Indirizzo di scarico</label>
          <input
            type='text'
            name='indirizzoDiScarico'
            id='indirizzoDiScarico'
            value={formDataStepTwo.indirizzoDiScarico}
            readOnly
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='tipologiaCarico'>Tipologia carico</label>
          <input
            type='text'
            name='tipologiaCarico'
            id='tipologiaCarico'
            value={formDataStepTwo.tipologiaCarico}
            readOnly
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='dataProntezzaMerce'>Data prontezza merce</label>
          <input
            type='text'
            name='dataProntezzaMerce'
            id='dataProntezzaMerce'
            value={formDataStepTwo.dataProntezzaMerce}
            readOnly
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='larghezza'>Larghezza</label>
          <input
            type='text'
            name='larghezza'
            id='larghezza'
            value={formDataStepTwo.larghezza}
            readOnly
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='altezza'>Altezza</label>
          <input
            type='text'
            name='altezza'
            id='altezza'
            value={formDataStepTwo.altezza}
            readOnly
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='peso'>Peso</label>
          <input
            type='text'
            name='peso'
            id='peso'
            value={formDataStepTwo.peso}
            readOnly
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='numeroPezzi'>Numero Pezzi</label>
          <input
            type='text'
            name='numeroPezzi'
            id='numeroPezzi'
            value={formDataStepTwo.numeroPezzi}
            readOnly
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLineInside}>
        <label htmlFor='infoAggiuntive'>
          Informazioni Aggiuntive (opzionale)
        </label>
        <textarea
          name='infoAggiuntive'
          id='infoAggiuntive'
          value={formDataStepTwo.infoAggiuntive}
          maxLength={500}
          readOnly
        ></textarea>
      </div>

      <div className={styles.preventivoStepThree__checkbox}>
        <input
          type='checkbox'
          name='datiPersonali'
          id='datiPersonali'
          required
          aria-required='true'
        />
        <label htmlFor='datiPersonali'>
          Autorizzo al trattamento dei miei dati personali
        </label>
      </div>

      <div className='flex justify-between mt-8'>
        <input
          className={styles.preventivo__bottone}
          type='button'
          value='Indietro'
          onClick={handlePreviouStep}
        />
        <input className={styles.preventivo__bottone} type='submit' />
      </div>
    </div>
  );
}
