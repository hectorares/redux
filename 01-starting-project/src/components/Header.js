import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Redux Cart</h1>
          {/* <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li> */}
          {/* <li>
            <button>Logout</button>
          </li> */}
          <div className={classes.cartCounter}>My cart <div className={classes.cartBadge}>1</div></div>
    </header>
  );
};

export default Header;
