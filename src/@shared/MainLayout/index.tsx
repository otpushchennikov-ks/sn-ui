import 'antd/dist/antd.css';
import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { IMainLayoutProps } from './interface';
import LoginDialogue from '@shared/LoginDialogue';


const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  const [loginDialogueIsOpen, setLoginDialogueIsOpen] = useState(false);

  return (
    <div>
      <div>Main Layout</div>
      <Button onClick={() => setLoginDialogueIsOpen(true)}>
        Аутентификация
      </Button>
      <LoginDialogue
        isOpen={loginDialogueIsOpen}
        onCancel={() => setLoginDialogueIsOpen(false)}
      />
      <div>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
