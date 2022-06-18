export type StateProps = {
  mobileNav: {
    isOpen: boolean;
    isClosed: boolean;
  }
  closeMobileNav: () => void,
  openMobileNav: () => void,
}
