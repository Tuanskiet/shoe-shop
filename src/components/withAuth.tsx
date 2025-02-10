import React from 'react';

// Định nghĩa kiểu cho props của component được bọc
interface WithAuthProps {
    // Thêm bất kỳ props nào mà bạn muốn sử dụng
}

// Tạo HOC với kiểu cho WrappedComponent
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P & WithAuthProps) => {
        // Logic để kiểm tra xác thực
        const isAuthenticated = /* logic to check authentication */ true;

        if (!isAuthenticated) {
            return <div>You need to log in to access this page.</div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
