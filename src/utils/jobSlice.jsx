import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  jobs: [],
  loading: false,
  error: null,
  offset: 0,
  filters: {
    minExperience: "",
    companyName: "",
    location: "",
    remote: "",
    techStack: "",
    role: "",
    minPay: "",
  },
};

// Define the async thunk for fetching jobs
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { getState, dispatch }) => {
    const { offset } = getState().jobs;

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({ limit: 20, offset });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      // Fetch jobs data from API
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      return {
        data: Array.isArray(data.jdList) ? data.jdList : [], // Ensure data is an array
        offset: offset + 20,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Create the slice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    // Reducer to update filters
    filterJobs: (state, action) => {
      const { filterName, filterValue } = action.payload;
      state.filters[filterName] = filterValue;
    },
    // Reducer to update jobs
    addJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
  // Define how the slice reducer handles async actions
  extraReducers: (builder) => {
    builder
      // Case for pending state of fetchJobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Case for fulfilled state of fetchJobs
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.offset = action.payload.offset;
        // Update jobs array with fetched data
        state.jobs = action.payload.data;
      })
      // Case for rejected state of fetchJobs
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the actions
export const { filterJobs, addJobs } = jobsSlice.actions;

// Export the reducer
export default jobsSlice.reducer;
