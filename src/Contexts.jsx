import { createContext, useContext, useReducer, useEffect } from "react";
import { fakeFetch } from "./Database";
import reducer from "./Reducers";
const context = createContext();
const initialState = {
  originalData: [],
  temporaryData: [],
  loading: false,
};

const Contexts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchingData = async () => {
    dispatch({ type: "SET_LOADING" });
    const { data } = await fakeFetch("https://example.com/api/videos");
    dispatch({ type: "SET_ORIGINAL_DATA", payload: data.mails });
    dispatch({ type: "DIS_SET_LOADING" });
  };
  // function for unchecked box
  const onCheckedBox = (event) => {
    let filteringOnCheck;
    if (event.target.checked) {
      filteringOnCheck = state.originalData.filter((cur) => {
        return cur.unread;
      });
      dispatch({
        type: "SET_CHECK_UNCHECK_FOR_UNREAD",
        payload: filteringOnCheck,
      });
    } else {
      dispatch({
        type: "SET_CHECK_UNCHECK_FOR_UNREAD",
        payload: state.originalData,
      });
    }
  };
  // function for star mail box
  const onStarMail = (event) => {
    let filteringOnCheck;
    if (event.target.checked) {
      filteringOnCheck = state.originalData.filter((cur) => {
        return cur.isStarred;
      });
      dispatch({
        type: "SET_CHECK_UNCHECK_FOR_UNREAD",
        payload: filteringOnCheck,
      });
    } else {
      dispatch({
        type: "SET_CHECK_UNCHECK_FOR_UNREAD",
        payload: state.originalData,
      });
    }
  };

  // handle delete the mail
  const handleDelte = (clickId) => {
    console.log(clickId);
    let filteringOnDelete;
    filteringOnDelete = state.temporaryData.filter((cur) => {
      return cur.mId != clickId;
    });

    dispatch({
      type: "SET_DELETE",
      payload: filteringOnDelete,
    });
  };
  //function for mark as read
  // const markAsRead = (markId) => {
  //   console.log(markId);
  //   let filteringOnDelete = state.temporaryData.filter((cur) => {
  //     return cur.mId == markId;
  //   });

  //   dispatch({
  //     type: "CHANGEING",
  //     payload: [
  //       ...state.temporaryData,
  //       { ...filteringOnDelete, unread: !filteringOnDelete.unread },
  //     ],
  //   });
  // };
  const markAsRead = (markId) => {
    console.log(markId);

    // Find the object to be updated
    let objectToUpdate = state.temporaryData.find((cur) => {
      return cur.mId === markId;
    });

    if (objectToUpdate) {
      // Create a copy of the object with the unread property toggled
      let updatedObject = {
        ...objectToUpdate,
        unread: false,
      };

      // Create a new array with the updated object
      let updatedTemporaryData = state.temporaryData.map((cur) => {
        if (cur.mId === markId) {
          return updatedObject;
        } else {
          return cur;
        }
      });

      // Dispatch an action to update the state with the new array
      dispatch({
        type: "CHANGEING",
        payload: updatedTemporaryData,
      });
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <context.Provider
      value={{ ...state, onCheckedBox, onStarMail, handleDelte, markAsRead }}
    >
      {children}
    </context.Provider>
  );
};
// Global Hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
