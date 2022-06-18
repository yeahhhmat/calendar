import create from 'zustand';
import {StateProps} from './state.interfaces';

const defaultState = {
  mobileNav: {
    isOpen: Boolean(false),
    isClosed: Boolean(true)
  }
};

export const useStore = create<StateProps>((set) => ({
  ...defaultState,
  closeMobileNav: () => set(() => ({
    mobileNav: {isOpen: Boolean(false), isClosed: Boolean(true)},
  })),
  openMobileNav: () => set(() => ({
    mobileNav: {isOpen: Boolean(true), isClosed: Boolean(false)},
  }))
}));
