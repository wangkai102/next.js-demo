import Link from 'next/link';
export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/'>
            <a>首页</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>关于</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
