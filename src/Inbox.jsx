import { useGlobalHook } from "./Contexts";
import Filters from "./Filters";
const Inbox = () => {
  const { originalData, temporaryData, loading, handleDelte, markAsRead } =
    useGlobalHook();
  console.log(originalData);
  return (
    <div>
      <Filters />
      {loading && (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30vh",
          }}
        >
          Loading..
        </h1>
      )}
      {!loading && (
        <>
          <h1>Inbox</h1>
          {temporaryData.map((curElem, inds) => {
            return (
              <div
                key={curElem.subject}
                style={{
                  border: "2px solid gray",
                  padding: "0.5rem 1rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2>Subject: {curElem.subject}</h2>
                  <button style={{ border: "none", background: "inherit" }}>
                    Star
                  </button>
                </div>
                <p> {curElem.content}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    style={{ border: "none", color: "red" }}
                    onClick={() => handleDelte(curElem.mId)}
                  >
                    Delete
                  </button>
                  <button
                    style={{ border: "none", color: "orange" }}
                    onClick={() => markAsRead(curElem.mId)}
                  >
                    {curElem.unread ? " Mark As Read" : "already Read"}
                  </button>
                  <button style={{ border: "none", color: "green" }}>
                    Report Spam
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Inbox;
