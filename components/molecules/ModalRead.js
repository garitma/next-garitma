import ModalClose from "../atoms/ModalClose";

export default class ModalRead extends React.Component {
  render() {
    const { document, onClose, children } = this.props;

    return (
      <div className="modal-read">
        <ModalClose document={document} onClose={onClose} />
        {children}
      </div>
    );
  }
}
