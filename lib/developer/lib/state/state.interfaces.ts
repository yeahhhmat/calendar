export type StateProps = {
  mobileNav: {
    isOpen: boolean;
    isClosed: boolean;
  }
  closeMobileNav: (arg: boolean) => void,
  openMobileNav: (arg: boolean) => void,
}
