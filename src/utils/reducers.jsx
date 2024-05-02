// Define the initial state for jobsReducer
const initialState = {
  jobs: [], // Array to store fetched jobs
  loading: false, // Loading state indicator
  error: null, // Error state
  offset: 0, // Offset for pagination
  filters: {
    minExperience: "", // Minimum experience filter
    companyName: "", // Company name filter
    location: "", // Location filter
    remote: "", // Remote work filter
    techStack: "", // Tech stack filter
    role: "", // Role filter
    minPay: "", // Minimum pay filter
  },
};

// Define the jobsReducer function
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for fetching jobs request
    case "FETCH_JOBS_REQUEST":
      return { ...state, loading: true, error: null };
    // Case for fetching jobs success
    case "FETCH_JOBS_SUCCESS":
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, ...action.payload], // Append fetched jobs to existing ones
        offset: action.offset, // Update offset for pagination
      };
    // Case for fetching jobs failure
    case "FETCH_JOBS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    // Default case: return current state
    default:
      return state;
  }
};

// Export jobsReducer function
export default jobsReducer;
