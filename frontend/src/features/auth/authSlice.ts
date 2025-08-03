import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '@/api/axios'


export const loginUser = createAsyncThunk(
  'auth/loginUser', // 🔸 Action name used internally
  async (
    credentials: { email: string; password: string },
    thunkAPI   // 🔹 Toolkit tools to handle error
  ) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      localStorage.setItem("token", res.data.token);
      // console.log("user data type: "+typeof(JSON.stringify(res.data.user)));
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user info if needed
      return res.data;
    }
    catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.error || "Login Failed")
    }
  }
)

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (data: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post('auth/signup', data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user info if needed
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.error || "Signup Failed");
    }
  }
)

interface AuthState {
  token: string | null
  user: { id: number; name: string; } | null
  loading: boolean
  message: string | null
  error: string | null
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')!) || null,
  loading: false,
  message: null,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    }
  },
  extraReducers: (builder) => {
    builder
      //login user changes...
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      //signup user changes...
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;