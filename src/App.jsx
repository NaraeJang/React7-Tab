import { useState } from "react";
import { useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // Current Items

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const newJobs = await resp.json();

      setJobs(newJobs);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* {button container} */}
      <BtnContainer jobs={jobs} />
      {/* {job info} */}
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
