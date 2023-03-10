import React, { useMemo, useReducer } from 'react';

const FormContext = React.createContext({
  first_name: '',
  last_name: '',
  email: '',
  had_covid: '',
  covid_sickness_date: '',
  antibodies_test: '',
  antibodies_test_date: '',
  antibodies_number: '',
  had_vaccine: '',
  vaccination_stage: '',
  i_am_waiting: '',
  non_formal_meetings: '',
  number_of_days_from_office: '',
  what_about_meetings_in_live: '',
  tell_us_your_opinion_about_us: '',
  dispatch: (data) => {},
});

const initialForm = {
  first_name: localStorage.getItem('first_name') || '',
  last_name: localStorage.getItem('last_name') || '',
  email: localStorage.getItem('email') || '',
  had_covid: localStorage.getItem('had_covid') || '',
  covid_sickness_date: localStorage.getItem('covid_sickness_date') || '',
  antibodies_test: localStorage.getItem('antibodies_test') || '',
  antibodies_test_date: localStorage.getItem('antibodies_test_date') || '',
  antibodies_number: localStorage.getItem('antibodies_number') || '',
  had_vaccine: localStorage.getItem('had_vaccine') || '',
  vaccination_stage: localStorage.getItem('vaccination_stage') || '',
  i_am_waiting: localStorage.getItem('i_am_waiting') || '',
  non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
  number_of_days_from_office:
    localStorage.getItem('number_of_days_from_office') || '',
  what_about_meetings_in_live:
    localStorage.getItem('what_about_meetings_in_live') || '',
  tell_us_your_opinion_about_us:
    localStorage.getItem('tell_us_your_opinion_about_us') || '',
};

const formReducer = (state, action) => {
  localStorage.setItem(action.type, action.value);
  if (action.type) {
    state[action.type] = action.value;
  }
  return { ...state };
};

export const FormDataProvider = (props) => {
  const [formValues, dispatch] = useReducer(formReducer, initialForm);

  const contextValue = useMemo(
    () => ({
      dispatch,
      formValues,
    }),
    [dispatch, formValues]
  );

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
