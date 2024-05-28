import css from "./Page2.module.css";
function Page2() {
  return (
    <div className={css.background}>
      <form>
        <div>
          <label htmlFor="Name">Name</label>
          <br />
          <input type="text" name="Name" required minlength="3" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <br />
          <input type="password" name="Password" required minlength="3" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Page2;
