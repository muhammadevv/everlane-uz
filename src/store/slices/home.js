import { createSlice } from "@reduxjs/toolkit"
import { buildBuilder } from "../../utils/helpers"
import { getBannerList } from "../actions/homeActions"

const initialState = {
  banner: {
    list: [],
    loading: false
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    buildBuilder(builder, getBannerList, 'banner')
  }
})

export default homeSlice.reducer