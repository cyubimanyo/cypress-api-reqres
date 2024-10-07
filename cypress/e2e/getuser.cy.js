describe('Reqres API Testing - Get User List', () => {
  it('get list user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.log(JSON.stringify(response.body))
      console.log(response.body)
    })
  })

  it('single user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/2'
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.log(JSON.stringify(response.body))
      console.log(response.body)
    })
  })

  it('single user not found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/23',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(404)
      cy.log(JSON.stringify(response.body))
      console.log(response.body)
      expect(response.body).to.be.empty
    })
  })

  it('list <resource>', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown'
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.log(JSON.stringify(response.body))
      console.log(response.body)
    })
  })

  it('single <resource>', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown/2'
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.log(JSON.stringify(response.body))
      console.log(response.body)
    })
  })

  it('delayed response', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?delay=3'
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.log(JSON.stringify(response.body))
      console.log(response.body)
    })
  })
})