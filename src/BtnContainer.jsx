const BtnContainer = ({ jobs }) => {
  return (
    <div className="btn-container">
      {jobs.map((item) => {
        return (
          <button key={item.id} type="button" className="job-btn">
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
