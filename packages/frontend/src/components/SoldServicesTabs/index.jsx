import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SoldServiceCard from '../ServiceCards/SoldServiceCard';
import ServiceCards from '../ServiceCards';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function SoldServicesTabs({ soldServices }) {
  const [value, setValue] = useState(0);
  const [pendingServices, setPendingServices] = useState([]);
  const [activeServices, setActiveServices] = useState([]);
  const [canceledServices, setCanceledServices] = useState([]);
  const [doneServices, setDoneServices] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setPendingServices(
      soldServices.filter((service) => service.status === 'NOT_INITIALIZED')
    );
    setActiveServices(
      soldServices.filter((service) => service.status === 'ACTIVE')
    );
    setCanceledServices(
      soldServices.filter((service) => service.status === 'CANCELED')
    );
    setDoneServices(
      soldServices.filter((service) => service.status === 'FINISHED')
    );
  }, [soldServices]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
        >
          <Tab label="PENDENTE" {...a11yProps(0)} />
          <Tab label="INICIADO" {...a11yProps(1)} />
          <Tab label="CANCELADO" {...a11yProps(2)} />
          <Tab label="CONCLUÍDO" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ServiceCards serviceType={pendingServices} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {activeServices.map((service, index) => {
          return <p key={index}>{service.id}</p>;
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {canceledServices.map((service, index) => {
          return <p key={index}>{service.id}</p>;
        })}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {doneServices.map((service, index) => {
          return <p key={index}>{service.id}</p>;
        })}
      </TabPanel>
    </Box>
  );
}
