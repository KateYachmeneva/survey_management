import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCoeffByIdRequestApi, getRunByIdRequestApi } from "../../api";
import { setError } from "./appSlice";
import { CODES } from "../../utils/errors";

export interface IRunData {
  id: number;
  run_number: number;
  start_date: Date;
  end_date: Date;
  start_depth: number;
  end_depth: number;
  in_statistics: boolean;
  memory: string;
  bha: string;
  sag: number;
  section: number;
  dd_contractor_name: number;
}

export interface ICoeffData {
  device_title: string;
  CX: string;
  CY: string;
  CZ: string;
  BX: string;
  BY: string;
  BZ: string;
}

interface IRunInitialState {
  currentRun: IRunData;
  getRunsRequest: boolean;
  getRunsSuccess: boolean;
  getRunsFailed: boolean;
  allRuns: IRunData[];
  activeRun: IRunData[];
  coefficients: ICoeffData;
}

const initialState: IRunInitialState = {
  currentRun: {} as IRunData,
  getRunsRequest: false,
  getRunsSuccess: false,
  getRunsFailed: false,
  allRuns: [],
  activeRun: [],
  coefficients: {} as ICoeffData,
};

export const getCoefficients = createAsyncThunk(
  "run/coefficients",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const response = await getCoeffByIdRequestApi(id);
      return response;
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR));
      return rejectWithValue(error);
    }
  },
);

export const getRun = createAsyncThunk(
  "run/run_by_well",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRunByIdRequestApi(id);
      return response;
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR));
      return rejectWithValue(error);
    }
  },
);
export const runSlice = createSlice({
  name: "runs",
  initialState,
  reducers: {
    selectActiveRun: (state, action) => {
      state.currentRun = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getRun.pending, (state) => {
      state.getRunsRequest = true;
      state.getRunsSuccess = false;
      state.getRunsFailed = false;
    });
    builder.addCase(getRun.fulfilled, (state, action) => {
      state.getRunsRequest = false;
      state.getRunsSuccess = true;
      state.getRunsFailed = false;
      state.allRuns = [...action.payload];
    });
    builder.addCase(getRun.rejected, (state) => {
      state.getRunsRequest = false;
      state.getRunsSuccess = false;
      state.getRunsFailed = true;
    });
    builder.addCase(getCoefficients.pending, (state) => {
      state.getRunsRequest = true;
      state.getRunsSuccess = false;
      state.getRunsFailed = false;
    });
    builder.addCase(getCoefficients.fulfilled, (state, action) => {
      state.getRunsRequest = false;
      state.getRunsSuccess = true;
      state.getRunsFailed = false;
      state.coefficients = action.payload;
    });
    builder.addCase(getCoefficients.rejected, (state) => {
      state.getRunsRequest = false;
      state.getRunsSuccess = false;
      state.getRunsFailed = true;
    });
  },
});

export default runSlice.reducer;
export const { selectActiveRun } = runSlice.actions;
