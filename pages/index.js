import Link from 'next/link';
import { Button } from 'antd';
import styles from '../styles/index.less';

export default () => {
  return (
    <div className={styles.main}>
      123
      <ul>
        <li>
          <Link href='/'>
            <Button>首页</Button>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <Button>关于</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
