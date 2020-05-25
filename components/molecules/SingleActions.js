export default class SingleAction extends React.Component {
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { document } = this.props;

    return (
      <>
        {document.data.download && (
          <a href={document.data.download.url} target="_blank" download>
            <div className="glyphsSprite download action" />
          </a>
        )}
      </>
    );
  }
}
