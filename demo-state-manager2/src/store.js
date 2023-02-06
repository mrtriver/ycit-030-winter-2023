import {create} from 'zustand';

export const useBearsStore = create(() => {
    console.log('useStore is created and initialized');
    return {
        bears: 0,
        increasePopulate: () => {},
        reset: () => {},
    }
});