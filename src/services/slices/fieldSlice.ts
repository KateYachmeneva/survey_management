import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getFieldRequestApi } from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

export interface IFieldData {
  id: number,
  field:string
}

interface IFieldSlice {
    getFieldsRequest: boolean
    getFieldsSuccess: boolean
    getFieldsFailed: boolean
    allFields: IFieldData[]
}

const initialState: IFieldSlice = {
    getFieldsRequest: false,
    getFieldsSuccess: false,
    getFieldsFailed: false,
    allFields:[],
}

export const  getAllFields = createAsyncThunk(
  "fields/getFields",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getFieldRequestApi()
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)
export const fieldSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllFields.pending, (state) => {
      state.getFieldsRequest = true
      state.getFieldsSuccess = false
      state.getFieldsFailed = false
    })
    builder.addCase(getAllFields.fulfilled, (state, action) => {
        state.getFieldsRequest = false
        state.getFieldsSuccess = true
        state.getFieldsFailed = false
      state.allFields = [...action.payload]
       })
    builder.addCase(getAllFields.rejected, (state) => {
      state.getFieldsRequest = false
      state.getFieldsSuccess= false
      state.getFieldsFailed  = true
    })
  },
})

export default fieldSlice.reducer