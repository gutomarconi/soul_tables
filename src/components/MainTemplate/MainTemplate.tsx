import React, { ReactNode } from 'react';
import { Content, Wrapper } from './MainTemplate.styled';
import { PageContainer } from '../PageContainer/PageContainer';
import { SideBar } from '../SideBar';

interface IMainTemplateProps {
  children: ReactNode;
}

export const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        {/* <SideBar /> */}
        <PageContainer>
          {children}
        </PageContainer>
      </Content>
    </Wrapper>
  );
};
