import { createContext, useContext, useState } from 'react';
import { api } from '../service/api';

const ServiceContext = createContext();

export default function ServiceProvider({ children }) {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [allServices, setAllServices] = useState([]);
  const [pendingServices, setPendingServices] = useState([]);
  const [activeServices, setActiveServices] = useState([]);
  const [canceledServices, setCanceledServices] = useState([]);
  const [doneServices, setDoneServices] = useState([]);

  const loadData = async () => {
    try {
      setLoading(true);
      true;
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
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loadHistoryData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/services?_sort=createdAt&_order=desc`);
      setAllServices(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        allServices,
        pendingServices,
        activeServices,
        canceledServices,
        doneServices,
        loadData,
        loadHistoryData,
        todaysDate,
        loading
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  const context = useContext(ServiceContext);

  const {
    allServices,
    pendingServices,
    activeServices,
    canceledServices,
    doneServices,
    loadData,
    loadHistoryData,
    todaysDate,
    loading
  } = context;
  return {
    allServices,
    pendingServices,
    activeServices,
    canceledServices,
    doneServices,
    loadData,
    loadHistoryData,
    todaysDate,
    loading
  };
}
