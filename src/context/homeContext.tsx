import React, { createContext, useContext } from 'react';

interface HomeContextProps {
    children?: React.ReactNode;
    activeTab?: string;
}

type HomeContextExtChild = Omit<HomeContextProps, 'children'>;

const HomeContext = createContext<HomeContextExtChild>({
    activeTab: 'default_tab',
});

const HomeContextProvider = ({ children, ...props }: HomeContextProps) => {
    const originContext = useContext<HomeContextExtChild>(HomeContext);

    return (
        <HomeContext.Provider
            value={
                props
                    ? {
                          ...props,
                      }
                    : originContext
            }
        >
            {children}
        </HomeContext.Provider>
    );
};

const useHomeContext = () => {
    const context = useContext(HomeContext);

    if (!context) {
        throw new Error('useHomeContext must be used within a HomeContextProvider');
    }
    return context;
};

export { HomeContextProvider, useHomeContext };
