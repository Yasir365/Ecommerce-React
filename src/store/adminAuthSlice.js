import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../services/api-service';

export const verifyAdminToken = createAsyncThunk('auth/verifyAdminToken', async (_, { rejectWithValue }) => {
    try {
        const response = await apiService.verifyToken();
        if (response.data.success && response.data.role === 'admin') {
            return { isAuthorized: true };
        } else {
            return { isAuthorized: false };
        }
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const adminAuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: null,
        loading: false,
    },
    reducers: {
        logout: (state) => {
            state.isAuthorized = false;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyAdminToken.pending, (state) => {
                state.loading = true;
            })
            .addCase(verifyAdminToken.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthorized = action.payload.isAuthorized;
            })
            .addCase(verifyAdminToken.rejected, (state, action) => {
                state.loading = false;
                state.isAuthorized = false;
            });
    },
});

export const { logout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
