const expect = require('chai').expect
const request = require('request')

describe(
    'update user api', ()=>{
        describe('No id or name provided', ()=>{
            it('status', done=>{
                const payload = {
                    id: "63eb1fc1dc9db9079950db74",
                    name: "Abc"
                }
                request.post('http://localhost:3000/user/updateUser', {
                    json: payload
                }, (_, response)=>{
                    expect(response.statusCode).to.equal(200)
                    done()
                })
            })
            it('message', done=>{
                const payload = {
                    id: "63eb1fc1dc9db9079950db74",
                    name: "Abc"
                }
                request.post('http://localhost:3000/user/updateUser', {
                    json: payload
                }, (_, response, body)=>{
                    expect(body.message).to.equal('Data succesfully updated in DB')
                    done()
                })
            })
        })
    }
)