import ModalRead from "../molecules/ModalRead"
import SingleRead from "./SingleRead"

export default class SingleModal extends React.Component {
    render() {

        const { document, onClose } = this.props

        return (
            <ModalRead document={document} onClose={onClose}>
                <SingleRead document={document} />
            </ModalRead>
        )
    }
}