import type { ChangeEvent } from "react";
import type { StepOneType } from "../../../types/types";
import styles from "../../../assets/css/modules/preventivo.module.css";
import clsx from "clsx";

export default function PreventivoStepOne({
  formDataStepOne,
  handleChange,
  handleNextStep,
}: {
  formDataStepOne: StepOneType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleNextStep: () => void;
}) {
  return (
    <>
      <label htmlFor='nome'>Nome</label>
      <input
        type='text'
        name='nome'
        id='nome'
        required
        aria-required='true'
        value={formDataStepOne.nome}
        onChange={handleChange}
      />
      <label htmlFor='cognome'>Cognome</label>
      <input
        type='text'
        name='cognome'
        id='cognome'
        required
        aria-required='true'
        value={formDataStepOne.cognome}
        onChange={handleChange}
      />
      <div className={styles.preventivo__doubleLine}>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='azienda'>Azienda</label>
          <input
            type='text'
            name='azienda'
            id='azienda'
            required
            aria-required='true'
            value={formDataStepOne.azienda}
            onChange={handleChange}
          />
        </div>
        <div className={styles.preventivo__doubleLineInside}>
          <label htmlFor='piva'>P.IVA</label>
          <input
            type='text'
            name='piva'
            id='piva'
            required
            aria-required='true'
            maxLength={11}
            value={formDataStepOne.piva}
            onChange={handleChange}
          />
        </div>
      </div>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        required
        aria-required='true'
        value={formDataStepOne.email}
        onChange={handleChange}
      />
      <label htmlFor='telefono'>Telefono</label>
      <input
        type='tel'
        name='telefono'
        id='telefono'
        required
        aria-required='true'
        value={formDataStepOne.telefono}
        onChange={handleChange}
      />

      <div className='ml-auto'>
        <input
          className={clsx("mt-8 inline-block", styles.preventivo__bottone)}
          type='button'
          value='Avanti'
          onClick={handleNextStep}
        />
      </div>
    </>
  );
}
