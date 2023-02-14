const expect = require('chai').expect
const request = require('request')

describe(
    'add user api', ()=>{
        describe('No user provided', ()=>{
            it('status', done=>{
                const payload = {
                    name: "Bajrang",
                    Age: 25,
                    Gender: "male",
                    loginName: "bana",
                    email: "bana@bana.com"
                }
                request.post('http://localhost:3000/user/addUser', {
                    json: payload
                }, (_, response)=>{
                    expect(response.statusCode).to.equal(200)
                    done()
                })
            })
            it('Message', (done)=> {
                const payload = {
                    name: "Bajrang",
                    Age: 25,
                    Gender: "male",
                    loginName: "bana",
                    email: "bana@bana.com"
                }
                request.post('http://localhost:3000/user/addUser', {
                    json: payload
                }, (_, response, body)=>{
                    expect(body.message).to.equal('User succesfully added to DB')
                    done()
                })
            });
        })
    }
)