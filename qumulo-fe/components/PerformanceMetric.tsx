import React, { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';
import TimeSeriesChart from './common/TimeSeriesChart';
import styles from '../styles/PerformanceMetric.module.css';
import { useNavBarContext } from '../context/NavBarContext';

const PerformanceMetric = () => {
  const [iopsData, setIopsData] = useState([]);
  const [throughputData, setThroughputData] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState({
    iopsRead: '',
    iopsWrite: '',
    throughputRead: '',
    throughputWrite: '',
  });

  const { isOpen } = useNavBarContext();

  useEffect(() => {
    apiService.getPerformanceData().then(data => {
      setIopsData(data.iops);
      setThroughputData(data.throughput);
      setAdditionalInfo(data.additionalInfo);
    });
  }, []);

  return (
    <div className={`${styles.pageArea} ${isOpen ? styles.open : ''}`}>
      <header className="text-2xl font-bold mb-6">Performance Metric</header>
      <article className={styles.pageBody}>
        <div className={styles.widget}>
          <div className={styles.chartContainer}>
            <TimeSeriesChart data={iopsData} title="IOPS" />
          </div>
          <div className={styles.additionalInfo}>
            <h3>IOPS</h3>
            <p className={styles.readInfo}>Read: {additionalInfo.iopsRead}</p>
            <p className={styles.writeInfo}>Write: {additionalInfo.iopsWrite}</p>
          </div>
        </div>
        <div className={styles.widget}>
          <div className={styles.chartContainer}>
            <TimeSeriesChart data={throughputData} title="Throughput" />
          </div>
          <div className={styles.additionalInfo}>
            <h3>ThroughPut</h3>
            <p className={styles.readInfo}>Read: {additionalInfo.throughputRead}</p>
            <p className={styles.writeInfo}>Write: {additionalInfo.throughputWrite}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PerformanceMetric;
