import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import logoArrow from "../../../assets/logo/boatto-arrow.svg";
import { useRef, useState, type ChangeEvent } from "react";

import PreventivoStepOne from "./PreventivoStepOne";
import PreventivoStepTwo from "./PreventivoStepTwo";
import PreventivoStepThree from "./PreventivoStepThree";
import PreventivoStato from "./PreventivoStato";

import styles from "../../../assets/css/modules/preventivo.module.css";

export default function Preventivo() {
  const formRef = useRef<HTMLFormElement>(null);
  //steps of the form
  const [step, setStep] = useState(1);
  function handleNextStep() {
    if (!formRef.current) return;
    if (formRef.current.checkValidity()) {
      setStep((next) => next + 1);
    } else {
      formRef.current.reportValidity();
    }
  }
  function handlePreviouStep() {
    setStep((prev) => prev - 1);
  }

  // formdata
  const [formData, setFormData] = useState({
    stepOne: {
      nome: "",
      cognome: "",
      azienda: "",
      piva: "",
      email: "",
      telefono: "",
    },
    stepTwo: {
      indirizzoDiCarico: "",
      indirizzoDiScarico: "",
      tipologiaCarico: "",
      dataProntezzaMerce: "",
      larghezza: "",
      altezza: "",
      peso: "",
      numeroPezzi: "",
      infoAggiuntive: "",
    },
  });

  //memorizza i valori in input del form nello stato
  const handleChange =
    (step: "stepOne" | "stepTwo") =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [step]: {
          ...prev[step],
          [name]: value,
        },
      }));
    };

  //GSAP
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    if (!formRef.current) return;
    gsap.fromTo(
      formRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [step]);

  return (
    <section
      id='preventivo'
      className='mx-4 lg:mx-16 mt-32 lg:mt-16 flex lg:flex-row flex-col'
    >
      <PreventivoStato step={step} />

      <div className='ml-0 lg:ml-8 w-full'>
        <div className='flex justify-between items-start lg:justify-end mt-8 lg:mt-0'>
          <h2 className='font-alexandria-r '>Ottieni un preventivo</h2>
          <img
            className='w-10 sm:w-15 lg:w-20'
            src={logoArrow.src}
            alt='logo arrow'
          />
        </div>
        <form
          action=''
          encType='application/x-www-form-urlencoded'
          method='post'
          ref={formRef}
          className={clsx(
            styles.preventivo__form,
            "flex flex-col pb-16 w-full"
          )}
        >
          {step === 1 && (
            <PreventivoStepOne
              formDataStepOne={formData.stepOne}
              handleChange={handleChange("stepOne")}
              handleNextStep={handleNextStep}
            />
          )}
          {step === 2 && (
            <PreventivoStepTwo
              formDataStepTwo={formData.stepTwo}
              handleChange={handleChange("stepTwo")}
              handleNextStep={handleNextStep}
              handlePreviouStep={handlePreviouStep}
            />
          )}
          {step === 3 && (
            <PreventivoStepThree
              formDataStepOne={formData.stepOne}
              formDataStepTwo={formData.stepTwo}
              handlePreviouStep={handlePreviouStep}
            />
          )}
        </form>
      </div>
    </section>
  );
}
