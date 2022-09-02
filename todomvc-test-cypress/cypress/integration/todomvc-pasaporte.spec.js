///<reference types="cypress"/>

it('should navigate to the TodoMVC APP',() =>{
  cy.visit('https://sedeelectronica.antioquia.gov.co/pasaporte/user/createAppointment/')
  cy.get('#num_ide').type('1152468633')
  cy.get('#fecha_pago').type('11/05/2022')
  cy.get('.ui-datepicker-close').click()
  //cy.select('#tipo_solic')
  cy.get('#num_tel').type('3146392964')
  cy.get('#correo').type('j.zuluaga774@pascualbravo.edu.co')
  cy.get('#correo_ok').type('j.zuluaga774@pascualbravo.edu.co')
  cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
  cy.get('#acepto').click()

  })
