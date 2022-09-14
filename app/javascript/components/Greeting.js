import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const REQUEST_GREETING = 'REQUEST_GREETING';
const LOAD_GREETING = 'LOAD_GREETING';
const GREETING_FAILED = 'GREETING_FAILED';

const getGreeting = () => (dispatch) => {
  dispatch({ type: REQUEST_GREETING });
  fetch('api/greetings').then((response) => response.json())
    .then((result) => dispatch({ type: LOAD_GREETING, payload: result }))
    .catch((error) => dispatch({ type: GREETING_FAILED, payload: error }));
};

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  const { greet } = useSelector((state) => state.GreetingsReducer.greeting, shallowEqual);
  return greet ? <p>{greet}</p>
    : <p>Loading</p>;
};

export default Greeting;