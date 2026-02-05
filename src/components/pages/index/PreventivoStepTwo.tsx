import type { ChangeEvent } from "react";
import type { StepTwoType } from "../../../types/types";
import styles from "../../../assets/css/modules/preventivo.module.css";

export default function PreventivoStepTwo({
  formDataStepTwo,
  handleChange,
  handleNextStep,
  handlePreviouStep,
}: {
  formDataStepTwo: StepTwoType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleNextStep: () => void;
  handlePreviouStep: () => void;
}) {
  return (
    <>
      <label htmlFor='indirizzoDiCarico'>Indirizzo di carico</label>
      <input
        type='text'
        name='indirizzoDiCarico'
        id='indirizzoDiCarico'
        required
        aria-required='true'
        value={formDataStepTwo.indirizzoDiCarico}
        onChange={handleChange}
      />
      <label htmlFor='indirizzoDiScarico'>Indirizzo di scarico</label>
      <input
        type='text'
        name='indirizzoDiScarico'
        id='indirizzoDiScarico'
        required
        aria-required='true'
        value={formDataStepTwo.indirizzoDiScarico}
        onChange={handleChange}
      />
      <div className={styles.preventivo__doubleLine}>
        <div className='flex flex-col '>
          <label htmlFor='tipologiaCarico'>Tipologia carico</label>
          <input
            type='text'
            name='tipologiaCarico'
            id='tipologiaCarico'
            required
            aria-required='true'
            value={formDataStepTwo.tipologiaCarico}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='dataProntezzaMerce'>Data prontezza merce</label>
          <input
            type='date'
            name='dataProntezzaMerce'
            id='dataProntezzaMerce'
            required
            aria-required='true'
            value={formDataStepTwo.dataProntezzaMerce}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className='flex flex-col '>
          <label htmlFor='larghezza'>Larghezza (m)</label>
          <input
            type='number'
            name='larghezza'
            id='larghezza'
            required
            aria-required='true'
            value={formDataStepTwo.larghezza}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='altezza'>Altezza (m)</label>
          <input
            type='number'
            name='altezza'
            id='altezza'
            required
            aria-required='true'
            value={formDataStepTwo.altezza}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.preventivo__doubleLine}>
        <div className='flex flex-col '>
          <label htmlFor='peso'>Peso (kg)</label>
          <input
            type='number'
            name='peso'
            id='peso'
            required
            aria-required='true'
            value={formDataStepTwo.peso}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='numeroPezzi'>Numero Pezzi</label>
          <input
            type='number'
            name='numeroPezzi'
            id='numeroPezzi'
            required
            aria-required='true'
            value={formDataStepTwo.numeroPezzi}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor='infoAggiuntive'>
        Informazioni Aggiuntive (opzionale)
      </label>
      <textarea
        name='infoAggiuntive'
        id='infoAggiuntive'
        value={formDataStepTwo.infoAggiuntive}
        onChange={handleChange}
      ></textarea>

      <div className='flex justify-between mt-8'>
        <input
          className={styles.preventivo__bottone}
          type='button'
          value='Indietro'
          onClick={handlePreviouStep}
        />
        <input
          className={styles.preventivo__bottone}
          type='button'
          value='Avanti'
          onClick={handleNextStep}
        />
      </div>
    </>
  );
}
