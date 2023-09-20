import { useState } from "react";
import { useEffect } from "react";

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
      <section className="jobs-cent">
        <div className="loading"></div>
      </section>
    );
  }
  return <h2>Tabs Starter</h2>;
};
export default App;
