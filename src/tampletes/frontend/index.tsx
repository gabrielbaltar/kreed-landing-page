import * as S from './styles'

type FrontendProps = {
    children: React.ReactNode;
};


const Frontend = ({ children }: FrontendProps) => {
    return <S.Container>Testando o Front-end{children}</S.Container>;
}

export default Frontend;