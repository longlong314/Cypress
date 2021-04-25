/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
      cy.visit('https://test-pc-vdr.hillinsight.tech/login')//visit  url地址
    })
  
    it('vdr-login', () => {
      // https://on.cypress.io/window
      //.should断言  语法:  should()
      //.window获取window当前处于活动状态的页面的对象。
      cy.window().should('have.property', 'top')

      cy.title().should('include','Hillhouse VDR')

      cy.get('#normal_login_username').type('15003335617@163.com').should('have.value', '15003335617@163.com')

      cy.get('#normal_login_password').type('Qq123456789')
      /*
      Timed out retrying after 4000ms: Expected to find element: #submit, but never found it.
      */
      //cy.get('.submit').click()
      //cy.focus().click()
  
      cy.contains('登 录').click()

      cy.contains('test-api').click()

      cy.contains('#button.ant-btn').click()
      /*
      cy.window().should('have.property','top')
      cy.window().scrollTo('bottom')
      */
    })
  
    it('cy.document() - get the document object', () => {
      // https://on.cypress.io/document
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
  
    
  })
  