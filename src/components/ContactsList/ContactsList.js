import css from "./ContactsList.module.css";
import PropTypes from "prop-types";

const ContactsList = ({ contact, ondeleteContact }) => (
  <ul className={css.phoneList}>
    {contact.map(({ id, name, number }) => (
      <li key={id} className={css.ContactsList}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button
          onClick={() => ondeleteContact(id)}
          className={css.button}
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contact: PropTypes.array,
  ondeleteContact: PropTypes.func,
};

export default ContactsList;
