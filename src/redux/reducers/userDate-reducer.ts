import { deleteElemInArr } from "../../components/hook/getDate";
const SETDATE = "SET_DATE";
const SETDQVEST = "SET_QVEST";
const SETDELETE = "SET_DELETE";

interface TypeAction<T> {
  type: T;
  date: number;
  bool: Bool;
}

type Action =
  | TypeAction<typeof SETDATE>
  | TypeAction<typeof SETDQVEST>
  | TypeAction<typeof SETDELETE>;

type Bool = {
  qvest2: boolean;
  date: number;
};

const initialState: {
  date: Array<number>;
  qvest: Bool;
} = {
  date: [
    20236200400, 20236211100, 20236220300, 20236230300, 20236240300,
    20236260300, 20236280300,
  ],
  qvest: { qvest2: false, date: 0 },
};

const userDateReducer = (state = initialState, action: Action) => {
  let copy;
  switch (action.type) {
    case SETDATE: {
      return {
        ...state,
        date: [...state.date, action.date],
      };
    }
    case SETDQVEST: {
      return {
        ...state,
        qvest: action.bool,
      };
    }
    case SETDELETE: {
      copy = state;
      const myArray = copy.date;
      const newArray = deleteElemInArr(myArray, action.date);
      return { ...state, date: [...newArray] };
    }
    default:
      return state;
  }
};

export const userDateListAction = (date: number) => ({ type: SETDATE, date });
export const userQvestAction = (bool: Bool) => ({
  type: SETDQVEST,
  bool,
});
export const userDeleteAction = (date: number) => ({ type: SETDELETE, date });
export default userDateReducer;
