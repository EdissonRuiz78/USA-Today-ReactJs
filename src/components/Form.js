import React from "react";
import PropTypes from "prop-types";
import useSelect from "../hooks/useSelect";
import styles from "./Form.module.css";

const Form = ({ updateCategory }) => {
  const OPTIONS = [
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "general", label: "General" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];
  const [category, Select] = useSelect("general", OPTIONS);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(category);
  };

  return (
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h5 className={styles.heading}>What can we help you find?</h5>
          <Select />
          <div className="input-field col s12">
            <button
              className={`${styles.btn_block} btn waves-effect waves-light`}
              type="submit"
              name="action"
            >
              Search
              <i className="material-icons right">arrow_forward</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  updateCategory: PropTypes.func.isRequired,
};

export default Form;
