import { create } from 'zustand';
import axios from 'axios';
import { User } from '@/lib/types';

// Define the shape of the state
interface UserState {
  user: User | null;
  fetchUser: () => Promise<void>;
}

// Create the store
const useUserStore = create<UserState>((set) => ({
  user: null,

  // Action to fetch the user data
  fetchUser: async () => {
    try {
      const response = await axios.get('/api/user');
      set({ user: response.data.user });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
}));

export default useUserStore;
