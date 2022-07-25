const initialState = {
  value: [
    { taskId: 0, taskDesc: "Completing the course", isDone: false },
    { taskId: 1, taskDesc: "Attending the workshop", isDone: false },
    { taskId: 2, taskDesc: "Finishing the checkpoint", isDone: false },
    { taskId: 3, taskDesc: "Passing the one to one meeting", isDone: false },
  ],
  filtred: [],
};
initialState.filtred = initialState.value;

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASKADD":
      return {
        ...state,
        value: [...state.value, action.payload],
        filtred: [...state.filtred, action.payload],
      };
    case "TASKDONE":
      return {
        ...state,
        value: state.value.map((el, i) =>
          el.taskId === action.payload ? { ...el, isDone: true } : el
        ),
        filtred: state.filtred.map((el, i) =>
          el.taskId === action.payload ? { ...el, isDone: true } : el
        ),
      };
    case "TASKEDIT":
      const { idt, nDesc } = action.payload;
      return {
        ...state,
        value: state.value.map((el, i) =>
          el.taskId === idt ? { ...el, taskDesc: nDesc } : el
        ),
        filtred: state.filtred.map((el, i) =>
          el.taskId === idt ? { ...el, taskDesc: nDesc } : el
        ),
      };
    case "TASKFILTER":
      return {
        ...state,
        value: [...state.value],
        filtred: state.value.filter((el) =>
          action.payload === "Done"
            ? el.isDone === true
            : action.payload === "Todo"
            ? el.isDone === false
            : el
        ),
      };
    case "TASKDELETE":
      return {
        ...state,
        value: state.value.filter((el) => el.taskId !== action.payload),
        filtred: state.filtred.filter((el) => el.taskId !== action.payload),
      };
    default:
      return initialState;
  }
};

export default taskReducer;
