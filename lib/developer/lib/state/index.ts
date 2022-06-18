import create from 'zustand';
import {StateProps} from './state.interfaces';

export const useStore = create<StateProps>((set) => ({
  mobileNav: {
    isOpen: false,
    isClosed: true
  },
  closeMobileNav: (arg: boolean) => set((state) => ({
    mobileNav: {isOpen: !arg, isClosed: arg},
  })),
  openMobileNav: (arg: boolean) => set((state) => ({
    mobileNav: {isOpen: arg, isClosed: !arg},
  }))
}));
