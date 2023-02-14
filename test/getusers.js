const expect = require('chai').expect
const request = require('request')

describe(
    'get user api', ()=>{
        describe('No id provided', ()=>{
            it('status', done=>{
                request.get('http://localhost:3000/user/getUsers', {}, (_, response)=>{
                    expect(response.statusCode).to.equal(200)
                    done()
                })
            })
        })
    }
)