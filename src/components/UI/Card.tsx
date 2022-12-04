import { ReactNode } from 'react';
import './Card.scss';

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className="card">{children}</div>;
};

export default Card;
