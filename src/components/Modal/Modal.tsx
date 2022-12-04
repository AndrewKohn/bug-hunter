import { FC, Fragment, ReactNode } from 'react';
import * as ReactDOM from 'react-dom';
import Card from '../UI/Card';
import './Modal.scss';

type Props = {
  children: ReactNode;
};

const Modal: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop">
          <div className="modal">
            <Card>
              <h2>this is my modal</h2>
              <div>{children}</div>
            </Card>
          </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;
