interface HorizontalContainerProps {
  limit: number;
  children: React.ReactNode;
}

const HorizontalContainer: React.FC<HorizontalContainerProps> = ({
  limit,
  children,
}) => {
  return (
    <div className="flex mx-auto overflow-x-auto" style={{ maxWidth: `${limit}px` }}>
      {children}
    </div>
  );
};

export default HorizontalContainer;
