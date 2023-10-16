import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactSearchFilter } from "./ContactSearchFilter/ContactSearchFilter";
import css from "./App.module.css"

export const App = () => (
  <div className={css.container}>
<h1>Phonebook</h1>
<ContactForm />
<h2>My Contacts</h2>
<ContactSearchFilter />
<ContactList />
</div>
);
