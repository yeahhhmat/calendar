const Prose = ({root, className, children, ...rest}) => {
  const Root = root ? root : 'div';
  return (
    <Root className={clsx("prose", className && className)} {...rest}>
      {children}
    </Root>
  )
};

export default Prose;
