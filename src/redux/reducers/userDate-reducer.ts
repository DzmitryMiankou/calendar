const SETDATE = "SET_DATE";

const initialState: { date: [string] } = {
  date: ["23.06.2023"],
};

const userDateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SETDATE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export const userDateListAction = (list: {
  total_rows: string;
  results: {
    total_rows: string;
    results: Array<Object>;
  }[];
}) => ({ type: SETDATE, list });

export default userDateReducer;
