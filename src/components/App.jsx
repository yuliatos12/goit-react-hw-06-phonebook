import { useState, useEffect } from "react"
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";

import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";


  export const App = () => {


return(
  <Container>
  <ContactForm/>
  <Filter/>
  <ContactList />
  </Container>

)
}