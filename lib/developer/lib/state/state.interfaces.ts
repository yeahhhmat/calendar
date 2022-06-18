export type StateProps = {
  mobileNav: {
    isOpen: boolean;
    isClosed: boolean;
  };
  isSafeClick: 'safe-side-nav' | 'safe-nav-item' | 'safe-toggler' | boolean;
  closeMobileNav: () => void,
  openMobileNav: () => void,
}
