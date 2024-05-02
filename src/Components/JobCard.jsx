import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./../App.css";

const JobCard = ({ job }) => {
  return (
    <div style={{ width: "26rem", margin: "2rem", marginLeft: "3rem" }}>
      <Card className="job-card">
        <CardContent className="card-content">
          <Typography variant="h5" component="h2" className="heading">
            {job.jobRole}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            className="location subheading"
          >
            Location: {job.location}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            className="exp subheading"
          >
            Experience: {job.minExp}-{job.maxExp} years
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            className="salary subheading"
          >
            Estimated Salary: {job.salaryCurrencyCode}
            {job.maxJdSalary}
          </Typography>
          <Typography variant="body2" component="p">
            <span className="abtheading">About Company:</span>{" "}
            <span className="content">{job.jobDetailsFromCompany}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href={job.jdLink}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            variant="contained"
            className="btn"
            fullWidth
          >
            ⚡ Easy Apply
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default JobCard;
