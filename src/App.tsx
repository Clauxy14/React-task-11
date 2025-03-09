import { JobList } from "./job-listing";
import { jobs } from "./job";

function App() {
  return (
    <div className="App">
      <h1>Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
