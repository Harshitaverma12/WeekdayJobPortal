import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./../App.css";

// Filters component for filtering jobs
const Filters = ({
  setExperience,
  setRole,
  setLocation,
  setPay,
  experience,
  role,
  location,
  pay,
}) => {
  const dispatch = useDispatch(); // Redux hook for dispatching actions

  return (
    <div className="filters">
      {/* Experience filter */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Experience</InputLabel>
        <Select
          className="w-12"
          labelId="Experience"
          id="Experience"
          value={experience}
          label="Experience"
          onChange={(e) => setExperience(e.target.value)}
        >
          {/* Options for experience */}
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
          <MenuItem value="9">9</MenuItem>
        </Select>
      </FormControl>
      {/* Role filter */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Role</InputLabel>
        <Select
          className="w-12"
          labelId="Role"
          id="Role"
          value={role}
          multiple
          label="Role"
          onChange={(e) =>
            setRole(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
        >
          {/* Options for role */}
          <MenuItem value="frontend">Frontend</MenuItem>
          <MenuItem value="backend">Backend</MenuItem>
          <MenuItem value="android">Android</MenuItem>
          <MenuItem value="ios">IoS</MenuItem>
          <MenuItem value="tech lead">Tech Lead</MenuItem>
        </Select>
      </FormControl>
      {/* Location filter */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Location</InputLabel>
        <Select
          className="w-12"
          labelId="Location"
          id="Location"
          value={location}
          multiple
          label="Location"
          onChange={(e) =>
            setLocation(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
        >
          {/* Options for location */}
          <MenuItem value="bangalore">Bangalore</MenuItem>
          <MenuItem value="chennai">Chennai</MenuItem>
          <MenuItem value="delhi ncr">Delhi Ncr</MenuItem>
          <MenuItem value="mumbai">Mumbai</MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
        </Select>
      </FormControl>
      {/* Minimum pay filter */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Min Pay</InputLabel>
        <Select
          className="w-12"
          labelId="Pay"
          id="pay"
          value={pay}
          label="Min Pay"
          onChange={(e) => setPay(e.target.value)}
        >
          {/* Options for minimum pay */}
          <MenuItem value="30">USD30</MenuItem>
          <MenuItem value="40">USD40</MenuItem>
          <MenuItem value="60">USD60</MenuItem>
          <MenuItem value="70">USD70</MenuItem>
          <MenuItem value="80">USD80</MenuItem>
          <MenuItem value="90">USD90</MenuItem>
          <MenuItem value="100">USD100</MenuItem>
          <MenuItem value="200">USD200</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
