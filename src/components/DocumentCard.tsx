import { DocumentsProps } from "@/interface";

const DocumentCard: React.FC<Partial<DocumentsProps>> = ({ title }) => {
  return (
    <div className="doc-card">
      <div className="card-inner">
        <h5>{title}</h5>
        <img src="./images/down.svg" alt="arrow-down" />
      </div>
    </div>
  );
};
export default DocumentCard;
