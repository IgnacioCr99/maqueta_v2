import React from 'react'
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import OffIcon from '@rsuite/icons/Off';
import CombinationIcon from '@rsuite/icons/Combination';
import RandomIcon from '@rsuite/icons/Random';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import 'rsuite/dist/rsuite.min.css';
import { Link,  } from 'react-router-dom';

export const Sidemenu = () => {
    const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  return (
    <div style={{ width: 240 }}>
      
      
      <Sidenav  appearance='default' expanded={expanded} defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Menu placement="rightStart" eventKey="3" title="Control de Operaciones" icon={<DashboardIcon />}>
              <Nav.Item eventKey="3-1" as={Link} to={'/'}>Home</Nav.Item>
              <Nav.Item eventKey="3-1" as={Link} to={'/fecha_vencimiento'}>Fecha de vencimiento</Nav.Item>
              <Nav.Item eventKey="3-1" as={Link} to={'/saldo_en_custodia'}>Saldo en custodia</Nav.Item>
              <Nav.Item eventKey="3-1" as={Link} to={'/pago_vcto'}>pago_vcto</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Documentos"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1" as={Link} to={'/comprobantes'}>Comprobantes</Nav.Item>
              <Nav.Item eventKey="4-2" as={Link} to={'/contratos'}>Contratos</Nav.Item>
              
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  )
}
