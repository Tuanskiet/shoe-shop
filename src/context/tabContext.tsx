import { createContext, useContext, useState, ReactNode } from 'react';

// Define a type for the context value
interface TabContextType {
    activeTab: string;
    switchToTab: (key: string) => void;
}

// Create the context with a default value
const TabContext = createContext<TabContextType | undefined>({
    activeTab: '1',
    switchToTab: () => {},
});

const TabProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState<string>('1');

    const switchToTab = (key: string) => {
        setActiveTab(key);
    };

    return <TabContext.Provider value={{ activeTab, switchToTab }}>{children}</TabContext.Provider>;
};

const useTabContext = () => {
    const context = useContext(TabContext);

    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
};

export { TabProvider, useTabContext };
