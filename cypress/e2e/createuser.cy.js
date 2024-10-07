describe('Reqres API Testing - Create User', () => {
    it('create user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Andhiny Fatikha",
                "job": "QA Engineer"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "Andhiny Fatikha")
        })
    })

    it('register successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body))
            console.log(response.body)

            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('token')
        })
    })

    it('register unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                "email": "eve.holt@reqres.in"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            cy.log(JSON.stringify(response.body))
            console.log(response.body)
        })
    })

    it('login successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body))
            console.log(response.body)
            expect(response.body).to.have.property('token')
        })
    })

    it('login unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                "email": "peter@klaven"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            cy.log(JSON.stringify(response.body))
            console.log(response.body)
        })
    })
})