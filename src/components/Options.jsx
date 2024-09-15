import css from "./Options.module.css";

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={css.options}>
      <button className={css.optionBtn} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={css.optionBtn} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.optionBtn} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.optionBtn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
