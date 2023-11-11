import React, { ReactNode } from 'react';
import { PageContainerStyled } from './PageContainer.styled';

export interface IPageContainerProps {
  children?: ReactNode
}

export const PageContainer: React.FC<IPageContainerProps> = ({ children }) => {
  return <PageContainerStyled>{children}</PageContainerStyled>;
};
