// NotificationContext.tsx
import React, { createContext, useContext, ReactNode, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface NotificationContextType {
    notify: (message: string, options?: any) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const notify = useCallback((message: string, options: any = {}) => {
        toast(message, options);
    }, []);

    return (
        <NotificationContext.Provider value={{ notify }}>
            {children}
            <ToastContainer />
        </NotificationContext.Provider>
    );
};