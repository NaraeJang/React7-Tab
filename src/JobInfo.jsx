import JobDuties from "./JobDuties";

const JobInfo = ({ jobs }) => {
  const { id, order, title, dates, duties, company } = jobs[0];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <JobDuties duties={duties} />
    </article>
  );
};
export default JobInfo;
