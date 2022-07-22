import PropTypes from "prop-types";
import "./index.scss";

export default function Number(props) {
  let { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  const onChange = (e) => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    value =
      min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value =
      max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <span className="input-group-text minus" onClick={minus}>
          -
        </span>
        <input
          className="form-control"
          aria-label="Number"
          min={min}
          max={max}
          readOnly
          name={name}
          placeholder={placeholder ? placeholder : "0"}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && value > 1 ? "s" : ""
          }`}
          onChange={onChange}
        />
        <span className="input-group-text plus" onClick={plus}>
          +
        </span>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  isSuffixPlural: PropTypes.bool,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};
