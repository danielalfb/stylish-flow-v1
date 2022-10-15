import { createContext, useContext, useState } from 'react';
import { api } from '../service/api';

const ServiceContext = createContext();

export default function ServiceProvider({ children }) {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [pendingServices, setPendingServices] = useState([]);
  const [activeServices, setActiveServices] = useState([]);
  const [canceledServices, setCanceledServices] = useState([]);
  const [doneServices, setDoneServices] = useState([]);

  const loadData = async () => {
    try {
      const { data } = await api.get(
        `/services?createdAt=${todaysDate.toISOString().split('T')[0]}`
      );
      setPendingServices(
        data.filter((service) => service.status === 'NOT_INITIALIZED')
      );
      setActiveServices(data.filter((service) => service.status === 'ACTIVE'));
      setCanceledServices(
        data.filter((service) => service.status === 'CANCELED')
      );
      setDoneServices(data.filter((service) => service.status === 'FINISHED'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        pendingServices,
        activeServices,
        canceledServices,
        doneServices,
        loadData,
        todaysDate
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  const context = useContext(ServiceContext);

  const {
    pendingServices,
    activeServices,
    canceledServices,
    doneServices,
    loadData,
    todaysDate
  } = context;
  return {
    pendingServices,
    activeServices,
    canceledServices,
    doneServices,
    loadData,
    todaysDate
  };
}
