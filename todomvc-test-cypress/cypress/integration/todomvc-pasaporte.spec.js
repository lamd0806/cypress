///<reference types="cypress"/>

describe('todo actions',()=>{ 
  beforeEach(()=>{
      cy.visit('https://sedeelectronica.antioquia.gov.co/pasaporte/user/createAppointment/')
      cy.get('.new-todo',{timeout:4000}).type('Clean room{enter}')
  })
 
})