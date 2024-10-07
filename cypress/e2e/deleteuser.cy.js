describe('Reqres API Testing - Delete User', () => {
    it('delete user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
            expect(response.status).to.equal(204)
            cy.log(JSON.stringify(response.body))
            console.log(response.body)
        })
    })
})