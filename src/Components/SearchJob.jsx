import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../utils/jobSlice";
import JobCard from "./JobCard";
import Filters from "./Filters";
import { Typography } from "@mui/material";
import "./../App.css";

const SearchJob = () => {
  const dispatch = useDispatch(); // Redux hook for dispatching actions
  // State variables for filters
  const [experience, setExperience] = useState("");
  const [role, setRole] = useState([]);
  const [location, setLocation] = useState([]);
  const [pay, setPay] = useState("");
  const [remote, setRemote] = useState([]);
  // State variables for filtered data
  const [filtereddata, setfiltereddata] = useState([]);
  const [rolefilterdata, setrolefilterdata] = useState([]);
  const [locationfilter, setlocationfilter] = useState([]);
  const [minfilterdata, setminfilterdata] = useState([]);

  // Redux selector to get jobs data, loading state, and error state from Redux store
  const {
    jobs: allJobs,
    loading,
    error,
    filters,
  } = useSelector((state) => state.jobs);

  // Effect to fetch jobs data when component mounts or when loading state changes
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Effect to fetch more jobs when user scrolls to the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && !loading) {
        dispatch(fetchJobs());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, loading]);

  // Filter jobs based on experience
  useEffect(() => {
    setfiltereddata(allJobs);

    if (experience !== "") {
      const data = allJobs.filter(
        (item) => item.maxExp <= experience && item.maxExp !== null
      );
      setfiltereddata(data);
    } else if (experience === "" && allJobs.length > 0) {
      setfiltereddata(allJobs);
    }
  }, [experience, allJobs]);

  // Filter jobs based on role
  useEffect(() => {
    setrolefilterdata(filtereddata);

    if (role.length > 0 && filtereddata.length > 0) {
      const data = filtereddata.filter((item) => role.includes(item.jobRole));
      setrolefilterdata(data);
    } else if (role.length <= 0 && filtereddata.length > 0) {
      setrolefilterdata(filtereddata);
    }
  }, [role, filtereddata]);

  // Filter jobs based on location
  useEffect(() => {
    setlocationfilter(rolefilterdata);

    if (location.length > 0 && rolefilterdata.length > 0) {
      const data = rolefilterdata.filter((item) =>
        location.includes(item.location)
      );
      setlocationfilter(data);
    } else if (location.length <= 0 && rolefilterdata.length > 0) {
      setlocationfilter(rolefilterdata);
    }
  }, [location, rolefilterdata]);

  // Filter jobs based on minimum pay
  useEffect(() => {
    setminfilterdata(locationfilter);

    if (pay !== "") {
      const data = locationfilter.filter(
        (item) => item.minJdSalary >= Number(pay)
      );
      setminfilterdata(data);
    } else if (pay === "" && locationfilter.length > 0) {
      setminfilterdata(locationfilter);
    }
  }, [pay, locationfilter]);

  return (
    <>
      {/* Page heading */}
      <Typography className="pageheading">Search Jobs </Typography>
      {/* Filters component */}
      <Filters
        setExperience={setExperience}
        setRole={setRole}
        setLocation={setLocation}
        setPay={setPay}
        setRemote={setRemote}
        experience={experience}
        role={role}
        location={location}
        pay={pay}
        remote={remote}
      />
      <hr className="hr" /> {/* Job list */}
      <div className="job-list">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {/* Display filtered jobs */}
        {minfilterdata.length > 0 ? (
          minfilterdata.map((job) => <JobCard key={job.jdUid} job={job} />)
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </>
  );
};

export default SearchJob;
