export default class Wrap extends React.Component {
  render() {
    const { children, classSection, classDiv, color } = this.props;

    return (
      <section
        className={`${classSection} pad`}
        style={{ backgroundColor: color || "" }}
      >
        <div className={`${classDiv || "smush"}`}>{children}</div>
      </section>
    );
  }
}
