import * as cn from "classnames/bind";
const styles = {
  foo: "abc",
  bar: "def",
  baz: "xyz"
};
const cx = cn.bind(styles);
const className = cx("foo", ["bar"], { baz: true }); // => "abc def xyz"
