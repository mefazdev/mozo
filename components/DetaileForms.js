import { useState } from "react";
import { Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Image from "next/image";
import tick from "../public/images/tick.png";
import { db } from "../firebase";
import { doc,updateDoc} from "@firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { successAlert } from "./successAlert";
import {
  closeDetailCommon,
  closeDetailWeb,
  closeDetailSoftware,
  closeDetailApp,
  closeDetailGame,
  closeDetailGraphic,
  closeDetailAnimation,
  closeDetailDigital,
  closeDetailBranding,
  closeDetailSeo,
  closeDetailSmm,
  closeDetailSms,
  closeDetailEmail,
  closeDetailInfluencer,
  closeDetailDomain,
  closeDetailHosting,
  closeDetailCloud,
  closeDetailAi,
  closeDetailRobotics,
  closeDetailBusiness,
  closeDetailResearch,
  closeDetailData,
  openSuccessAlert
} from "../redux/actions";



//  COMMON FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function CommonForm() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.commonFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  
 
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What is your requirement?",
          answer: answer1,
        },
        {
          question: 'What are the problems you are facing currently?',
          answer: answer2,
        },
        {
          question: 'What are your expectations?',
          answer: answer3,
        },
        {
          question: 'What is your budget?',
          answer: answer4,
        },
        {
          question: 'What are your biggest challenges?',
          answer: answer5,
        },
        {
          question: 'What are your goals?',
          answer: answer6,
        },
        {
          question: 'What makes you unique in the market?',
          answer: answer7,
        },
        {
          question: 'Who are your competitors?',
          answer: answer8,
        },
        {
          question: 'Who is your target audience?',
          answer: answer9,
        },
        {
          question: 'Who is your ideal customer?',
          answer: answer10,
        },
        {
          question:'Is your business an already existing one or new?',
          answer: answer11,
        },
      ],
    });
 dispatch(closeDetailCommon());
   dispatch(openSuccessAlert())
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What is your requirement?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>What are the problems you are facing currently?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>What are your expectations?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>What is your budget?</h6>
                </div>

                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>What are your biggest challenges?</h6>
                </div>

                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>What are your goals?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What makes you unique in the market?</h6>
                </div>

                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>Who are your competitors?</h6>
                </div>

                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>Who is your target audience?</h6>
                </div>

                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Who is your ideal customer?</h6>
                </div>

                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>

                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailCommon())}
           
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

//  WEB FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export function WebForm() {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.webFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");

  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Your business description?",
          answer: answer1,
        },
        {
          question: 'Do you currently have a website?',
          answer: answer2,
        },
        {
          question: 'Goals of developing a website?',
          answer: answer3,
        },
        {
          question: 'Your target audience?',
          answer: answer4,
        },
        {
          question: 'Features you wish to add on website?',
          answer: answer5,
        },
        {
          question: 'Your competitors?',
          answer: answer6,
        },
        {
          question: 'Scope of the project?',
          answer: answer7,
        },
        {
          question: 'Deadline?',
          answer: answer8,
        },
        {
          question: 'The problems you face without a website?',
          answer: answer9,
        },
        {
          question: 'Your expectations?',
          answer: answer10,
        },
        {
          question: 'Budget?',
          answer: answer11,
        },
        {
          question: 'When you want to start?',
          answer: answer12,
        },
        {
          question: 'Is your business an already existing one or new?',
          answer: answer13,
        },
      ],
    });
    dispatch(closeDetailWeb())
    dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={openModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Your business description?</h6>
                </div>

                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6> Do you currently have a website?</h6>
                </div>

                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Goals of developing a website?</h6>
                </div>

                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Your target audience?</h6>
                </div>

                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Features you wish to add on website?</h6>
                </div>

                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Your competitors?</h6>
                </div>

                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Scope of the project?</h6>
                </div>

                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>Deadline?</h6>
                </div>

                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>The problems you face without a website?</h6>
                </div>

                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Your expectations?</h6>
                </div>

                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Budget?</h6>
                </div>

                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>When you want to start?</h6>
                </div>

                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>

                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailWeb())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// SOFTWARE  FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const SoftwareForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.softwareFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
 
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What is the objective of your business?",
          answer: answer1,
        },
        {
          question: "When is your expected deadline?",
          answer: answer2,
        },
        {
          question: "What are the milestones you wish to achieve through this project?",
          answer: answer3,
        },
        {
          question: "Is there any time constraints?",
          answer: answer4,
        },
        {
          question: "According to you what is the criteria for success?",
          answer: answer5,
        },
        {
          question: "Share your insights regarding the project development",
          answer: answer6,
        },
        {
          question: "How this project will be run in your organization?",
          answer: answer7,
        },
        {
          question: "What problem is resolved with this software?",
          answer: answer8,
        },
        {
          question: "How this software will be different from others?",
          answer: answer9,
        },
        {
          question: "Who are the stake holders?",
          answer: answer10,
        },
        {
          question: "Features important to the target audience",
          answer: answer11,
        },
        {
          question: "Specifications of the software",
          answer: answer12,
        },
        {
          question: "Who is the primary decision maker?",
          answer: answer13,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer14,
        },
       
      ]
  });
  dispatch(closeDetailSoftware())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What is the objective of your business?</h6>
                </div>

                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>When is your expected deadline?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>
                 
                    What are the milestones you wish to achieve through this
                    project?
                  </h6>
                </div>  <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />

              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Is there any time constraints?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>According to you what is the criteria for success?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Share your insights regarding the project development</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>How this project will be run in your organization?</h6>
                </div>
                  <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />

              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What problem is resolved with this software?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6> How this software will be different from others?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Who are the stake holders?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Features important to the target audience</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>Specifications of the software</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>Who is the primary decision maker?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailSoftware())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// APP FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const AppForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.appFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Give a brief description on your company?",
          answer: answer1,
        },
        {
          question: "Who are the target users??",
          answer: answer2,
        },
        {
          question: "Need mobile app or web app?",
          answer: answer3,
        },
        {
          question: "Whether you need android app or mobile app?",
          answer: answer4,
        },
        {
          question: "Native application or a hybrid application?",
          answer: answer5,
        },
        {
          question: "What is the estimated budget?",
          answer: answer6,
        },
        {
          question: "Will it be a free app or chargeable one?",
          answer: answer7,
        },
        {
          question: "What will be the name of the app?",
          answer: answer8,
        },
        {
          question: "Content & Icon of the app?",
          answer: answer9,
        },
        {
          question: "Deadline of this project?",
          answer: answer10,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer11,
        },
      ]
  });
  dispatch(closeDetailApp())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Give a brief description on your company?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Who are the target users??</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6> Need mobile app or web app?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6> Whether you need android app or mobile app?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Native application or a hybrid application?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6> What is the estimated budget?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Will it be a free app or chargeable one?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6> What will be the name of the app?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6> Content & Icon of the app?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6> Deadline of this project?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailApp())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Game FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const GameForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.gameFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: " Please give a short summary on the game in your expectation?",
          answer: answer1,
        },
        {
          question: "Who are the target users?",
          answer: answer2,
        },
        {
          question: "Which is the best platform for them?",
          answer: answer3,
        },
        {
          question: "What is the real deadline?",
          answer: answer4,
        },
        {
          question: "What is your budget?",
          answer: answer5,
        },
        {
          question: "Who are the key stakeholders?",
          answer: answer6,
        },
        {
          question: "What are business objectives for this game?",
          answer: answer7,
        },
        {
          question: "Who will the game compete with?",
          answer: answer8,
        },
        {
          question: " What are the design constraints does this game app have to work within?",
          answer: answer9,
        },
        {
          question: "What are the underlying assumptions?",
          answer: answer10,
        },
        {
          question: "How is it going to be hosted?",
          answer: answer11,
        },
        {
          question: "What about the post launch?",
          answer: answer12,
        },
        {
          question: "What is the plan to learn and improve?",
          answer: answer13,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer14,
        },
      ]
  });
  dispatch(closeDetailGame())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>
                    Please give a short summary on the game in your expectation
                    ?
                  </h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Who are the target users?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Which is the best platform for them?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>What is the real deadline?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>What is your budget?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Who are the key stakeholders?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What are business objectives for this game?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>Who will the game compete with?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>
                    What are the design constraints does this game app have to
                    work within?
                  </h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>What are the underlying assumptions?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>

                  <h6>How is it going to be hosted?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>What about the post launch? </h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>What is the plan to learn and improve?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailGame())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// GRAPHIC  FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const GraphicForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.graphicFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");

  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Describe your business",
          answer: answer1,
        },
        {
          question: "Why do you want this design?",
          answer: answer2,
        },
        {
          question: "What is the goal of this designing?",
          answer: answer3,
        },
        {
          question: " Do you want to use existing brand colours or have any colour palette in mind?",
          answer: answer4,
        },
        {
          question: "What are the different names for your business?",
          answer: answer5,
        },
        {
          question: "Among them which you want to use in your design?",
          answer: answer6,
        },
        {
          question: "Does the company have a slogan or tagline?",
          answer: answer7,
        },
        {
          question: "What sets your business apart?",
          answer: answer8,
        },
        {
          question: "Who are your main competitors?",
          answer: answer9,
        },
        {
          question: "Your target demographics?",
          answer: answer10,
        },
        {
          question: "Select your display font? ",
          answer: answer11,
        },
        {
          question: "When do you need this ready for distribution?",
          answer: answer12,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer13,
        },
      ]
  });
  dispatch(closeDetailGraphic())
  dispatch(openSuccessAlert())
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Describe your business</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Why do you want this design?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>What is the goal of this designing?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>
                    Do you want to use existing brand colours or have any colour
                    palette in mind?
                  </h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>What are the different names for your business?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Among them which you want to use in your design?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Does the company have a slogan or tagline?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What sets your business apart?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>Who are your main competitors?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Your target demographics?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
               <h6>Select your display font? </h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>When do you need this ready for distribution? </h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailGraphic())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// ANIMATION FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const AnimationForm = function () { 
  const dispatch = useDispatch();
  const open = useSelector((state) => state.animationFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");

  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What you actually need?",
          answer: answer1,
        },
        {
          question: "What is your business brand identity?",
          answer: answer2,
        },
        {
          question: "Your budget?",
          answer: answer3,
        },
        {
          question: "When is your expected deadline?",
          answer: answer4,
        },
        {
          question: "What is the purpose of this project?",
          answer: answer5,
        },
        {
          question: "Who are the target audience?",
          answer: answer6,
        },
        {
          question: "What type of animation you prefer?",
          answer: answer7,
        },
        {
          question: "How long the animation should be (in case of video animation)?",
          answer: answer8,
        },
        {
          question: "Where this animation should be posted?",
          answer: answer9,
        },
        {
          question: " What are the main points you want the clients to remember after seeing your animated promotion?",
          answer: answer10,
        },
        {
          question: "  Do it need translation and subtitles (in case of video animation)?",
          answer: answer11,
        },
        {
          question: "What is the dimension you require?",
          answer: answer12,
        },
        {
          question: "Do you own a visual style or logo?",
          answer: answer13,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer14,
        },
      ]
  });
  dispatch(closeDetailAnimation())
  dispatch(openSuccessAlert())
  }

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What you actually need?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>What is your business brand identity?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Your budget?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>When is your expected deadline?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>What is the purpose of this project?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Who are the target audience?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What type of animation you prefer?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>
                    How long the animation should be (in case of video
                    animation)?
                  </h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>Where this animation should be posted?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>
                    What are the main points you want the clients to remember
                    after seeing your animated promotion?
                  </h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>
                    Do it need translation and subtitles (in case of video
                    animation)?
                  </h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>What is the dimension you require?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>Do you own a visual style or logo?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailAnimation())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// DIGITAL M FORM
export const DigitalForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.digitalFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const [answer15, setAnswer15] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          qustion: "Goal of your business?",
          answer: answer1,
        },
        {
          qustion: "What is success for you?",
          answer: answer2,
        },
        {
          qustion: " What aspects of digital marketing you want to focus on?",
          answer: answer3,
        },
        {
          qustion: "Target audience?",
          answer: answer4,
        },
        {
          qustion: " How is your company available on the internet till today?",
          answer: answer5,
        },
        {
          qustion: "Your business journey?",
          answer: answer6,
        },
        {
          qustion: "Your business vision?",
          answer: answer7,
        },
        {
          qustion: "What makes your business unique?",
          answer: answer8,
        },
        {
          qustion: "  Actions you expecting from the customers on seeing your content?",
          answer: answer9,
        },
        {
          qustion: "Your budget?",
          answer: answer10,
        },
        {
          qustion: "Expected deadline?",
          answer: answer11,
        },
        {
          qustion: "Have you done digital marketing before?",
          answer: answer12,
        },
        {
          qustion: "If yes what was the outcome?",
          answer: answer13,
        },
        {
          qustion: " Is there anything else we should know regarding your business?",
          answer: answer14,
        },
        {
          qustion: "Is your business an already existing one or new?",
          answer: answer15,
        },
      ]
  });
  dispatch(closeDetailDigital())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Goal of your business?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>What is success for you?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>
                    What aspects of digital marketing you want to focus on?
                  </h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Target audience?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>
                    How is your company available on the internet till today?
                  </h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Your business journey?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Your business vision?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What makes your business unique?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>
                    Actions you expecting from the customers on seeing your content?
                  </h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Your budget?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Expected deadline?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>Have you done digital marketing before?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>If yes what was the outcome?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>
                    Is there anything else we should know regarding your business?
                  </h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>15.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer15}
                  onChange={(e) => setAnswer15(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailDigital())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Branding  FORM
export const BrandingForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.brandingFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");

  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What are the brand guidelines?",
          answer: answer1,
        },
        {
          question: "Is there any colour preferences?",
          answer: answer2,
        },
        {
          question: " Do you have any hex codes in your current brand colours?",
          answer: answer3,
        },
        {
          question: "Have you created buying personas?",
          answer: answer4,
        },
        {
          question: "If yes how many do you have?",
          answer: answer5,
        },
        {
          question: "Do you have a completed site architecture?",
          answer: answer6,
        },
        {
          question: "Is your products specific for specific clients?",
          answer: answer7,
        },
        {
          question: " How you plan to market your brand once it is launched?",
          answer: answer8,
        },
        {
          qustion: "Share some images relate to your business",
          answer: answer9,
        },
        {
          question: "Do you have a tagline?",
          answer: answer10,
        },
        {
          question: "What is your elevator pitch?",
          answer: answer11,
        },
        {
          question: "What is your expected budget?",
          answer: answer12,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer13,
        }
      ]
  });
  dispatch(closeDetailBranding())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What are the brand guidelines?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Is there any colour preferences?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>
                   
                    Do you have any hex codes in your current brand colours?
                  </h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Have you created buying personas?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>If yes how many do you have?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Do you have a completed site architecture?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Is your products specific for specific clients?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>
                    How you plan to market your brand once it is launched?
                  </h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>Share some images relate to your business </h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Do you have a tagline?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>What is your elevator pitch?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>What is your expected budget?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailBranding())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// SEO FORM
export const SeoForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.seoFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const [answer15, setAnswer15] = useState("");
  const [answer16, setAnswer16] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Describe your business?",
          answer: answer1,
        },
        {
          question: "Have you done seo for your site before?",
          answer: answer2,
        },
        {
          question: "Which are the most important actions on the site?",
          answer: answer3,
        },
        {
          question: "Is there any actions on the site which have high priority?",
          answer: answer4,
        },
        {
          question: "Target audience?",
          answer: answer5,
        },
        {
          question: "Target sectors?",
          answer: answer6,
        },
        {
          question: "Why should your customer choose you?",
          answer: answer7,
        },
        {
          question: "What are the problems you solve for your customer?",
          answer: answer8,
        },
        {
          question: "Competitors and how do you differ from them?",
          answer: answer9,
        },
        {
          question: "Are there any domains you own?",
          answer: answer10,
        },
        {
          question: "Did you experience a traffic drop before?",
          answer: answer11,
        },
        {
          question: "Your preferred keywords?",
          answer: answer12,
        },
        {
          question: "Who makes the technical updates to your site?",
          answer: answer13,
        },
        {
          question: " Who does the content updates and how much content do they plan to create?",
          answer: answer14,
        },
        {
          question: "Is there anything you would like us to focus on?",
          answer: answer15,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer16,
        },
      ]
  });
  dispatch(closeDetailSeo())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Describe your business?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Have you done seo for your site before?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6> Which are the most important actions on the site?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>
                    Is there any actions on the site which have high priority?
                  </h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Target audience?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Target sectors?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Why should your customer choose you?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What are the problems you solve for your customer?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>Competitors and how do you differ from them? </h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Are there any domains you own?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Did you experience a traffic drop before?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>Your preferred keywords?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>Who makes the technical updates to your site?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>
                    Who does the content updates and how much content do they
                    plan to create?
                  </h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>15.</p>
                  <h6>Is there anything you would like us to focus on?</h6>
                </div>
                <input
                  value={answer15}
                  onChange={(e) => setAnswer15(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>16.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer16}
                  onChange={(e) => setAnswer16(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailSeo())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// SMM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  FORM
export const SmmForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.smmFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const [answer15, setAnswer15] = useState("");
  const [answer16, setAnswer16] = useState("");
  const [answer17, setAnswer17] = useState("");
  const [answer18, setAnswer18] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What is your purpose on social media?",
          answer: answer1,
        },
        {
          question: "Who is your target audience?",
          answer: answer2,
        },
        {
          question: "What social platform do they use?",
          answer: answer3,
        },
        {
          question: "Your brand?",
          answer: answer4,
        },
        {
          question: "What is your brand’s objective?",
          answer: answer5,
        },
        {
          question: "How does your brand engage your clients?",
          answer: answer6,
        },
        {
          question: "Describe your brand voice",
          answer: answer7,
        },
        {
          question: " What is the main message your brand is trying to communicate?",
          answer: answer8,
        },
        {
          question: "What makes your brand different from others?",
          answer: answer9,
        },
        {
          question: "What is your brand vision?",
          answer: answer10,
        },
        {
          question: "Your content type and range?",
          answer: answer11,
        },
        {
          question: "What is your current social media presence?",
          answer: answer12,
        },
        {
          question: "What are your expectations on this project?",
          answer: answer13,
        },
        {
          question: "What do you hope to achieve using social media?",
          answer: answer14,
        },
        {
          question: "How does social media fit in to your growth plan?",
          answer: answer15,
        },
        {
          question: "What do you expect from us as your supervisor?",
          answer: answer16,
        },
        {
          question: "Your expected budget?",
          answer: answer17,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer18,
        }
       
      ]
  });
  dispatch(closeDetailSmm())
  dispatch(openSuccessAlert())
  };
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What is your purpose on social media?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Who is your target audience?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6> What social platform do they use?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Your brand?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>What is your brand’s objective?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>How does your brand engage your clients?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Describe your brand voice</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>
                    What is the main message your brand is trying to
                    communicate?
                  </h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>What makes your brand different from others? </h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>What is your brand vision?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Your content type and range?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>What is your current social media presence?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>What are your expectations on this project?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>What do you hope to achieve using social media?</h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>15.</p>
                  <h6>How does social media fit in to your growth plan?</h6>
                </div>
                <input
                  value={answer15}
                  onChange={(e) => setAnswer15(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>16.</p>
                  <h6>What do you expect from us as your supervisor?</h6>
                </div>
                <input
                  value={answer16}
                  onChange={(e) => setAnswer16(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>17.</p>
                  <h6>Your expected budget?</h6>
                </div>
                <input
                  value={answer17}
                  onChange={(e) => setAnswer17(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>18.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer18}
                  onChange={(e) => setAnswer18(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailSmm())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// SMS FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const SmsForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.smsFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
 
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Your business sector?",
          answer: answer1,
        },
        {
          question: "SMS count",
          answer: answer2,
        },
        {
          question: "Number of characters per sms?",
          answer: answer3,
        },
        {
          question: "Your expectations",
          answer: answer4,
        },
        {
          question: "Your budget",
          answer: answer5,
        },
        {
          question: "Your goals",
          answer: answer6,
        },
        {
          question: "Who are the target audience?",
          answer: answer7,
        },
        {
          question: "Choose the route? (transactional/ promotional/ quick transactional)",
          answer: answer8,
        },
        {
          question: "The message you want to send?",
          answer: answer9,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer10,
        }
     
        
      ]
  });
  dispatch(closeDetailSms())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Your business sector?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>SMS count</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Number of characters per sms?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Your expectations</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Your budget</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Your goals</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Who are the target audience?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>
                    Choose the route? (transactional/ promotional/ quick
                    transactional)
                  </h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>The message you want to send? </h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailSms())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// EMAIL  FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const EmailForm = function () {
  const dispatch = useDispatch();
  const openApp = useSelector((state) => state.emailFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
 
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Who are the target audience?",
          answer: answer1,
        },
        {
          question: "What is the expected budget?",
          answer: answer2,
        },
        {
          question: "What content performed the best so far?",
          answer: answer3,
        },
        {
          question: "What tone resonates with the target?",
          answer: answer4,
        },
        {
          question: "Do you have documented brand and style guidelines?",
          answer: answer5,
        },
        {
          question: "What SEO tactics have you implemented so far?",
          answer: answer6,
        },
        {
          question: "What tool have you used before?",
          answer: answer7,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer8,
        }
        
    ]
  });
  dispatch(closeDetailEmail())
  dispatch(openSuccessAlert())
  };
  
  return (
    <div>
      <Modal
        open={openApp}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Who are the target audience?</h6>
                </div>
                 <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>What is the expected budget?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>What content performed the best so far?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>What tone resonates with the target?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Do you have documented brand and style guidelines?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>What SEO tactics have you implemented so far?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What tool have you used before?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailEmail())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

//INFLUENCER FORM  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const InfluencerForm = function () {
  const dispatch = useDispatch();
  const openApp = useSelector((state) => state.influencerFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What are the campaign goals?",
          answer: answer1,
        },
        {
          question: "Who is the audience?",
          answer: answer2,
        },
        {
          question: "What is your budget for an influencer campaign?",
          answer: answer3,
        },
        {
          question: " Are you willing to let influencer take over the creative aspect?",
          answer: answer4,
        },
        {
          question: "  What is the platform you want to target your audience?",
          answer: answer5,
        },
        {
          question: "Who are your competitors?",
          answer: answer6,
        },
        {
          question: "Describe your product or service",
          answer: answer7,
        },
        {
          question: "  Why did you choose influencer marketing as your marketing strategy?",
          answer: answer8,
        },
        {
          question: "What type of content you need to produce?",
          answer: answer9,
        },
        {
          question: "How much involvement you expect in the process?",
          answer: answer10,
        },
        {
          question: "Your expected budget?",
          answer: answer11,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer12,
        }
        
      ]
  });
  dispatch(closeDetailInfluencer())
  dispatch(openSuccessAlert())
  };
  
  return (
    <div>
      <Modal
        open={openApp}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What are the campaign goals?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Who is the audience?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>What is your budget for an influencer campaign?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>
                    Are you willing to let influencer take over the creative
                    aspect?
                  </h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>
                    What is the platform you want to target your audience?
                  </h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Who are your competitors?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Describe your product or service</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>
                    Why did you choose influencer marketing as your marketing
                    strategy?
                  </h6>
                </div> <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>What type of content you need to produce?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>How much involvement you expect in the process?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Your expected budget?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />

              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailInfluencer())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Domain FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const DomainForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.domainFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");


  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What are the host-specific benefits you need?",
          answer: answer1,
        },
        {
          question: " What is the number of domains an sub-domains you need?",
          answer: answer2,
        },
        {
          question: "Do you need space for large audio or video files?",
          answer: answer3,
        },
        {
          question: "Do you need email hosting or forwarding service?",
          answer: answer4,
        },
        {
          question: "Your desired extension (like .com, .in etc)?",
          answer: answer5,
        },
        {
          question: "Do you prefer to have multiple domain names?",
          answer: answer6,
        },
        {
          question: "Your expected budget?",
          answer: answer7,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer8,
        }
        
        
      ]
  });
  dispatch(closeDetailDomain())
  dispatch(openSuccessAlert())
  };
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What are the host-specific benefits you need?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>
                    What is the number of domains an sub-domains you need?
                  </h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Do you need space for large audio or video files?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Do you need email hosting or forwarding service?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Your desired extension (like .com, .in etc)?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Do you prefer to have multiple domain names?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Your expected budget?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailDomain())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send"  onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Hosting FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const HostingForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.hostingFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Who is your current website host?",
          answer: answer1,
        },
        {
          question: "Where your DNS is controlled?",
          answer: answer2,
        },
        {
          question: "Do you have all your logins?",
          answer: answer3,
        },
        {
          question: "Your domain name?",
          answer: answer4,
        },
        {
          question: "Your website?",
          answer: answer5,
        },
        {
          question: "Where your website is currently hosted?",
          answer: answer6,
        },
        {
          question: "Do you have or need an SSL certificate?",
          answer: answer7,
        },
        {
          question: "Will your site nee to announce that you use cookies?",
          answer: answer8,
        },
        {
          question: "Do you have a content management system you prefer?",
          answer: answer9,
        },
        {
          question: "   If not, shall we suggest you a proper content management system?",
          answer: answer10,
        },
        {
          question: "Do they contain larger text?",
          answer: answer11,
        },
        {
          question: "Any language conversion?",
          answer: answer12,
        },
        {
          question: "Expected budget?",
          answer: answer13,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer14,
        }
      ]
  });
  dispatch(closeDetailHosting())
  dispatch(openSuccessAlert())
  };
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Who is your current website host?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Where your DNS is controlled?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Do you have all your logins?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>Your domain name?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Your website?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Where your website is currently hosted?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>Do you have or need an SSL certificate?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>Will your site nee to announce that you use cookies?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>Do you have a content management system you prefer?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>
                    If not, shall we suggest you a proper content management
                    system?
                  </h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Do they contain larger text?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>Any language conversion?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>Expected budget?</h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailHosting())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// CLOUD FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const CloudForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cloudFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Your business description?",
          answer: answer1,
        },
        {
          question: "What does a cloud initiation mean to your business?",
          answer: answer2,
        },
        {
          question: "Where does your business want to be in next 3 years?",
          answer: answer3,
        },
        {
          question: "What business problem will be solved by the cloud?",
          answer: answer4,
        },
        {
          question: "What is the cloud size you require?",
          answer: answer5,
        },
        {
          question: "  Do you need flexibility in your cloud to add controls of your own?",
          answer: answer6,
        },
        {
          question: "What level of resiliency you need?",
          answer: answer7,
        },
        {
          question: " How will business operations be streamlined once you move to the cloud?",
          answer: answer8,
        },
        {
          question: "What are business objectives for moving to the cloud?",
          answer: answer9,
        },
        {
          question: "Your expected budget?",
          answer: answer10,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer11,
        }
        
        
      ]
  });
  dispatch(closeDetailCloud())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Your business description?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>What does a cloud initiation mean to your business?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Where does your business want to be in next 3 years?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>What business problem will be solved by the cloud?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>What is the cloud size you require?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>
                    Do you need flexibility in your cloud to add controls of
                    your own?
                  </h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What level of resiliency you need?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>
                    How will business operations be streamlined once you move to
                    the cloud?
                  </h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>What are business objectives for moving to the cloud?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Your expected budget?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailCloud())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// AI  FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const AiForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.aiFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: " What are the current and future organisational priorities?",
          answer: answer1,
        },
        {
          question: "Do you really need AI to solve this problem?",
          answer: answer2,
        },
        {
          question: "What problems will AI solve?",
          answer: answer3,
        },
        {
          question: " Is the right data available to achieve formulate a data strategy?",
          answer: answer4,
        },
        {
          question: "How will this data be generated?",
          answer: answer5,
        },
        {
          question: "Is it organisation owned data or generated by 3rd parties?",
          answer: answer6,
        },
        {
          question: "How to ensure the availability of bias-free data?",
          answer: answer7,
        },
        {
          question: "What data is already in the system of record?",
          answer: answer8,
        },
        {
          question: "How will be the changing workflows managed?",
          answer: answer9,
        },
        {
          question: "Will AI integrate with your current stack?",
          answer: answer10,
        },
        {
          question: "What is your expected budget?",
          answer: answer11,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer12,
        }
      ]
  });
  dispatch(closeDetailAi())
  dispatch(openSuccessAlert())
  };
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>
                    What are the current and future organisational priorities?
                  </h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Do you really need AI to solve this problem?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>What problems will AI solve?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>
                    Is the right data available to achieve formulate a data
                    strategy?
                  </h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>How will this data be generated?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>
                    Is it organisation owned data or generated by 3rd parties?
                  </h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>How to ensure the availability of bias-free data?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What data is already in the system of record?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>How will be the changing workflows managed?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>Will AI integrate with your current stack?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>What is your expected budget?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailAi())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

{
  /* ROBOTICS FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
}
export const RoboticsForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.roboticsFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "What situations bots need to be adapted/updated?",
          answer: answer1,
        },
        {
          question: "Your budget?",
          answer: answer2,
        },
        {
          question: "Expected deadline?",
          answer: answer3,
        },
        {
          question: " How this will change the company’s operations and resources?",
          answer: answer4,
        },
        {
          question: "Describe your business?",
          answer: answer5,
        },
        {
          question: "Who is your real competitor?",
          answer: answer6,
        },
        {
          question: "What is your business model?",
          answer: answer7,
        },
        {
          question: "What is your business model?",
          answer: answer8,
        },
        {
          question: "In which sector this will be used?",
          answer: answer9,
        },
        {
          question: " How this solves the problem and what problem is resolved?",
          answer: answer10,
        },
        {
          question: "  During the planning phase what points are to be considered on priority?",
          answer: answer11,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer12,
        }
      ]
  });
  dispatch(closeDetailRobotics())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>What situations bots need to be adapted/updated?</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Your budget?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Expected deadline?</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>
                    How this will change the company’s operations and resources?
                  </h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Describe your business?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>Who is your real competitor?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What is your business model?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>Share the history that lead to the RPA idea?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>In which sector this will be used?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>
                    How this solves the problem and what problem is resolved?
                  </h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>
                    During the planning phase what points are to be considered
                    on priority?
                  </h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailRobotics())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// BUSINESS FORM
export const BusinessForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.businessFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: " What is your number one priority for this business unit?",
          answer: answer1,
        },
        {
          question: "Who will be making final decision on this project?",
          answer: answer2,
        },
        {
          question: "Who is in charge of implementation?",
          answer: answer3,
        },
        {
          question: " What is unique about your business compared to your competitors?",
          answer: answer4,
        },
        {
          question: "   Is there anything that you and your employees are doing that may be getting in the way of achieving this result?",
          answer: answer5,
        },
        {
          question: " What do you believe needs to be strengthened in order to support achieving this?",
          answer: answer6,
        },
        {
          question: "What was the main reason to contact us?",
          answer: answer7,
        },
        {
          question: "What your ideal clients look like?",
          answer: answer8,
        },
        {
          question: "What is the value of a new client to you?",
          answer: answer9,
        },
        {
          question: "What is your expected budget for this consultancy?",
          answer: answer10,
        },
        {
          question: "Can you tell us about the history of this situation?",
          answer: answer11,
        },
        {
          question: "What you think about what you want in future?",
          answer: answer12,
        },
        {
          question: "   What are some of the trade-offs that you would consider?",
          answer: answer13,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer14,
        }
        
      ]
  });
  dispatch(closeDetailBusiness())
  dispatch(openSuccessAlert())
  };
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>
                    What is your number one priority for this business unit?
                  </h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Who will be making final decision on this project?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Who is in charge of implementation? </h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>
                    What is unique about your business compared to your
                    competitors?
                  </h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>
                    Is there anything that you and your employees are doing that
                    may be getting in the way of achieving this result?
                  </h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>
                    What do you believe needs to be strengthened in order to
                    support achieving this?
                  </h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What was the main reason to contact us?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What your ideal clients look like?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>What is the value of a new client to you? </h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>What is your expected budget for this consultancy?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Can you tell us about the history of this situation?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>12.</p>
                  <h6>What you think about what you want in future?</h6>
                </div>
                <input
                  value={answer12}
                  onChange={(e) => setAnswer12(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>13.</p>
                  <h6>
                    What are some of the trade-offs that you would consider?
                  </h6>
                </div>
                <input
                  value={answer13}
                  onChange={(e) => setAnswer13(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>14.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer14}
                  onChange={(e) => setAnswer14(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailBusiness())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// RESEARCH FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const ResearchForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.researchFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: " Have you used any kind of research methods in the past?",
          answer: answer1,
        },
        {
          question: " What is your estimated budget for your development project?",
          answer: answer2,
        },
        {
          question: " According to you which one is the better approach? Working quickly in developing solution or spending more time?",
          answer: answer3,
        },
        {
          question: " What was the challenging part you faced before in the development and what was that challenge?",
          answer: answer4,
        },
        {
          question: "Share your ideas with us.",
          answer: answer5,
        },
        {
          question: " What kind of information you have before starting the development process?",
          answer: answer6,
        },
        {
          question: "What is the time period for working on this?",
          answer: answer7,
        },
        {
          question: "What is the time period for working on this?",
          answer: answer8,
        },
        {
          question: "What is the time period for working on this?",
          answer: answer9,
        },
        {
          question: "What is the time period for working on this?",
          answer: answer10,
        },
        {
          question: "Is your business an already existing one or new?",
          answer: answer11,
        }
      ]
  });
  dispatch(closeDetailResearch())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>
                    Have you used any kind of research methods in the past?
                  </h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>
                    What is your estimated budget for your development project?
                  </h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>
                    According to you which one is the better approach? Working
                    quickly in developing solution or spending more time?
                  </h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>
                    What was the challenging part you faced before in the
                    development and what was that challenge?
                  </h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Share your ideas with us. </h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6>
                  What kind of information you have before starting the
                    development process?
                  </h6>
                </div>

                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>What is the time period for working on this?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6>What is the time period for working on this?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>9.</p>
                  <h6>What is the time period for working on this?</h6>
                </div>
                <input
                  value={answer9}
                  onChange={(e) => setAnswer9(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>10.</p>
                  <h6>What is the time period for working on this?</h6>
                </div>
                <input
                  value={answer10}
                  onChange={(e) => setAnswer10(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>11.</p>
                  <h6>Is your business an already existing one or new?</h6>
                </div>
                <input
                  value={answer11}
                  onChange={(e) => setAnswer11(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailResearch())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// DATA MIGRATION FORM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const DataForm = function () {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dataFormControl);
  const formId = useSelector((state) => state.formIdReducer);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
 
  const updateDetails = async () => {
    const docRef = doc(db, "lead", formId);
    const updateRef = await updateDoc(docRef, {
      questionaire: [
        {
          question: "Describe your business",
          answer: answer1,
        },
        {
          question: "Why do you need to migrate the data?",
          answer: answer2,
        },
        {
          question: "Your business goals",
          answer: answer3,
        },
        {
          question: "What is the data to be migrated?",
          answer: answer4,
        },
        {
          question: "Are there multiple databases to migrate?",
          answer: answer5,
        },
        {
          question: "Do you need migration templates?",
          answer: answer6,
        },
        {
          question: " What is the budget in your mind?",
          answer: answer7,
        },
        {
          question: "Is there any time constraint?",
          answer: answer8,
        }
        
        
      ]
  });
  dispatch(closeDetailData())
  dispatch(openSuccessAlert())
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__form">
          <div className="modal__form__content">
            <div className="modal__from__head">
              <div className="modal__icon">
                <Image src={tick} />
              </div>
              <h2>Your Request has been received.</h2>
              <h4>Will get back to you soon</h4>
              <h6>
                Meanwhile fill the form below <br /> to give us a better
                understanding of your business
              </h6>
            </div>

            <form>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>1.</p>
                  <h6>Describe your business</h6>
                </div>
                <input
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>2.</p>
                  <h6>Why do you need to migrate the data?</h6>
                </div>
                <input
                  value={answer2}
                  onChange={(e) => setAnswer2(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>3</p>
                  <h6>Your business goals</h6>
                </div>
                <input
                  value={answer3}
                  onChange={(e) => setAnswer3(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>4</p>
                  <h6>What is the data to be migrated?</h6>
                </div>
                <input
                  value={answer4}
                  onChange={(e) => setAnswer4(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>5</p>
                  <h6>Are there multiple databases to migrate?</h6>
                </div>
                <input
                  value={answer5}
                  onChange={(e) => setAnswer5(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>6.</p>
                  <h6> Do you need migration templates?</h6>
                </div>
                <input
                  value={answer6}
                  onChange={(e) => setAnswer6(e.target.value)}
                />
              </div>

              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>7.</p>
                  <h6>  What is the budget in your mind?</h6>
                </div>
                <input
                  value={answer7}
                  onChange={(e) => setAnswer7(e.target.value)}
                />
              </div>
              <div className="modal__form__row grid gap-2  md:gap-0 md:grid-cols-2">
                <div className="modal__form__row__left flex">
                  <p>8.</p>
                  <h6> Is there any time constraint?</h6>
                </div>
                <input
                  value={answer8}
                  onChange={(e) => setAnswer8(e.target.value)}
                />
              </div>
            </form>

            <div className="modal__from__buttons">
              <button
                onClick={() => dispatch(closeDetailData())}
                id="modal__from__close"
              >
                CLOSE
              </button>
              <button id="modal__from__send" onClick={updateDetails}>SEND</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
