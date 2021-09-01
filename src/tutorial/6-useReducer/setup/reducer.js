const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD_ITEM") {
    const people = [...state.people, action.payload];
    return {
      ...state,
      people: people,
      isShowModal: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isShowModal: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const people = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return {
      ...state,
      people,
      isShowModal: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isShowModal: false,
    };
  }
  throw new Error("no matching action type");
};

export default reducer;
