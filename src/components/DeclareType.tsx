import { useEffect } from 'react';
import withAuth from './withAuth';

declare type User = {
    name: string;
    age: number;
    default?: ['default', 'outlined'];
};

interface BaseToken {
    key: string;
}

interface TokenTypeImpl extends BaseToken {
    key: string;
}

type StringOrNumber = string | number;

declare type GenerateType<TokenType extends BaseToken, ReturnTypeCustom = User> = (
    token: TokenType,
    s: StringOrNumber
) => ReturnTypeCustom;

const DeclareType = () => {
    useEffect(() => {
        generateType({ key: '1' }, 1);
    }, []);

    const generateType: GenerateType<TokenTypeImpl, User> = (token, hi) => {
        const user: User = {
            name: 'John',
            age: 30,
        };

        console.log(token);
        return user;
    };

    type GenerateReturnType = ReturnType<typeof generateType>;

    const user: GenerateReturnType = {
        name: 'tuan Kiet',
        age: 20,
    };

    console.log(user);

    return <div className="text-custom-success container-center">DeclareType</div>;
};

export default withAuth(DeclareType);
