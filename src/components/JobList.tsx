import React, { useEffect, useState } from "react";
import JobCard from "./JobCards";
import { Job } from "../types";

interface JobListProps {
  selectedFilters: string[];
  addFilter: (filter: string) => void;
}

const JobList: React.FC<JobListProps> = ({ selectedFilters, addFilter }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);

  // Filter jobs that contain ALL selected filters
  const filteredJobs = jobs.filter((job) => {
    const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];
    return selectedFilters.every((filter) => jobFilters.includes(filter));
  });

  return (
    <div className="max-w-[1100px] mx-auto pb-10 px-4 lg:px-0 grid gap-y-10">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} addFilter={addFilter} />
      ))}
    </div>
  );
};

export default JobList;
