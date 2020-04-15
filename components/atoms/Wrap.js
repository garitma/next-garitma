export default class Wrap extends React.Component {
  render() {
    const { children, classSection, classDiv } = this.props;

    return (
      <section className={`${classSection} pad`}>
        <div className={`${classDiv || "smush"}`}>{children}</div>
      </section>
    );
  }
}
