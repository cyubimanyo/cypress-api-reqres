describe('Reqres API Testing - Update User', () => {
    it('[PUT] update user', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "Andhiny Fatikha",
                "job": "QA Engineer"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).has.property("name", "Andhiny Fatikha")
            expect(response.body).has.property("job", "QA Engineer")
        })
    })

    it('[PATCH] update user', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "Andhiny Fatikha",
                "job": "QA Engineer"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).has.property("name", "Andhiny Fatikha")
            expect(response.body).has.property("job", "QA Engineer")
        })
    })
})