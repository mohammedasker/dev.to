import { h } from 'preact';
import PropTypes from 'prop-types';
import SingleListing from '../singleListing';
import MessageModal from './MessageModal';

const Modal = ({
  currentUserId,
  onAddTag,
  onChange,
  onClick,
  onChangeCategory,
  onOpenModal,
  onSubmit,
  listing,
  message,
}) => {
  const shouldRenderMessageModal = listing && listing.contact_via_connect;

  return (
    <div className="single-classified-listing-container">
      <div
        id="single-classified-listing-container__inner"
        className="single-classified-listing-container__inner"
        onClick={onClick}
        role="button"
        onKeyPress={onClick}
        tabIndex="0"
      >
        <SingleListing
          onAddTag={onAddTag}
          onChangeCategory={onChangeCategory}
          listing={listing}
          currentUserId={currentUserId}
          onOpenModal={onOpenModal}
          isOpen
        />
        {shouldRenderMessageModal && (
          <MessageModal
            onSubmit={onSubmit}
            onChange={onChange}
            message={message}
            listing={listing}
          />
        )}
        <a
          href="/about-listings"
          className="single-classified-listing-info-link"
        >
          About DEV Listings
        </a>
        <div className="single-classified-listing-container__spacer" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  listing: PropTypes.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currentUserId: PropTypes.number,
  message: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  currentUserId: null,
};

export default Modal;
