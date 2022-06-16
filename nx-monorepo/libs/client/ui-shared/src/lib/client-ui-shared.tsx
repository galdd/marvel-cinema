import styles from './client-ui-shared.module.scss';

/* eslint-disable-next-line */
export interface ClientUiSharedProps {}

export function ClientUiShared(props: ClientUiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientUiShared!</h1>
    </div>
  );
}

export default ClientUiShared;
