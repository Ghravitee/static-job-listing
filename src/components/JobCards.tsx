import React from "react";
import { Job } from "../types";

interface JobCardProps {
  job: Job;
  addFilter: (filter: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, addFilter }) => {
  return (
    <div
      className={`py-8 px-4 rounded-sm myBox relative ${
        job.featured ? "border-l-4 border-Desaturated-Dark-Cyan" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div className="flex gap-6 items-center mr-auto">
          <img
            src={job.logo}
            alt={job.company}
            width={50}
            height={50}
            className="w-12 h-12 lg:w-20 lg:h-20 absolute left-3 -top-5 lg:static"
          />
          <div className="flex flex-col items-start space-x-4">
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex items-center space-x-2">
                <h3 className="font-bold mr-4 text-Desaturated-Dark-Cyan">
                  {job.company}
                </h3>
                {job.new && (
                  <div className="flex items-center justify-center bg-Desaturated-Dark-Cyan py-[3px] px-2 rounded-3xl">
                    <h2 className="uppercase text-white text-sm leading-[100%] mt-1 font-bold">
                      New!
                    </h2>
                  </div>
                )}
                {job.featured && (
                  <div className="flex items-center justify-center bg-Very-Dark-Grayish-Cyan py-[3px] px-2 rounded-3xl">
                    <h2 className="uppercase text-white leading-[100%] text-sm mt-1 font-bold">
                      Featured
                    </h2>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-[22px] text-Very-Dark-Grayish-Cyan font-bold tracking-tight mb-2">
                {job.position}
              </p>
              <p className="text-sm text-Dark-Grayish-Cyan font-medium tracking-wider">
                {job.postedAt} • {job.contract} • {job.location}
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t border-Very-Dark-Grayish-Cyan w-full mt-4 mb-3 lg:hidden" />
        <div className="mt-3 flex lg:flex-nowrap flex-wrap gap-4">
          {[job.role, job.level, ...job.languages, ...job.tools].map(
            (filter) => (
              <span
                key={filter}
                onClick={() => addFilter(filter)}
                className="cursor-pointer bg-Light-Grayish-Cyan-Filter-Tablets text-Desaturated-Dark-Cyan px-2 py-1 rounded-md text-base font-bold hover:bg-Desaturated-Dark-Cyan hover:text-white transition"
              >
                {filter}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
