type ContainerProps = {
    children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="flex flex-col  mx-auto bg-white/[2%] min-h-screen">{children}</div>;
};

export default Container;
