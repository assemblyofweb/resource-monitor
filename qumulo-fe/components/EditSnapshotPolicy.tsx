import React, { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';
import TimePicker from './common/TimePicker';
import CheckboxList from './common/CheckboxList';
import RadioButtonList from './common/RadioButtonList';
import NumberInput from './common/NumberInput';
import styles from '../styles/EditSnapshotPolicy.module.css';
import { useNavBarContext } from '../context/NavBarContext';

const EditSnapshotPolicy = () => {
  const [state, setState] = useState({
    projectName: '',
    directoryName: '',
    scheduleTime: '',
    timeZone: '',
    days: [] as string[],
    deletePolicy: '',
    deleteAfterDays: 99,
    enableLockedSnapshots: false,
    enablePolicy: false,
  });

  const { isOpen } = useNavBarContext();

  useEffect(() => {
    apiService.getSnapshotPolicy().then(data => {
      setState(data);
    });
  }, []);

  const savePolicy = () => {
    apiService
      .saveSnapshotPolicy(state)
      .then(response => {
        alert(response.message);
      })
      .catch(error => {
        console.error('There was an error updating the policy!', error);
      });
  };

  return (
    <div className={`${styles.pageArea} ${isOpen ? styles.open : ''}`}>
      <header className={styles.header}>Edit Snapshot Policy</header>
      <article className={styles.pageBody}>
        <TextInput
          label="Project Name"
          value={state.projectName}
          onChange={value => setState({ ...state, projectName: value })}
        />
        <TextInput
          label="Apply to Directory"
          value={state.directoryName}
          onChange={value => setState({ ...state, directoryName: value })}
        />
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Select Schedule Time:</label>
            <SelectInput
              options={[{ label: 'Daily or Weekly', value: 'dailyOrWeekly' }]}
              onChange={value => setState({ ...state, scheduleTime: value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Select TimeZone:</label>
            <SelectInput
              options={[{ label: 'America/Los Angeles', value: 'America/Los_Angeles' }]}
              onChange={value => setState({ ...state, timeZone: value })}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Take a snapshot at:</label>
          <TimePicker format="24h" onChange={value => setState({ ...state, scheduleTime: value })} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>One of the following Day(s):</label>
          <CheckboxList
            options={[
              { label: 'Every Day', value: 'everyDay' },
              { label: 'Weekends', value: 'weekends' },
              { label: 'Weekdays', value: 'weekdays' },
            ]}
            onChange={values => setState({ ...state, days: values })}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Delete Each Snapshot:</label>
          <RadioButtonList
            options={[
              { label: 'Never', value: 'never' },
              { label: 'Automatically After', value: 'automaticallyAfter' },
            ]}
            onChange={value => setState({ ...state, deletePolicy: value })}
          />
          {state.deletePolicy === 'automaticallyAfter' && (
            <div className={styles.subSection}>
              <NumberInput
                defaultValue={state.deleteAfterDays}
                onChange={value => setState({ ...state, deleteAfterDays: value })}
              />{' '}
              days
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            <b>Snapshot Locking</b>
          </label>
          <p className={styles.formText}>
            Locked snapshots cannot be deleted before the deletion schedule expires. For this feature to be available,
            snapshots must be set to automatically delete.
          </p>
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={state.enableLockedSnapshots}
              onChange={() => setState({ ...state, enableLockedSnapshots: !state.enableLockedSnapshots })}
            />
            <i className="form-icon"></i>
            Enable locked snapshots
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={state.enablePolicy}
              onChange={() => setState({ ...state, enablePolicy: !state.enablePolicy })}
            />
            <i className="form-icon"></i>
            Enable Policy
          </label>
        </div>
        <div className={styles.buttonGroup}>
          <button className="btn btn-primary" onClick={savePolicy}>
            Save Policy
          </button>
          <button className="btn btn-link">Cancel</button>
        </div>
      </article>
    </div>
  );
};

export default EditSnapshotPolicy;
