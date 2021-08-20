import * as S from './styles'

const Main = ({
  title = 'Brenno devops',
  description = 'TypeScript, React, NextJS e styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um atomo e Brenno devops" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um homem sentado programando"
    />
    ;
  </S.Wrapper>
)

export default Main
