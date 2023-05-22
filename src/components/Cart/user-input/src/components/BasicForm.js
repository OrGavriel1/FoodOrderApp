import useInput from "../hook/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameInputError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLname,
    hasError: lNameInputError,
    isValid: lNameIsValid,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLname,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let fromValid = false;

  if (nameIsValid && lNameIsValid && emailIsValid) {
    fromValid = true;
  }

  const submitChangeHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !lNameIsValid || !emailIsValid) {
      return;
    }

    resetName();
    resetLname();
    resetEmail();
  };

  const classesName = nameInputError ? "form-control invalid" : "form-control";
  const classesLname = lNameInputError
    ? "form-control invalid"
    : "form-control";
  const classesEmail = emailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitChangeHandler}>
      <div className="control-group">
        <div className={classesName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={classesLname}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={enteredLname}
          />
          {lNameInputError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={classesEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputError && (
          <p className="error-text">Please insert right email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!fromValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
