import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAxesApi,  getRawAxesApi} from "../../api";
import { setError } from "./appSlice";
import { CODES } from "../../utils/errors";

export interface IAxesData {
    id: number;
    depth: number;
    CX: number;
    CY: number;
    CZ: number;
    BX: number;
    BY: number;
    BZ: number;
    Btotal_corr: number;
    DIP_corr: number;
    in_statistics: boolean;
    comment: null | string;
    run: number;
    CX_raw?: number,
    CY_raw?: number,
    CZ_raw?: number,
    BX_raw?: number,
    BY_raw?: number,
    BZ_raw?: number,
    run_id?: number,
    telesystem_id?: number,
}

export interface IRawAxesData {
    id: number;
    depth: number;
    CX_raw: number,
    CY_raw: number,
    CZ_raw: number,
    BX_raw: number,
    BY_raw: number,
    BZ_raw: number,
    run_id: number,
    telesystem_id: number,
}

interface IAxesInitialState {
    axes: IAxesData;
    rawaxes: IRawAxesData;
    getAxesRequest: boolean;
    getAxesSuccess: boolean;
    getAxesFailed: boolean;
    getRawAxesRequest:boolean,
    getRawAxesSuccess:boolean,
    getRawAxesFailed: boolean,
  }

const initialState: IAxesInitialState = {
  axes: {} as IAxesData,
  rawaxes:  {} as IRawAxesData,
  getAxesRequest: false,
  getAxesSuccess: false,
  getAxesFailed: false,
  getRawAxesRequest: false,
  getRawAxesSuccess: false,
  getRawAxesFailed: false,
 };

export const getAxes = createAsyncThunk(
  "axes/getAxes",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const response = await getAxesApi(id);
      return response;
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR));
      return rejectWithValue(error);
    }
  },
);

export const getRawAxes = createAsyncThunk(
  "axes/getRawAxes",
  async (id:number, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRawAxesApi(id);
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
  },
  extraReducers(builder) {
    builder.addCase(getAxes.pending, (state) => {
      state.getAxesRequest = true;
      state.getAxesSuccess = false;
      state.getAxesFailed = false;
    });
    builder.addCase(getAxes.fulfilled, (state, action) => {
      state.getAxesRequest = false;
      state.getAxesSuccess = true;
      state.getAxesFailed = false;
      state.axes = action.payload;
    });
    builder.addCase(getAxes.rejected, (state) => {
      state.getAxesRequest = false;
      state.getAxesSuccess = false;
      state.getAxesFailed = true;
    });
    builder.addCase(getRawAxes.pending, (state) => {
      state.getRawAxesRequest= true;
      state.getRawAxesRequest = false;
      state.getRawAxesRequest = false;
    });
    builder.addCase(getRawAxes.fulfilled, (state, action) => {
      state.getRawAxesRequest = false;
      state.getRawAxesRequest = true;
      state.getRawAxesRequest= false;
      state.rawaxes = action.payload;
    });
    builder.addCase(getRawAxes.rejected, (state) => {
      state.getRawAxesRequest = false;
      state.getRawAxesSuccess = false;
      state.getRawAxesFailed = true;
    });
   
  },
});

export default runSlice.reducer;

