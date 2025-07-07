// src/features/food/foodSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  getFoodListings,
  addFoodListing as firebaseAddFoodListing,
  uploadImage
} from '../../firebase';

export const fetchFoodListings = createAsyncThunk(
  'food/fetchFoodListings',
  async () => {
    const listings = await getFoodListings();
    return listings;
  }
);

export const addFoodListing = createAsyncThunk(
  'food/addFoodListing',
  async ({ foodData, userId }, { rejectWithValue }) => {
    try {
      // Upload image if exists
      let imageUrl = '';
      if (foodData.imageFile) {
        imageUrl = await uploadImage(foodData.imageFile);
      }
      
      // Add to Firebase
      const listingData = {
        ...foodData,
        imageUrl,
        userId,
        status: 'available'
      };
      delete listingData.imageFile;
      
      const id = await firebaseAddFoodListing(listingData, userId);
      return { id, ...listingData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const foodSlice = createSlice({
  name: 'food',
  initialState: {
    listings: [],
    status: 'idle',
    error: null
  },
  reducers: {
    // Add reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFoodListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.listings = action.payload;
      })
      .addCase(fetchFoodListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addFoodListing.fulfilled, (state, action) => {
        state.listings.push(action.payload);
      });
  }
});

export default foodSlice.reducer;