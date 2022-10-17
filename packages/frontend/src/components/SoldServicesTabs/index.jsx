import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SoldServiceCard from '../ServiceCards/SoldServiceCard';
import ServiceCards from '../ServiceCards';
import { useService } from '../../context/Services';

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

function numberOfService(array) {
  return array.length;
}

export default function SoldServicesTabs() {
  const [value, setValue] = useState(0);
  const { pendingServices, activeServices, canceledServices, doneServices } =
    useService();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab
            label={`PENDENTEs (${numberOfService(pendingServices)})`}
            {...a11yProps(0)}
          />
          <Tab
            label={`INICIADOS  (${numberOfService(activeServices)})`}
            {...a11yProps(1)}
          />
          <Tab
            label={`CANCELADOS  (${numberOfService(canceledServices)})`}
            {...a11yProps(2)}
          />
          <Tab
            label={`CONCLUÍDOS  (${numberOfService(doneServices)})`}
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ServiceCards serviceType={pendingServices} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ServiceCards serviceType={activeServices} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ServiceCards serviceType={canceledServices} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ServiceCards serviceType={doneServices} />
      </TabPanel>
    </Box>
  );
}
