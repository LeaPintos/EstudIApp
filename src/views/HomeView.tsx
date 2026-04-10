import React from 'react';
import { useMaterias } from '../hooks/useMaterias';

const HomeView: React.FC = () => {
  const { materias, crear, eliminar } = useMaterias();
  return (
    <div className="glass-panel" style={{ padding: '24px' }}>
      <h2>COMMAND CENTER</h2>
      <div style={{ marginTop: '20px' }}>
        {materias?.map(m => (
          <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #333' }}>
            <span>{m.nombre}</span>
            <button onClick={() => eliminar(m.id!)}>BORRAR</button>
          </div>
        ))}
      </div>
      <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => crear('Nueva Materia')}>+ NUEVA MATERIA</button>
    </div>
  );
};

export default HomeView;
