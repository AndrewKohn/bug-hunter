import './SectionHeading.scss';

interface Props {
  title: string;
}

const SectionHeading = ({ title }: Props) => {
  return <h2 className="section-title">{title}</h2>;
};

export default SectionHeading;
