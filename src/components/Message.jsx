import PropTypes from 'prop-types';

export default function Message({ text = 'Default' }) {
  return <div>{text}</div>;
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
