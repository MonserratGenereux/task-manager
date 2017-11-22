// const request = require('./../Request/CreateRequest');
// const StatusResponse = require('./../Response/StatusResponse');
// const expect = require("chai").expect;
// const sinon = require('sinon');
//
// var data_create = {
//   _id: "1",
//   userId: '1',
//   name: 'Juancho',
//   description: 'Descripcion',
//   good: true,
//   bad: false,
//   difficulty: '2'
// }
//
// let createRequest = new request(data_create);
//
// createRequest.db_schema = {
//   create1: sinon.stub().returns(Promise.resolve(true)),
//   create2: sinon.stub().returns(Promise.reject(true))
// }
//
// describe("RequestCreate",()=>{
//   context("when created and accepted", ()=>{
//     it("when accepted",async ()=>{
//       var sr = new StatusResponse(true,'12345','No attributes for response').generate();
//       console.log("SR", sr);
//       var response = sinon.stub().returns(sr);
//       console.log("response", response);
//       // await req = createRequest.exec();
//       // assert.equal(,response);
//       expect(response).to.equal(sr)
//     })
//   })
//   context("when created but rejected", ()=>{
//
//   })
//   context("when rejected", ()=>{
//
//   })
// });
