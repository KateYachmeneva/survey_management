import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCoeffByIdRequestApi, getRunByIdRequestApi, getAllCoefficients } from "../../api";
import { setError } from "./appSlice";
import { CODES } from "../../utils/errors";

export interface IRunData {
  id: number;
  section_name:string;
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
  status: string;
  device_title: string;
  CX: string;
  CY: string;
  CZ: string;
  BX: string;
  BY: string;
  BZ: string;
}
export interface TelesystemData {
  id: number;
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
  allTelesystems:TelesystemData[];
}

const initialState: IRunInitialState = {
  currentRun: {} as IRunData,
  getRunsRequest: false,
  getRunsSuccess: false,
  getRunsFailed: false,
  allRuns: [],
  activeRun: [],
  coefficients: {} as ICoeffData,
  allTelesystems:[],
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

export const getAllTelesystemsCoeff = createAsyncThunk(
  "run/AllTelesystemCoefficients",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getAllCoefficients ();
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
    getAllTelesystem: (state, action) => {
      state.allTelesystems = action.payload;
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
    builder.addCase(getAllTelesystemsCoeff.pending, (state) => {
      state.getRunsRequest = true;
      state.getRunsSuccess = false;
      state.getRunsFailed = false;
    });
    builder.addCase(getAllTelesystemsCoeff.fulfilled, (state, action) => {
      state.getRunsRequest = false;
      state.getRunsSuccess = true;
      state.getRunsFailed = false;
      state.allTelesystems = [...action.payload] ;
    });
    builder.addCase(getAllTelesystemsCoeff.rejected, (state) => {
      state.getRunsRequest = false;
      state.getRunsSuccess = false;
      state.getRunsFailed = true;
    });
  },
});

export default runSlice.reducer;
export const { selectActiveRun } = runSlice.actions;
