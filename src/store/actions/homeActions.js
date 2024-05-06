import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { bannerList } from "../../utils/urls";

export const getBannerList = createAsyncThunk('banner', async () => {
  let response = await Axios.get(bannerList)
  return response.data
})
