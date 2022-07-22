import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "components/ui/Button";
import { InputDate, InputNumber } from "components/ui/Form";

export default function BookingForm(props) {
  const [state, setState] = useState({
    data: {
      duration: 1,
      date: { startDate: new Date(), endDate: new Date(), key: "selection" },
    },
  });

  const updateData = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  const isFirstRender = useRef(true);
  useEffect(() => {
    const { data } = state;

    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (state.data.date !== data.date) {
        const startDate = new Date(data.date.startDate);
        const endDate = new Date(data.date.endDate);
        const countDuration = new Date(endDate - startDate).getDate();
        setState({
          data: {
            ...state.data,
            duration: countDuration,
          },
        });
      }

      if (state.data.duration !== data.duration) {
        const startDate = new Date(data.date.startDate);
        const endDate = new Date(
          startDate.setDate(startDate.getDate() + +data.duration - 1)
        );
        setState({
          ...state,
          data: {
            ...state.data,
            date: {
              ...state.data.date,
              endDate: endDate,
            },
          },
        });
      }
    }
  }, [state]);

  const navigate = useNavigate();
  const startBooking = () => {
    // const { data } = state;
    // props.startBooking({
    //   _id: props.itemDetails._id,
    //   duration: data.duration,
    //   date: {
    //     startDate: data.date.startDate,
    //     endDate: data.date.endDate,
    //   },
    // });
    navigate("/checkout");
  };

  const { data } = state;
  const { itemDetails } = props;

  return (
    <div className="card bordered">
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 fw-light">per {itemDetails.unit}</span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        name="duration"
        value={data.duration}
        onChange={updateData}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate name="date" onChange={updateData} value={data.date} />

      <h6 className="text-gray-500 fw-light" style={{ marginBottom: 40 }}>
        You will pay{" "}
        <span className="text-gray-900 fw-medium">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900 fw-medium">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn text-white"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
        style={{ padding: "10px 0", fontSize: 18 }}
      >
        Continue to Book
      </Button>
    </div>
  );
}

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func,
};
