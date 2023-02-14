const expect = require('chai').expect
const request = require('request')

describe(
    'delete user api', ()=>{
        describe('No id provided', ()=>{
            it('status', done=>{
                const payload = {
                    id: "63eb1fc1dc9db9079950db74"
                }
                request.delete('http://localhost:3000/user/deleteUser', {
                    json: payload
                }, (_, response)=>{
                    expect(response.statusCode).to.equal(200)
                    done()
                })
            })
            it('message', done=>{
                const payload = {
                    id: "63eb1fc1dc9db9079950db74"
                }
                request.delete('http://localhost:3000/user/deleteUser', {
                    json: payload
                }, (_, response, body)=>{
                    expect(body.message).to.equal('User succesfully deleted from DB')
                    done()
                })
            })
        })
    }
)