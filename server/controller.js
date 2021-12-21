const houses = require('./db.json')
let houseId = 4

module.exports={
  getHouses: (req,res)=>{ 
      res.status(200).send(houses)
  },
  deleteHouse: (req,res)=>{
     // console.log('req params', req.params)
     let targetId = +req.params.id
        console.log('target id',targetId)
     const foundIndex = houses.findIndex(house=>{
        // console.log('house', house.id)
        console.log('house', house.id, targetId)
        return house.id === targetId
     })

     houses.splice(foundIndex, 1)
     res.status(200).send(houses)
  },
  createHouse: (req,res)=>{
      //console.log('req', req)
      req.body.id = houseId
      houses.push(req.body)
      houseId += 1
      res.status(200).send(houses)
  },
  updateHouse: (req,res)=>{
      console.log('req is', req.params.id)
     let targetId = req.params.id
     let {type} = req.body
    // console.log('req.body.type is', req.body.type)
    //let housePrice = 0
    const foundIndex = houses.findIndex(house=>{
        console.log('what is house', house)
          //  console.log('house id', house.id, targetId)
        if(type === "minus" && house.id == targetId){
            console.log('inside minus')
            house.price--
            res.status(200).send(houses)
        }else if(type === "plus" && house.id == targetId){
           house.price++
           res.status(200).send(houses)
        }
        
     })
        
    //console.log('price is', housePrice, foundIndex)
  }
}