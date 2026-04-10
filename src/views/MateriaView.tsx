import React from 'react';
import { useParams } from 'react-router-dom';

const MateriaView: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>GESTIÃ“N DE MATERIA: {id}</h2>
    </div>
  );
};

export default MateriaView;
