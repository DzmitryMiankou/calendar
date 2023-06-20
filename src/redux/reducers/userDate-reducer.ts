const SETDATE = "SET_DATE";
//20236212300
const initialState: { date: [number] } = {
  date: [20236210500],
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
