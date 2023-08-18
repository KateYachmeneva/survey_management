import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getRunsRequestApi,getRunByIdRequestApi } from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

export interface IRunData {
  id: number
  run_number: number
  start_date: Date
  end_date: Date
  start_depth: number
  end_depth: number
  in_statistics: boolean
  memory: string
  bha: string
  sag: number
  section: number
  dd_contractor_name: number
}

interface IRunInitialState {
  currentRun: IRunData,
  getRunsRequest: boolean
  getRunsSuccess: boolean
  getRunsFailed: boolean
  allRuns: IRunData[]
  activeRun: IRunData[]
}

const initialState: IRunInitialState = {
  currentRun:{} as IRunData,
  getRunsRequest: false,
  getRunsSuccess: false,
  getRunsFailed: false,
  allRuns: [],
  activeRun: [],
}

// export const getAllRuns = createAsyncThunk(
//   "runs/allRuns",
//   async (_, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await getRunsRequestApi()
//       return response
//     } catch (error) {
//       dispatch(setError(CODES.SERVER_ERR))
//       return rejectWithValue(error)
//     }
//   }
// )


export const getRun = createAsyncThunk(
  "run/run_by_well",
  async (id:number, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRunByIdRequestApi(id)
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)
export const runSlice = createSlice({
  name: "runs",
  initialState,
  reducers: {
    selectActiveRun: (state, action) => {
      state.currentRun = action.payload
    }
  }, 
  extraReducers(builder) {
    builder.addCase(getRun.pending, (state) => {
      state.getRunsRequest = true
      state.getRunsSuccess = false
      state.getRunsFailed = false
    })
    builder.addCase(getRun.fulfilled, (state, action) => {
      state.getRunsRequest = false
      state.getRunsSuccess = true
      state.getRunsFailed = false
      state.allRuns = [...action.payload]
     })
    builder.addCase(getRun.rejected, (state) => {
      state.getRunsRequest = false
      state.getRunsSuccess = false
      state.getRunsFailed = true
    })
  },
})

export default runSlice.reducer
