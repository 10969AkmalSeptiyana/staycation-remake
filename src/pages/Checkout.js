import { useState, useEffect } from "react";

import Header from "components/Header/Header";
import Stepper, {
  Controller,
  MainContent,
  Meta,
  Numbering,
} from "components/ui/Stepper";
import Button from "components/ui/Button";
import BookingInformation from "components/Checkout/BookingInformation";
import Completed from "components/Checkout/Completed";
import Payment from "components/Checkout/Payment";

import ItemDetails from "json/itemsDetail.json";

export default function Checkout() {
  const [state, setState] = useState({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  });

  const onChange = (event) => {
    setState({
      data: {
        ...state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Checkout | Staycation.";
  });

  const { data } = state;

  const checkout = {
    duration: 3,
  };

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          ItemDetails={ItemDetails}
          onChange={onChange}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          checkout={checkout}
          ItemDetails={ItemDetails}
          onChange={onChange}
        />
      ),
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />,
    },
  };

  return (
    <>
      <Header isCentered />
      <Stepper steps={steps}>
        {(prevStep, nextStep, CurrentStep, steps) => (
          <>
            <Numbering
              data={steps}
              current={CurrentStep}
              style={{ marginBottom: 50 }}
            />

            <Meta data={steps} current={CurrentStep} />

            <MainContent data={steps} current={CurrentStep} />

            {CurrentStep === "bookingInformation" && (
              <Controller>
                {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phone !== "" && (
                    <Button
                      className="btn mb-3 text-white"
                      type="button"
                      isBlock
                      isPrimary
                      hasShadow
                      onClick={nextStep}
                      style={{ padding: "10px 0", width: "100%" }}
                    >
                      Continue to Book
                    </Button>
                  )}
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isLight
                  href={`/properties/${checkout._id}`}
                  style={{ padding: "10px 0", width: "100%" }}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "payment" && (
              <Controller>
                {data.proofPayment !== "" &&
                  data.bankName !== "" &&
                  data.bankHolder !== "" && (
                    <Button
                      className="btn mb-3 text-white"
                      type="button"
                      isBlock
                      isPrimary
                      hasShadow
                      onClick={nextStep}
                      style={{ padding: "10px 0", width: "100%" }}
                    >
                      Continue to Book
                    </Button>
                  )}
                <Button
                  className="btn"
                  type="button"
                  isBlock
                  isLight
                  onClick={prevStep}
                  style={{ padding: "10px 0", width: "100%" }}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "completed" && (
              <Controller>
                <Button
                  className="btn text-white"
                  type="link"
                  isBlock
                  isPrimary
                  hasShadow
                  href="/"
                  style={{ padding: "10px 0", width: "100%" }}
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
}
